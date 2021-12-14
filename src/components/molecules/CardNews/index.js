import React from 'react';
import {
  Box,
  HStack,
  Pressable,
  VStack,
  Text
} from 'native-base';
import { IconGlobalNative } from '../..';

const CardNews = ({
  artist, artistFontSize, headline, headlineFontSize,
  date, dateFontSize, writer, writerFontSize, picture,
  widthCard, widthReso, heightReso, onPress
}) => (
<VStack
  width={widthCard}
  bg="custom.100"
>
  <VStack
    bg="custom.900"
  >
   <VStack
     px={widthReso * 0.02}
     py={heightReso * 0.01}
   >
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
         fontWeight={500}
         letterSpacing="sm"
       >
         {headline}
       </Text>
     </Box>
   </VStack>
   <VStack
     width="100%"
     borderTopWidth={heightReso * 0.0025}
     borderTopColor="custom.100"
     borderBottomWidth={heightReso * 0.0025}
     borderBottomColor="custom.100"
   >
     {picture}
   </VStack>
   <VStack
     px={widthReso * 0.02}
     py={heightReso * 0.01}
   >
     <Box>
       <Text
         color="custom.100"
         textAlign="right"
         fontSize={artistFontSize}
         fontFamily="heading"
         fontWeight={600}
         letterSpacing="sm"
         fontStyle="italic"
       >
         KERRING!
       </Text>
     </Box>
   </VStack>
  </VStack>
  <VStack
    px={widthReso * 0.02}
    py={heightReso * 0.01}
  >
   <HStack
     alignItems="center"
     justifyContent="space-between"
   >
     <Box>
         <Text
           color="custom.900"
           textAlign="left"
           fontSize={writerFontSize}
           fontFamily="body"
           fontWeight={600}
           letterSpacing="sm"
         >
         {writer}
         </Text>
       <Text
         color="custom.900"
         textAlign="left"
         fontSize={dateFontSize}
         fontFamily="body"
         fontWeight={400}
         letterSpacing="xs"
       >
         {date}
       </Text>
     </Box>
     <VStack>
       <Pressable onPress={onPress}>
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
             title="forward-dark"
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
</VStack>

);

export default CardNews;
