import React from 'react';
import { Avatar } from 'native-base';
import {
  avatarPicture1,
  avatarPicture2,
  avatarPicture3
} from '../../../assets';

const AvatarStatic = ({ title }) => {
  switch (title) {
    case '1':
      return (
        <Avatar
          source={avatarPicture1}
          size="full"
        />
      );
    case '2':
      return (
        <Avatar
          source={avatarPicture2}
          size="full"
        />
      );
    case '3':
      return (
      <Avatar
        source={avatarPicture3}
        size="full"
      />
      );
    default:
      return null;
  }
};

export default AvatarStatic;
