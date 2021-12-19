import React from 'react';
import { Avatar } from 'native-base';
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
