import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { theme } from './config';

const App = () => (
  <NavigationContainer>
    <NativeBaseProvider theme={theme}>
      <Router />
    </NativeBaseProvider>
  </NavigationContainer>
);

export default App;
