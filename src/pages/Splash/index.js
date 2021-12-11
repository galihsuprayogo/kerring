import React, { useEffect } from 'react';
import {
  VStack,
  Image,
  PresenceTransition,
} from 'native-base';
import { splashImage } from '../../assets';
import { globalResolution } from '../../utils';

const Splash = ({ navigation }) => {
  const heightDynamic = globalResolution().height;
  const widthDynamic = globalResolution().width;

  useEffect(() => {
    const unmount = setTimeout(async () => {
      navigation.replace('GetStarted');
    }, 2600);
    return () => clearTimeout(unmount);
  }, []);

  return (
<VStack
  flex={1}
  alignItems="center"
  justifyContent="center"
  bg="white"
>
  <PresenceTransition
    visible
    initial={{
      opacity: 0,
      scale: 0.5,
    }}
    animate={{
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 1500,
      },
    }}
  >
   <Image
     source={splashImage}
     alt="logo"
     width={widthDynamic * 0.6427}
     height={heightDynamic * 0.2217}
     resizeMode="contain"
   />
  </PresenceTransition>
</VStack>
  );
};

export default Splash;
