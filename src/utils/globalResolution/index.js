import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

export const globalResolution = () => {
  const [dimensions, setDimensions] = useState({ screen });
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ screen }) => {
        setDimensions({ screen });
      }
    );
    return () => subscription?.remove();
  });

  return (dimensions.screen);
};
