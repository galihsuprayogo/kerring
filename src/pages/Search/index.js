import React from 'react';
import {
  Box,
  Text,
  VStack
} from 'native-base';

const Search = () => (
<VStack
  flex={1}
  alignItems="center"
  justifyContent="center"
>
   <Box>
     <Text
       color="custom.900"
       textAlign="center"
       fontSize="lg"
       fontFamily="body"
       fontWeight={600}
       letterSpacing="sm"
     >
        Search Page
     </Text>
     <Text
       color="custom.900"
       textAlign="center"
       fontSize="xs"
       fontFamily="body"
       fontWeight={300}
       letterSpacing="sm"
     >
        coming soon
     </Text>
   </Box>
</VStack>
);

export default Search;
