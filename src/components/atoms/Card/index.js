import React from 'react';
import { View } from 'react-native';
import {
  VStack,
  Text
} from 'native-base';

const Card = ({
  children, title, fontSize
}) => (
 <View
   style={{
     width: '100%',
     //      backgroundColor: 'red',
   }}
 >
   <Text
     color="custom.900"
     fontSize={fontSize}
     fontFamily="body"
     fontWeight={800}
     letterSpacing="sm"
   >
     {title}
   </Text>
   <VStack pt="1">
     {children}
   </VStack>
 </View>
);

export default Card;
