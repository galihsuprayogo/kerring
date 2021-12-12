import React from 'react';
import {
  Spinner,
  Text,
  VStack
} from 'native-base';

const Loading = () => (
<VStack
  flex={1}
  position="absolute"
  left={0}
  top={0}
  bottom={0}
  right={0}
  space={1}
  zIndex={1}
  alignItems="center"
  justifyContent="center"
  bg="transparent"
>
  <Spinner
    color="red.600"
    size="lg"
  />
  <Text
    color="red.600"
    fontSize="md"
    fontFamily="body"
    fontWeight={600}
    letterSpacing="sm"
    fontStyle="italic"
  >
   Loading
  </Text>
</VStack>
);
export default Loading;
