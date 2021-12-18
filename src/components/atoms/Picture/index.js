import React from 'react';
import { Image } from 'native-base';

const Picture = ({
  uri, height, width, resizeMode, alt
}) => (
       <Image
         source={uri}
         height={height}
         width={width}
         resizeMode={resizeMode}
         alt={alt}
       />
);

export default Picture;
