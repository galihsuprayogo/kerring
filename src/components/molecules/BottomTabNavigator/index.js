import React, { useState, useEffect } from 'react';
import { Platform, Keyboard } from 'react-native';
import {
  HStack,
} from 'native-base';
import { BottomTabItem } from '../..';

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
  const [visible, setVisible] = useState(true);
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        keyboardEventListeners
          && keyboardEventListeners.forEach((eventListener) => eventListener.remove());
      }
    };
  }, []);

  return (
    visible
      ? (
 <HStack
   bg="white"
   alignItems="flex-end"
   justifyContent="space-evenly"
   shadow={5}
   roundedTop="2xl"
   width="100%"
   overflow="hidden"
 >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
        <BottomTabItem
          key={index.toString()}
          title={label}
          active={isFocused}
          onPress={onPress}
          onLongPress={onLongPress}
        />
        );
      })}
 </HStack>
      ) : null
  );
};

export default BottomTabNavigator;
