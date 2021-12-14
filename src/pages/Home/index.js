import React from 'react';
import { Text, VStack } from 'native-base';

const Home = () => (
 <VStack
   flex={1}
   alignItems="center"
   justifyContent="center"
 >
   <Text
     color="custom.900"
     fontSize="md"
     fontFamily="body"
     fontWeight={600}
     letterSpacing="md"
     fontStyle="italic"
   >
     Home page
   </Text>
 </VStack>
);

export default Home;
