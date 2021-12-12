import React from 'react';
import {
  VStack,
  Text
} from 'native-base';

const GetStarted = () => (
<VStack
  flex={1}
  alignItems="center"
  justifyContent="center"
>
   <Text
     color="custom.100"
     fontSize={40}
     fontFamily="heading"
     fontWeight={400}
     letterSpacing="sm"
     fontStyle="italic"
   >
        Get Started Page
   </Text>
</VStack>
);

export default GetStarted;
