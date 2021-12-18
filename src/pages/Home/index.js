import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  HStack,
  VStack
} from 'native-base';
import {
  AvatarStatic,
  Card,
  CardNews,
  FlatCard,
  Picture,
  Loading
} from '../../components';
import { globalResolution } from '../../utils';
import { globalEnv } from '../../config';
import {
  postWithToken,
  getAsyncData,
  globalUrl
} from '../../services';
import { globalAction } from '../../redux';
import {
  JSONMostly,
} from '../../assets';

const Home = () => {
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;
  const dispatch = useDispatch();
  const newState = useSelector((state) => state.newsReducer);

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

  return (
    newState.new[0].id === '' || newState.new[0].id === undefined ? (
      <Loading />
    ) : (
    <VStack
      flex={1}
      alignItems="center"
      paddingX={widthReso * 0.02}
    >
     <ScrollView
       showsVerticalScrollIndicator={false}
     >
       <VStack
         flex={1}
         space={heightReso * 0.02}
         paddingY={heightReso * 0.02}
       >
         <Card
           title="The News"
           fontSize={heightReso * 0.015}
         >
           <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
           >
             <HStack
               flex={1}
               space={widthReso * 0.02}
             >
             {newState.new.map((item, index) => (
               <CardNews
                 key={index}
                 idNews={item.id}
                 widthCard={widthReso * 0.47}
                 widthReso={widthReso}
                 heightReso={heightReso}
                 artist={item.artist}
                 artistFontSize={heightReso * 0.014}
                 headline={item.headline}
                 headlineFontSize={heightReso * 0.019}
                 writer={item.writer}
                 writerFontSize={heightReso * 0.015}
                 date={item.date}
                 image={item.image}
                 content={item.content}
                 dateFontSize={heightReso * 0.011}
                 picture={(
               <Picture
                 uri={{ uri: `${globalEnv.URI_IMAGE}/images/${item.image}` }}
                 resizeMode="cover"
                 alt={item.image}
                 height={heightReso * 0.17}
                 width="100%"
               />
             )}
               />
             ))}
             </HStack>
           </ScrollView>
         </Card>
         <Card
           title="Mostly read"
           fontSize={heightReso * 0.015}
         >
           <VStack flex={1} space={heightReso * 0.01}>
             {JSONMostly.map((item, index) => (
               <FlatCard
                 key={index}
                 artist={item.artist}
                 artistFontSize={heightReso * 0.014}
                 headline={item.headline}
                 headlineFontSize={heightReso * 0.016}
                 heightReso={heightReso}
                 widthReso={widthReso}
                 avatar={(<AvatarStatic title={item.avatarTitle} />)}
               />
             ))}
           </VStack>
         </Card>
       </VStack>
     </ScrollView>
    </VStack>
    )
  );
};

export default Home;
