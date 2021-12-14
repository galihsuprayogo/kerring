import React from 'react';
import { Image } from 'native-base';
import {
  artistPicture1,
  artistPicture2
} from '../../../assets';

const PictureStatic = ({
  title, height, width, resizeMode, alt
}) => {
  switch (title) {
    case '1':
      return (
       <Image
         source={artistPicture1}
         height={height}
         width={width}
         resizeMode={resizeMode}
         alt={alt}
       />
      );
    case '2':
      return (
       <Image
         source={artistPicture2}
         height={height}
         width={width}
         resizeMode={resizeMode}
         alt={alt}
       />
      );
    default:
      return null;
  }
};

export default PictureStatic;
