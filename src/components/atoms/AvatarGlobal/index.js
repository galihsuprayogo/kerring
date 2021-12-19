import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Avatar } from 'native-base';
import { globalEnv } from '../../../config';
import {
  avatarDefault,
} from '../../../assets';

const AvatarGlobal = ({ title, uri }) => {
  switch (title) {
    case 'non-empty':
      return (
        <Avatar
          source={uri}
          size="full"
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
