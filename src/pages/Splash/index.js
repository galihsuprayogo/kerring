import React, { useEffect } from 'react';
import {
  PresenceTransition,
  VStack,
} from 'native-base';
import { IconGlobal } from '../../components';
import { getAsyncData } from '../../services';
import { globalResolution } from '../../utils';

const Splash = ({ navigation }) => {
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;

  useEffect(() => {
    const unmount = setTimeout(async () => {
      const res = await getAsyncData('user_session');
      if (res === undefined) {
        navigation.replace('GetStarted');
      } else {
        navigation.replace('Setting');
      }
    }, 2600);
    return () => clearTimeout(unmount);
  }, []);

  return (
<VStack
  flex={1}
  width="100%"
  height="100%"
  alignItems="center"
  justifyContent="center"
  bg="custom.900"
>
  <PresenceTransition
    visible
    initial={{
      opacity: 0,
      scale: 0.5,
      rotate: '-25deg'
    }}
    animate={{
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 2000,
      },
      rotate: '-25deg'
    }}
  >
   <VStack
     width="100%"
     alignItems="center"
     justifyContent="center"
     bg="red.600"
     px="4"
     py="2"
   >
      <IconGlobal
        title="Auth"
        width={widthReso * 0.557}
        height={heightReso * 0.086}
        resizeMode="contain"
        alt="auth-login"
      />
   </VStack>
  </PresenceTransition>
</VStack>
  );
};

export default Splash;
