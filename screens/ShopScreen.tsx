import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const ShopScreen = () => {
  const [fontsLoaded] = useFonts({
    'VT323': require('../assets/fonts/VT323-Regular.ttf'), // Ensure the correct font path
  });

  if (!fontsLoaded) {
    return null; // Return null or a loader while fonts are loading
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shop Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'VT323', // Apply the custom font here
  },
});
