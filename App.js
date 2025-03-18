import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { useTheme } from './src/hooks/useTheme';

const AppContent = () => {
  const theme = useTheme();
  
  return (
    <SafeAreaView style={{ 
      flex: 1, 
      backgroundColor: theme.colors.background 
    }}>
      <StatusBar 
        barStyle={theme.isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      <AppNavigator />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
