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
           <CardNews
             widthCard={widthReso * 0.47}
             widthReso={widthReso}
             heightReso={heightReso}
             artist="Avril Lavigne"
             artistFontSize={heightReso * 0.014}
             headline="Releasing new single called 'Bite' featuring Travis Barker"
             headlineFontSize={heightReso * 0.019}
             writer="BBC Radio One"
             writerFontSize={heightReso * 0.015}
             date="Dec 14, 2021"
             dateFontSize={heightReso * 0.011}
             picture={(
               <PictureStatic
                 title="1"
                 resizeMode="cover"
                 alt="avril"
                 height={heightReso * 0.17}
                 width="100%"
               />
            )}
           />
          <CardNews
            widthCard={widthReso * 0.47}
            widthReso={widthReso}
            heightReso={heightReso}
            artist="Bring Me The Horizon"
            artistFontSize={heightReso * 0.014}
            headline="Shocking fans by releasing new single 'die4u'"
            headlineFontSize={heightReso * 0.019}
            writer="UK Hammer"
            writerFontSize={heightReso * 0.015}
            date="Dec 13, 2021"
            dateFontSize={heightReso * 0.011}
            picture={(
              <PictureStatic
                title="2"
                resizeMode="cover"
                alt="avril"
                height={heightReso * 0.17}
                width="100%"
              />
           )}
          />
         </HStack>
       </ScrollView>
     </Card>
   </VStack>
  );
};
export default Home;
