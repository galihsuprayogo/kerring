import React from 'react';
import {
  Box,
  Text,
  VStack
} from 'native-base';
import { SearchField } from '../../components';
import {
  globalResolution
} from '../../utils';

const Search = () => {
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;

  return (
  <VStack
    flex={1}
    alignItems="center"
    paddingX={widthReso * 0.04}
    paddingY={widthReso * 0.04}
  >
    <SearchField
      width="100%"
      height={heightReso * 0.055}
      paddingX={widthReso * 0.02}
      labelFontSize={heightReso * 0.035}
      placeholder="by Artist"
    />
  </VStack>
  );
};
export default Search;
