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
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return (
                <Image
                  source={iconsConfig.home.path}
                  style={[iconsConfig.home.style, { tintColor: color }]}
                  resizeMode="contain"
                />
              );
            } else if (route.name === 'SpaceShows') {
              return (
                <Image
                  source={iconsConfig.spaceShows.path}
                  style={[iconsConfig.spaceShows.style, { tintColor: color }]}
                  resizeMode="contain"
                />
              );
            } else if (route.name === 'Shop') {
              return (
                <Image
                  source={iconsConfig.shop.path}
                  style={[iconsConfig.shop.style, { tintColor: color }]}
                  resizeMode="contain"
                />
              );
            }
          },
          tabBarLabelStyle: { fontSize: 12 },
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
});
