import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './colors';
import { typography } from './typography';

export const ThemeContext = createContext();

const THEME_PREFERENCE_KEY = '@theme_preference';

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const savedPreference = await AsyncStorage.getItem(THEME_PREFERENCE_KEY);
      if (savedPreference !== null) {
        setIsDark(savedPreference === 'dark');
      }
    } catch (error) {
      console.error('Erro ao carregar preferência de tema:', error);
    }
  };

  const toggleTheme = async () => {
    try {
      const newTheme = !isDark;
      setIsDark(newTheme);
      await AsyncStorage.setItem(
        THEME_PREFERENCE_KEY,
        newTheme ? 'dark' : 'light'
      );
    } catch (error) {
      console.error('Erro ao salvar preferência de tema:', error);
    }
  };

  const theme = {
    ...(isDark ? darkTheme : lightTheme),
    typography,
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
