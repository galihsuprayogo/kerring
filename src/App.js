import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => (
  <NavigationContainer>
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  </NavigationContainer>
);

export default App;
