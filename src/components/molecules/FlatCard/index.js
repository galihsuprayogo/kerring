import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Circle,
  Pressable
} from 'native-base';
import { IconGlobalNative } from '../..';

const FlatCard = ({
  artist, artistFontSize, headline, headlineFontSize,
  heightReso, widthReso, avatar, onPress
}) => (
<VStack
  width="100%"
  height={heightReso * 0.11}
  justifyContent="center"
  bg="custom.900"
  py={heightReso * 0.01}
  px={widthReso * 0.02}
>
   <HStack
     justifyContent="space-between"
     alignItems="center"
   >
     <HStack
       space={widthReso * 0.02}
       flex={1}
     >
       <Box>
           {avatar}
       </Box>
       <VStack flex={1}>
       <Box>
          <Text
            color="custom.100"
            textAlign="left"
            fontSize={artistFontSize}
            fontFamily="body"
            fontWeight={500}
            letterSpacing="md"
          >
         {artist}
          </Text>
          <Text
            color="custom.100"
            textAlign="left"
            fontSize={headlineFontSize}
            fontFamily="body"
            fontWeight={600}
            letterSpacing="sm"
          >
         {headline}
          </Text>
       </Box>
       </VStack>
     </HStack>

     <VStack>
       <Pressable
         onPress={onPress}
       >
        {({ isHovered, isFocused, isPressed }) => (
         <Box
           style={{
             transform: [
               {
                 scale: isPressed ? 0.8 : 1,
               },
             ],
           }}
         >
           <IconGlobalNative
             title="forward"
             height={1}
             width={1}
             resizeMode="contain"
           />
         </Box>
        )}
       </Pressable>
     </VStack>
   </HStack>
</VStack>
);

export default FlatCard;
