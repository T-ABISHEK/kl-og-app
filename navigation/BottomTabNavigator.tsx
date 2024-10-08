import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { SpaceShowsScreen } from '../screens/SpaceShowsScreen';
import { ShopScreen } from '../screens/ShopScreen';
import { iconsConfig } from '../components/iconsConfig';

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('window').width;

export default function BottomTabNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            const backgroundImage = focused ? require('../assets/icons/Ellipse 3.png') : null;
            
            let iconSource;
            let iconStyle;
            
            if (route.name === 'Home') {
              iconSource = iconsConfig.home.path;
              iconStyle = iconsConfig.home.style;
            } else if (route.name === 'SpaceShows') {
              iconSource = iconsConfig.spaceShows.path;
              iconStyle = iconsConfig.spaceShows.style;
            } else if (route.name === 'Shop') {
              iconSource = iconsConfig.shop.path;
              iconStyle = iconsConfig.shop.style;
            }

            return (
              <View style={styles.iconContainer}>
                {focused && (
                  <Image
                    source={backgroundImage}
                    style={styles.backgroundImage}
                    resizeMode="contain"
                  />
                )}
                <Image
                  source={iconSource}
                  style={[iconStyle, { tintColor: color }]}
                  resizeMode="contain"
                />
              </View>
            );
          },
          tabBarLabelStyle: {
            fontSize: 10,
            marginLeft: -15, 
            textAlign: 'center', 
          },
          tabBarStyle: {
            backgroundColor: 'black',
            elevation: 0,
            shadowOpacity: 0,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#FFD700',
          tabBarInactiveTintColor: '#fff',
          headerShown: false,
        })}
      >
        <Tab.Screen name="SpaceShows" component={SpaceShowsScreen} options={{ tabBarLabel: 'SpaceShows' }} />
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Shop" component={ShopScreen} options={{ tabBarLabel: 'Shop' }} />
      </Tab.Navigator>

      {/* Footer Line Image */}
      <Image
        source={iconsConfig.footerLine.path}
        style={[styles.footerLine, { width: screenWidth * 1 }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footerLine: {
    position: 'absolute',
    bottom: 50,
    height: 17,
  },
  iconContainer: {
    position: 'relative', 
    width: 40, 
    height: 40, 
  },
  backgroundImage: {
    position: 'absolute',
    width: 50,  
    height: 50,
    top: -12,   
    left: -13, 
  },
});
