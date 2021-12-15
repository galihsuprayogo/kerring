import React from 'react';
import { Avatar } from 'native-base';
import {
  avatarPicture1,
  avatarPicture2,
  avatarPicture3,
  avatarPicture4,
  avatarPicture5,
  avatarPicture6
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
    case '4':
      return (
        <Avatar
          source={avatarPicture4}
          size="full"
        />
      );
    case '5':
      return (
      <Avatar
        source={avatarPicture5}
        size="full"
      />
      );
    case '6':
      return (
      <Avatar
        source={avatarPicture6}
        size="full"
      />
      );
    default:
      return null;
  }
};

export default AvatarStatic;
