import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { HomeScreen } from '../screens/HomeScreen';
import { SpaceShowsScreen } from '../screens/SpaceShowsScreen';
import { ShopScreen } from '../screens/ShopScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const initialLayout = { width: Dimensions.get('window').width };

export default function BottomTabNavigator() {
  const [index, setIndex] = useState(1); // Start from Home as the center
  const [routes] = useState([
    { key: 'spaceshows', title: 'SpaceShows' },
    { key: 'home', title: 'Home' },
    { key: 'shop', title: 'Shop' },
    { key: 'profile', title: 'profile'},
  ]);

  const renderScene = SceneMap({
    spaceshows: SpaceShowsScreen,
    home: HomeScreen,
    shop: ShopScreen,
    profile: ProfileScreen,
  });

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={() => null} 
        swipeEnabled={true}
      />
      <CustomTabBar index={index} setIndex={setIndex} />
    </View>
  );
}

interface CustomTabBarProps {
  index: number;
  setIndex: (index: number) => void;
}

function CustomTabBar({ index, setIndex }: CustomTabBarProps) {
    // Dynamically rearrange the order of tabs and limit to 3 visible at once
    const getTabOrder = () => {
      if (index === 0) {
        return (
          <>
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={0} label="SpaceShows" icon={require('../assets/icons/spaceshows.png')} />
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={1} label="Home" icon={require('../assets/icons/home.png')} />
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={2} label="Shop" icon={require('../assets/icons/shop.png')} />
          </>
        );
      } else if (index === 1) {
        return (
          <>
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={0} label="SpaceShows" icon={require('../assets/icons/spaceshows.png')} />
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={1} label="Home" icon={require('../assets/icons/home.png')} />
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={2} label="Shop" icon={require('../assets/icons/shop.png')} />
          </>
        );
      } else if (index === 2) {
        return (
          <>
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={1} label="Home" icon={require('../assets/icons/home.png')} />
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={2} label="Shop" icon={require('../assets/icons/shop.png')} />
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={3} label="Profile" icon={require('../assets/icons/profile.png')} />
          </>
        );
      } else if (index === 3){
        return (
          <>
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={1} label="Home" icon={require('../assets/icons/home.png')} />
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={2} label="Shop" icon={require('../assets/icons/shop.png')} />
            <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={3} label="Profile" icon={require('../assets/icons/profile.png')} />
          </>
        );
      }
    };
  
    return <View style={styles.tabContainer}>{getTabOrder()}</View>;
  }
  

// Single tab item component
function TabItem({ setIndex, selectedIndex, currentIndex, label, icon }: any) {
  return (
    <TouchableOpacity onPress={() => setIndex(currentIndex)} style={styles.tabButton}>
      <Image
        source={icon}
        style={[
          styles.icon,
          selectedIndex === currentIndex && styles.activeIcon,
          selectedIndex === currentIndex && styles.upwardIcon, // Move icon upward when active
          selectedIndex !== currentIndex && styles.lowerInactiveIcon, // Move inactive icon downward
        ]}
      />
      <Text style={[styles.label, selectedIndex === currentIndex && styles.activeLabel]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  tabButton: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  activeIcon: {
    width: 50, // Larger size for active icon
    height: 50,
    tintColor: '#FFD700', // Active color
  },
  upwardIcon: {
    marginBottom: 10, // Move the active icon upwards
  },
  lowerInactiveIcon: {
    marginTop: 25, // Move inactive icons downward
  },
  label: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
  activeLabel: {
    color: '#FFD700', // Active label color
  },
});
