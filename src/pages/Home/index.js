import React from 'react';
import { ScrollView } from 'react-native';
import {
  HStack,
  VStack
} from 'native-base';
import {
  AvatarStatic,
  Card,
  CardMostly,
  CardNews,
  PictureStatic
} from '../../components';
import { globalResolution } from '../../utils';
import {
  JSONMostly,
  JSONNews
} from '../../assets';

const Home = () => {
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;
  return (
   <VStack
     flex={1}
     alignItems="center"
     paddingX={widthReso * 0.02}
     paddingY={heightReso * 0.02}
   >
     <ScrollView
       showsVerticalScrollIndicator={false}
     >
       <VStack
         flex={1}
         space={heightReso * 0.02}
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
             {JSONNews.map((item, index) => (
               <CardNews
                 key={index}
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
                 dateFontSize={heightReso * 0.011}
                 picture={(
               <PictureStatic
                 title={item.imageTitle}
                 resizeMode="cover"
                 alt={item.imageTitle}
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
               <CardMostly
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
  );
};
export default Home;
