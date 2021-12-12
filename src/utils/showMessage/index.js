import React from 'react';
import { Box, Text } from 'native-base';

export const ShowSuccess = ({ message }) => (
<Box
  bg="success.300"
  px="4"
  py="2"
  rounded="sm"
  mb={5}
>
  <Text
    color="white"
    fontSize="sm"
    textAlign="center"
    fontFamily="body"
    fontWeight={200}
    maxWidth="200"
    letterSpacing="sm"
  >
     {message}
  </Text>
</Box>
);

export const ShowError = ({ message }) => (
  <Box
    bg="danger.600"
    px="4"
    py="2"
    rounded="sm"
    mb={5}
    maxWidth="200"
  >
    <Text
      color="white"
      fontSize="sm"
      fontFamily="body"
      fontWeight={200}
      textAlign="center"
      letterSpacing="sm"
    >
       {message}
    </Text>
  </Box>
);
