import React from 'react';
import {
  Box,
  Text,
  VStack
} from 'native-base';
import { globalEnv } from '../../../config';
import { Picture } from '../..';
import { globalResolution } from '../../../utils';

const DetailNews = ({ route }) => {
  const {
    idNews, artist, headline,
    writer, date, content, image
  } = route.params.route;
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;

  return (
   <VStack
     flex={1}
     paddingY={heightReso * 0.02}
     paddingX={widthReso * 0.02}
   >
     <VStack
       flex={1}
       bg="custom.900"
       paddingX={widthReso * 0.02}
       paddingY={heightReso * 0.01}
       space={heightReso * 0.012}
     >
       <Box>
         <Text
           color="custom.100"
           textAlign="left"
           fontSize={heightReso * 0.017}
           fontFamily="body"
           fontWeight={600}
           letterSpacing="md"
         >
           {artist}
         </Text>
         <Text
           color="custom.100"
           textAlign="left"
           fontSize={heightReso * 0.03}
           fontFamily="body"
           fontWeight={400}
           letterSpacing="sm"
         >
           {headline}
         </Text>
       </Box>
       <Box display="flex" alignItems="flex-end">
         <Text
           color="custom.100"
           textAlign="left"
           fontSize={heightReso * 0.012}
           fontFamily="body"
           fontWeight={200}
           letterSpacing="sm"
         >
           {`${writer} - ${date}`}
         </Text>
       </Box>
        <VStack width="100%">
          <Picture
            uri={{ uri: `${globalEnv.URI_IMAGE}/images/${image}` }}
            alt={image}
            width="100%"
            resizeMode="cover"
            height={heightReso * 0.3}
          />
        </VStack>
        <VStack>
          <Text
            color="custom.100"
            textAlign="left"
            fontSize={heightReso * 0.017}
            fontFamily="body"
            fontWeight={300}
            letterSpacing="sm"
          >
              {content}
          </Text>
        </VStack>
     </VStack>
   </VStack>
  );
};
export default DetailNews;
