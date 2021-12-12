import React from 'react';
import { Icon } from 'native-base';
import { Image } from 'react-native';
import {
  iconForward,
  iconForwardDark,
  iconNavigate,
  iconNavigateDark
} from '../../../assets';

const IconGlobalNative = ({
  title, height, width, resizeMode
}) => {
  switch (title) {
    case 'forward':
      return (
        <Image
          source={iconForward}
          height={height}
          width={width}
          resizeMode={resizeMode}
        />
      );
    case 'forward-dark':
      return (
        <Image
          source={iconForwardDark}
          height={height}
          width={width}
          resizeMode={resizeMode}
        />
      );
    case 'navigate':
      return (
        <Image
          source={iconNavigate}
          height={height}
          width={width}
          resizeMode={resizeMode}
        />
      );
    case 'navigate-dark':
      return (
        <Image
          source={iconNavigateDark}
          height={height}
          width={width}
          resizeMode={resizeMode}
        />
      );
    default:
      return (
        <Icon
          name="shield"
          size="sm"
          textAlign="center"
          _dark={{ color: 'coolGray.800' }}
          color="primary.400"
        />
      );
  }
};

export default IconGlobalNative;
