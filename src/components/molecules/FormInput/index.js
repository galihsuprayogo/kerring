import React from 'react';
import {
  FormControl,
  Input,
  Pressable,
} from 'native-base';
import { IconGlobalNative } from '../..';

const FormInput = ({
  label, type, value, onChangeText,
  handleShowPassword, showPassword, typeText, fontSizeLabel,
  visibleIcon, height, placeholder, placeholderColor, fontSize
}) => (
 <FormControl>
  <FormControl.Label
    _text={{
      color: 'white',
      fontFamily: 'heading',
      fontSize: fontSizeLabel,
      fontWeight: 400,
    }}
  >
   {label}
  </FormControl.Label>
  {typeText === 'password' ? (
   <Input
     bg="white"
     borderRadius="10px"
     height={height}
     value={value}
     fontSize={fontSize}
     alignItems="center"
     justifyContent="center"
     textAlignVertical="center"
     onChangeText={onChangeText}
     placeholder={placeholder}
     placeholderTextColor={placeholderColor}
     type={showPassword ? 'text' : 'password'}
     _focus={{
       color: 'custom.900',
       borderColor: 'red.600'
     }}
     color="custom.900"
     InputRightElement={(
     <Pressable
       m="4"
       onPress={handleShowPassword}
     >
      { visibleIcon ? (
        showPassword ? (
          <IconGlobalNative
            title="hide-password"
            height={1}
            width={1}
            resizeMode="contain"
          />
        )
          : (
           <IconGlobalNative
             title="show-password"
             height={1}
             width={1}
             resizeMode="contain"
           />
          )
      ) : null }
     </Pressable>
                           )}
   />
  ) : (
     <Input
       bg="white"
       borderRadius="10px"
       alignItems="center"
       justifyContent="center"
       textAlignVertical="center"
       fontSize={fontSize}
       value={value}
       height={height}
       placeholderTextColor={placeholderColor}
       placeholder={placeholder}
       onChangeText={onChangeText}
       type={type}
       _focus={{
         color: 'custom.900',
         borderColor: 'red.600'
       }}
       color="custom.900"
     />
  )}
 </FormControl>
);

export default FormInput;
