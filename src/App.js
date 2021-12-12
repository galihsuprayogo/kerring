import React from 'react';
import { LogBox } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import Router from './router';
import { store } from './redux';
import { theme } from './config';
import { Loading } from './components';

const MainApp = () => {
  const stateGlobal = useSelector((state) => state.loadingReducer);
  LogBox.ignoreLogs(['']);
  return (
  <NavigationContainer>
    <NativeBaseProvider theme={theme}>
      <Router />
      {stateGlobal.loading && <Loading />}
    </NativeBaseProvider>
  </NavigationContainer>
  );
};

const App = () => (
<Provider store={store}>
  <MainApp />
</Provider>
);
export default App;
