import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  GetStarted,
  SignIn,
  SignUp,
  Splash
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => (
 <Stack.Navigator initialRouteName="Splash">
  <Stack.Screen
    name="Splash"
    component={Splash}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="GetStarted"
    component={GetStarted}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="SignIn"
    component={SignIn}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="SignUp"
    component={SignUp}
    options={{ headerShown: false }}
  />
 </Stack.Navigator>
);

export default Router;
