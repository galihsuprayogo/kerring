import React from 'react';
import {
  Input,
  Text,
  VStack
} from 'native-base';
import { IconGlobalNative } from '../..';

const SearchField = ({
  labelFontSize, placeholder, width, height
}) => (
  <VStack
    width={width}
    space="1"
    flex={1}
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
         Cari
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
     />
  </VStack>
);

export default SearchField;
