// src/routes/index.tsx
import React from 'react';
import Home from '../screen/Home';
import DrawerNavigator from './routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export type RootStackParamList = {
    Home: undefined;
    Main: undefined;
  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

