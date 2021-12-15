import React, { useState, useEffect } from 'react';
import { Platform, Keyboard } from 'react-native';
import {
  VStack
} from 'native-base';
import {
  SearchField
} from '../../components';
import {
  globalResolution
} from '../../utils';

const Search = () => {
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;
  const [search, setSearch] = useState('');
  const [isVisibleKeyboard, setIsVisibleKeyboard] = useState(false);

  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setIsVisibleKeyboard(true)),
        Keyboard.addListener('keyboardDidHide', () => setIsVisibleKeyboard(false)),
      ];
    }
    return () => {
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        keyboardEventListeners
         && keyboardEventListeners.forEach((eventListener) => eventListener.remove());
      }
    };
  }, []);

  const onChangeSearchField = (value) => {
    console.log('value => ', value);
    setSearch(value);
  };

  return (
  <VStack
    flex={1}
    alignItems="center"
    paddingX={widthReso * 0.04}
    paddingY={widthReso * 0.04}
  >
    <SearchField
      width="100%"
      height={heightReso * 0.05}
      paddingX={widthReso * 0.02}
      labelFontSize={heightReso * 0.02}
      placeholder="by Artist"
      isVisible={isVisibleKeyboard}
      value={search}
      onChangeText={(value) => onChangeSearchField(value)}
    />
  </VStack>
  );
};
export default Search;
