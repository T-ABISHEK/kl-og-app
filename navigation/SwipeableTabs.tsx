import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SpaceShowsScreen } from '../screens/SpaceShowsScreen';
import { ShopScreen } from '../screens/ShopScreen';

const SwipeTab = createMaterialTopTabNavigator();

export default function SwipeableTabs() {
  return (
    <SwipeTab.Navigator
      screenOptions={{
        swipeEnabled: true, // Enable swipe
        tabBarStyle: { display: 'none' }, // Hide the top tab bar, only allow swipe
      }}
    >
      <SwipeTab.Screen name="Home" component={HomeScreen} />
      <SwipeTab.Screen name="SpaceShows" component={SpaceShowsScreen} />
      <SwipeTab.Screen name="Shop" component={ShopScreen} />
    </SwipeTab.Navigator>
  );
}
