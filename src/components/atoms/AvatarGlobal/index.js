import React from 'react';
import { Image } from 'react-native';
import { Avatar } from 'native-base';
import {
  avatarDefault,
} from '../../../assets';

const AvatarGlobal = ({ title, uri }) => {
  switch (title) {
    case 'non-empty':
      return (
        <Image
          source={uri}
          style={{
            height: 60,
            width: 60,
            borderRadius: 60 / 10
          }}
          resizeMode="contain"
        />
      );
    default:
      return (
        <Avatar
          source={avatarDefault}
          size="full"
        />
      );
  }
};

export default AvatarGlobal;
