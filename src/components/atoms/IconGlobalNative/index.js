import React from 'react';
import { Icon } from 'native-base';
import { Image } from 'react-native';
import {
  iconForward,
  iconForwardDark,
  iconForwardDarkHd,
  iconNavigate,
  iconNavigateDark,
  iconShowPassword,
  iconHidePassword,
  iconHome,
  iconHomeInactive,
  iconSearch,
  iconSearchInactive,
  iconSetting,
  iconSettingInactive
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
    case 'forward-dark-hd':
      return (
          <Image
            source={iconForwardDarkHd}
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
    case 'show-password':
      return (
      <Image
        source={iconShowPassword}
        height={height}
        width={width}
        resizeMode={resizeMode}
      />
      );
    case 'hide-password':
      return (
      <Image
        source={iconHidePassword}
        height={height}
        width={width}
        resizeMode={resizeMode}
      />
      );
    case 'Home':
      return (
      <Image
        source={iconHome}
        height={height}
        width={width}
        resizeMode={resizeMode}
      />
      );
    case 'Home-Inactive':
      return (
      <Image
        source={iconHomeInactive}
        height={height}
        width={width}
        resizeMode={resizeMode}
      />
      );
    case 'Search':
      return (
      <Image
        source={iconSearch}
        height={height}
        width={width}
        resizeMode={resizeMode}
      />
      );
    case 'Search-Inactive':
      return (
      <Image
        source={iconSearchInactive}
        height={height}
        width={width}
        resizeMode={resizeMode}
      />
      );
    case 'Setting':
      return (
      <Image
        source={iconSetting}
        height={height}
        width={width}
        resizeMode={resizeMode}
      />
      );
    case 'Setting-Inactive':
      return (
        <Image
          source={iconSettingInactive}
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
