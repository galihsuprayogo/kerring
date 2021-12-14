import React from 'react';
import { Text, VStack } from 'react-native';

const Search = () => (
<VStack
  flex={1}
  alignItem="center"
  justifyContent="center"
>
   <Text
     color="custom.100"
     fontSize="md"
     fontFamily="body"
     fontWeight={600}
     letterSpacing="md"
     fontStyle="italic"
   >
     Search page
   </Text>
</VStack>
);

export default Search;
