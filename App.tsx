import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { theme } from './src/theme';
import Routes from './src/routes';
import { LoteriaProvider } from './src/contexts';

const App: React.FC = () => {
  return (
    <LoteriaProvider>
      <NavigationContainer>
      <StatusBar style="dark" backgroundColor={theme.colors.background} />
        <Routes/>
      </NavigationContainer>
    </LoteriaProvider>
  );
};

export default App;