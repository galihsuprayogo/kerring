import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  GetStarted,
  Home,
  Search,
  Setting,
  SignIn,
  SignUp,
  Splash
} from '../pages';
import { BottomTabNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={(props) => <BottomTabNavigator {...props} />}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Setting"
      component={Setting}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

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
  <Stack.Screen
    name="MainApp"
    component={MainApp}
    options={{ headerShown: false }}
  />
 </Stack.Navigator>
);

export default Router;
