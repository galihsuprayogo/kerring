import React, { useEffect } from 'react';
import {
  VStack,
  Image,
  PresenceTransition,
  Text
} from 'native-base';
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
    }}
    animate={{
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 2000,
      },
    }}
  >
   <VStack
     width="100%"
     space={heightDynamic * 0.001}
     alignItems="flex-start"
     bg="red.600"
     py="2"
     px="4"
     borderRadius="xs"
   >
     <Text
       color="custom.100"
       fontSize={heightDynamic * 0.041}
       fontFamily="body"
       fontWeight={600}
       letterSpacing="sm"
       fontStyle="italic"
     >
        KERRING!
     </Text>
     <Text
       color="custom.100"
       fontSize={heightDynamic * 0.018}
       fontFamily="body"
       fontWeight={100}
       letterSpacing="xs"
     >
        music magazine
     </Text>
   </VStack>
  </PresenceTransition>
</VStack>
  );
};

export default Splash;
