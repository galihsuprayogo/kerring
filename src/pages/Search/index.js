import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Platform,
  Keyboard,
  ScrollView
} from 'react-native';
import {
  VStack,
  Text
} from 'native-base';
import {
  AvatarGlobal,
  FlatCard,
  SearchField,
  Loading
} from '../../components';
import { globalEnv } from '../../config';
import {
  getAsyncData,
  globalUrl,
  postWithToken
} from '../../services';
import { globalAction } from '../../redux';
import {
  globalResolution
} from '../../utils';

const Search = () => {
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;
  const dispatch = useDispatch();
  const newState = useSelector((state) => state.newsReducer);
  const [search, setSearch] = useState('');
  const [matchData, setMatchData] = useState([]);
  const [isVisibleKeyboard, setIsVisibleKeyboard] = useState(false);

  useEffect(() => {
    const unmount = setTimeout(async () => {
      const user = await getAsyncData('user_session');
      let data;
      const response = await postWithToken(globalUrl.URL_NEWS_ALL, data, user.token);
      if (response.status === 200) {
        dispatch({ type: globalAction.SET_NEWS, value: response.data.data });
      }
    }, 2000);
    return () => clearTimeout(unmount);
  }, []);

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
    setSearch(value);
    const arr = [];
    const temp = newState.new;
    temp.map((item, index) => {
      if (item.artist.name.toLowerCase() === value.toLowerCase()) {
        arr.push(item);
      }
    });
    setMatchData(arr);
  };

  return (
    newState.new[0].id === '' || newState.new[0].id === undefined ? (
      <Loading />
    ) : (
        <VStack
          flex={1}
          alignItems="center"
          paddingX={widthReso * 0.04}
          paddingTop={heightReso * 0.02}
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
     <ScrollView showsVerticalScrollIndicator={false}>
      <VStack
        paddingY={heightReso * 0.02}
        space={heightReso * 0.01}
      >
        {isVisibleKeyboard === true || search !== '' ? (
          matchData.length === 0 ? (
            newState.new.map((item, index) => (
              <FlatCard
                key={index}
                artist={item.artist.name}
                artistFontSize={heightReso * 0.014}
                headline={item.headline}
                headlineFontSize={heightReso * 0.016}
                heightReso={heightReso}
                widthReso={widthReso}
                avatar={(
                 <AvatarGlobal
                   title="non-empty"
                   uri={{ uri: `${globalEnv.URI_IMAGE}/images/${item.image}` }}
                 />
                 )}
              />
            ))
          ) : (
            matchData.map((item, index) => (
              <FlatCard
                key={index}
                artist={item.artist.name}
                artistFontSize={heightReso * 0.014}
                headline={item.headline}
                headlineFontSize={heightReso * 0.016}
                heightReso={heightReso}
                widthReso={widthReso}
                avatar={(
                <AvatarGlobal
                  title="non-empty"
                  uri={{ uri: `${globalEnv.URI_IMAGE}/images/${item.image}` }}
                />
             )}
              />
            ))
          )
        )
          : newState.new.map((item, index) => (
          <FlatCard
            key={index}
            artist={item.artist.name}
            artistFontSize={heightReso * 0.014}
            headline={item.headline}
            headlineFontSize={heightReso * 0.016}
            heightReso={heightReso}
            widthReso={widthReso}
            avatar={(
             <AvatarGlobal
               key={item.image}
               title="non-empty"
               uri={{ uri: `${globalEnv.URI_IMAGE}/images/${item.image}` }}
             />
             )}
          />
          ))}
      </VStack>
     </ScrollView>
        </VStack>
    )
  );
};
export default Search;
