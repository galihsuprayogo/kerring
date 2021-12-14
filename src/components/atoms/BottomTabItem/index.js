import React from 'react';
import {
  Text,
  VStack,
  HStack,
  Pressable,
  Icon,
  PresenceTransition
} from 'native-base';
import { IconGlobalNative } from '..';

const BottomTabItem = ({
  title, active, onPress, onLongPress
}) => {
  const IconTab = () => {
    switch (title) {
      case 'Home':
        return active ? (
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
               duration: 150,
             },
           }}
         >
         <IconGlobalNative
           title="Home"
           height={1}
           width={1}
           resizeMode="contain"
         />
         </PresenceTransition>
        ) : (
         <IconGlobalNative
           title="Home-Inactive"
           height={1}
           width={1}
           resizeMode="contain"
         />
        );
      case 'Search':
        return active ? (
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
               duration: 150,
             },
           }}
         >
         <IconGlobalNative
           title="Search"
           height={1}
           width={1}
           resizeMode="contain"
         />
         </PresenceTransition>
        ) : (
         <IconGlobalNative
           title="Search-Inactive"
           height={1}
           width={1}
           resizeMode="contain"
         />
        );
      case 'Setting':
        return active ? (
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
               duration: 150,
             },
           }}
         >
         <IconGlobalNative
           title="Setting"
           height={1}
           width={1}
           resizeMode="contain"
         />
         </PresenceTransition>
        ) : (
        <IconGlobalNative
          title="Setting-Inactive"
          height={1}
          width={1}
          resizeMode="contain"
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

  return (
  <Pressable
    onPress={onPress}
  >
    <HStack
      p="4"
      space={1}
      alignItems="center"
      justifyContent="center"
    >
       <VStack
         alignItems="center"
         justifyContent="center"
         space="2"
       >
       <IconTab />
        <Text
          textAlign="center"
          color={active ? 'custom.900' : 'custom.300'}
          fontSize="sm"
          fontFamily="body"
          fontWeight={active ? 500 : 400}
        >
         {title}
        </Text>
       </VStack>
    </HStack>
  </Pressable>
  );
};
export default BottomTabItem;
