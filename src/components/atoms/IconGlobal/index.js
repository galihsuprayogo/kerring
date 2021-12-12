import React from 'react';
import {
  Image,
  Icon,
} from 'native-base';
import { authImage } from '../../../assets';

const IconGlobal = ({
  title, height, width, resizeMode,
  alt
}) => {
  switch (title) {
    case 'Auth':
      return (
       <Image
         source={authImage}
         height={height}
         width={width}
         resizeMode={resizeMode}
         alt={alt}
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

export default IconGlobal;
