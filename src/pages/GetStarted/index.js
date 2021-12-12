import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack
} from 'native-base';
import { veinStartedImage } from '../../assets';
import { globalResolution } from '../../utils';
import { ButtonGlobal } from '../../components';

const GetStarted = () => {
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;
  return (
   <VStack
     flex={1}
     justifyContent="flex-start"
     bg="custom.900"
   >
     <VStack
       width="100%"
     >
       <Image
         source={veinStartedImage}
         resizeMode="cover"
         height={heightReso * 0.556}
         width="100%"
         borderBottomLeftRadius={100}
         alt="vein"
       />
        <Box
          position="absolute"
          left={widthReso * 0.02}
          top={heightReso * 0.01}
        >
          <Text
            color="custom.100"
            fontSize={heightReso * 0.0135}
            fontFamily="body"
            fontWeight={600}
            letterSpacing="sm"
            fontStyle="italic"
          >
           KERRING!
          </Text>
          <Text
            color="custom.100"
            fontSize={heightReso * 0.0141}
            fontFamily="body"
            fontWeight={300}
            letterSpacing="md"
          >
           Vein live session
          </Text>
        </Box>
        <Box
          position="absolute"
          right={widthReso * 0.02}
          bottom={heightReso * 0.01}
        >
          <Text
            color="custom.100"
            fontSize={heightReso * 0.0111}
            fontFamily="body"
            fontWeight={500}
            letterSpacing="sm"
          >
           hardcore-punk unit from Boston
          </Text>
        </Box>
     </VStack>
     <VStack
       px={widthReso * 0.07}
       flex={1}
       justifyContent="flex-end"
     >
       <VStack
         flex={1}
         py={heightReso * 0.05}
         justifyContent="space-around"
       >
         <Box>
            <Text
              color="custom.100"
              fontSize={heightReso * 0.025}
              fontFamily="body"
              fontWeight={600}
              letterSpacing="md"
              fontStyle="italic"
            >
           Let&rsquo;s explore based on
            </Text>
            <Text
              color="custom.100"
              fontSize={heightReso * 0.025}
              fontFamily="body"
              fontWeight={600}
              letterSpacing="md"
              fontStyle="italic"
            >
            your passion or music scene.
            </Text>
           <Text
             color="custom.100"
             fontSize={heightReso * 0.014}
             fontFamily="body"
             fontWeight={400}
             letterSpacing="md"
           >
             Or join us if you&rsquo;re a great writer!
           </Text>
         </Box>
         <VStack
           space={heightReso * 0.015}
           width={widthReso * 0.342}
         >
           <ButtonGlobal
             title="EXPLORE"
             titleColor="custom.900"
             titleColorPress="white"
             fontSize={heightReso * 0.0136}
             fontWeight={300}
             nativeColor="custom.100"
             paddingX={widthReso * 0.072}
             paddingY={widthReso * 0.0235}
             width={widthReso * 0.342}
             borderRadius="10px"
             pressedColor="red.600"
             hoveredColor="red.600"
             isIconActive
             titleIcon="navigate"
             titleIconDark="navigate-dark"
             heightIcon={1}
             widthIcon={1}
             resizeModeIcon="contain"
             spaceIcon={widthReso * 0.012}
           />
           <ButtonGlobal
             title="SIGN IN"
             titleColor="custom.900"
             titleColorPress="white"
             fontSize={heightReso * 0.0136}
             fontWeight={300}
             nativeColor="custom.100"
             paddingX={widthReso * 0.072}
             paddingY={widthReso * 0.0235}
             width={widthReso * 0.342}
             borderRadius="10px"
             pressedColor="red.600"
             hoveredColor="red.600"
             isIconActive
             titleIcon="forward"
             titleIconDark="forward-dark"
             heightIcon={1}
             widthIcon={1}
             resizeModeIcon="contain"
             spaceIcon={widthReso * 0.012}
           />
         </VStack>
       </VStack>
     </VStack>
   </VStack>
  );
};

export default GetStarted;
