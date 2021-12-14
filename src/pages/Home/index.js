import React from 'react';
import { ScrollView } from 'react-native';
import {
  Text,
  HStack,
  VStack
} from 'native-base';
import {
  Card,
  CardNews,
  PictureStatic
} from '../../components';
import { globalResolution } from '../../utils';
import { JSONNews } from '../../assets';

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
   </VStack>
  );
};
export default Home;
