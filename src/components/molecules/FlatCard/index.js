import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Circle
} from 'native-base';

const FlatCard = ({
  artist, artistFontSize, headline, headlineFontSize,
  heightReso, widthReso, avatar
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
     <HStack space={widthReso * 0.02}>
       <Box>
         <Circle
           size={heightReso * 0.07}
           bg="custom.900"
         >
           {avatar}
         </Circle>
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
   </HStack>
</VStack>
);

export default FlatCard;
