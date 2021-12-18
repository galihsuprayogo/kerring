import React from 'react';
import {
  Box,
  HStack,
  Pressable,
  VStack,
  Text
} from 'native-base';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { IconGlobalNative } from '../..';
import { globalAction } from '../../../redux';

const CardNews = ({
  artist, artistFontSize, headline, headlineFontSize,
  date, dateFontSize, writer, writerFontSize, picture,
  widthCard, widthReso, heightReso, idNews, image, content
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onDetail = (idNews, artist, headline, writer, date) => {
    dispatch({ type: globalAction.SET_LOADING, value: true });
    const mount = setTimeout(() => {
      navigation.push('Detail',
        {
          route: {
            idNews,
            artist,
            headline,
            writer,
            date,
            content,
            image
          }
        }
      );
      dispatch({ type: globalAction.SET_LOADING, value: false });
    }, 2000);
    return () => clearTimeout(mount);
  };

  return (
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
       <Pressable
         onPress={() =>
           onDetail(idNews,
             artist,
             headline,
             writer,
             date)}
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
             title="forward-dark-hd"
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
};

export default CardNews;
