import React from 'react';
import {
  Box,
  Input,
  Text,
  VStack
} from 'native-base';
import { IconGlobalNative } from '../..';

const SearchField = ({
  labelFontSize, placeholder, width, height,
  value, onChangeText, isVisible
}) =>
  (
  <VStack
    width={width}
    space="1"
    justifyContent="flex-start"
  >
     <Text
       color="custom.900"
       textAlign="left"
       fontSize={labelFontSize}
       fontFamily="body"
       fontWeight={600}
       letterSpacing="sm"
     >
         Search News
     </Text>
     <Input
       width={width}
       height={height}
       borderRadius="sm"
       borderColor="custom.200"
       placeholder={placeholder}
       fontFamily="body"
       fontWeight={500}
       _focus={{ borderColor: 'custom.900' }}
       value={value}
       onChangeText={onChangeText}
       InputLeftElement={
        isVisible ? (
          <Box
            m="2"
          >
          <IconGlobalNative
            title="Search-Light"
            height={1}
            width={1}
            resizeMode="contain"
          />
          </Box>
        )
          : (
         <Box
           m="2"
         >
           <IconGlobalNative
             title="Search-Grey"
             height={1}
             width={1}
             resizeMode="contain"
           />
         </Box>
          )
      }
     />
  </VStack>
  );

export default SearchField;
