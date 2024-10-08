import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

export const useFontLoader = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      'VT323': require('../assets/fonts/VT323-Regular.ttf'), // Load your single custom font
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  }, []);

  return fontLoaded;
};
