import React from 'react';
import {
  Text,
  VStack,
  Pressable,
  Box,
} from 'native-base';

const ButtonGlobal = ({
  title, titleColor, paddingX, paddingY,
  borderRadius, onPress, height, width, hoveredColor,
  fontSize, fontWeight, pressedColor, nativeColor, titleColorPress,
  titleColorHov
}) => (
<Pressable
  onPress={onPress}
>
 {({ isHovered, isFocused, isPressed }) => (
  <VStack
    w={width}
    h={height}
    px={paddingX}
    py={paddingY}
    borderRadius={borderRadius}
    bg={isPressed ? pressedColor : isHovered ? hoveredColor : nativeColor}
    borderColor={nativeColor}
    alignItems="center"
    justifyContent="center"
    shadow={1}
    style={{
      transform: [
        {
          scale: isPressed ? 0.95 : 1,
        },
      ],
    }}
  >
    <Text
      textAlign="center"
      _dark={{ color: 'coolGray.800' }}
      color={isPressed ? titleColorPress : isHovered ? titleColorHov : titleColor}
      fontSize={fontSize}
      fontFamily="body"
      fontWeight={fontWeight}
    >
    {title}
    </Text>
  </VStack>
 )}
</Pressable>
);

export default ButtonGlobal;
