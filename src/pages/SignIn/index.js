import React, { useState, useEffect } from 'react';
import { Platform, Keyboard } from 'react-native';
import {
  Box,
  VStack,
  HStack,
  Text,
  Pressable,
  useToast
} from 'native-base';
import {
  ButtonGlobal,
  FormInput,
  IconGlobal,
  Loading
} from '../../components';
import {
  globalResolution,
  ShowError,
  ShowSuccess,
  useForm
} from '../../utils';

const SignIn = ({ navigation }) => {
  const toast = useToast();
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;
  const [message, setMessage] = useState('');
  const [form, setForm] = useForm({ email: '', password: '' });
  const [isPassword, setIsPassword] = useState(false);
  const [isVisibleIcon, setIsVisibleIcon] = useState(false);
  const [isVisibleKeyboard, setIsVisibleKeyboard] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setIsVisibleKeyboard(false)),
        Keyboard.addListener('keyboardDidHide', () => setIsVisibleKeyboard(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        keyboardEventListeners
         && keyboardEventListeners.forEach((eventListener) => eventListener.remove());
      }
    };
  }, []);

  const onContinue = () => {
    if (form.email !== '' && form.password !== '') {
      const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
      if (form.password.length !== 6) {
        toast.show({
          placement: 'top',
          duration: 2000,
          render: () => (
            <ShowError message="Password lest than 6 character" />
          ),
        });
      } else if (reg.test(form.email) === false) {
        toast.show({
          placement: 'top',
          duration: 2000,
          render: () => (
            <ShowError message="Email format invalid" />
          ),
        });
      } else {
        setIsLoading(true);
        const res = setTimeout(() => {
          console.log(form.email, form.password);
          setForm('reset');
          setIsLoading(false);
        }, 3000);
        return () => clearTimeout(res);
      }
      if (form.password.length !== 6 && reg.test(form.email) === false) {
        toast.show({
          placement: 'top',
          duration: 2000,
          render: () => (
            <ShowError message="Email and password invalid" />
          ),
        });
      }
    } else {
      toast.show({
        placement: 'top',
        duration: 2000,
        render: () => (
           <ShowError message="Field Empty" />
        ),
      });
    }
  };

  const onShowPassword = () => {
    setIsPassword(!isPassword);
  };

  const onChangeFieldPassword = (value) => {
    if (value === '') {
      setIsVisibleIcon(false);
      setForm('password', value);
    } else {
      setIsVisibleIcon(true);
      setForm('password', value);
    }
  };

  return (
   <VStack
     flex={1}
     alignItems="center"
     px={widthReso * 0.19}
     bg="custom.900"
     justifyContent="center"
     space={heightReso * 0.035}
   >
    {isLoading && (<Loading />)}
    <VStack
      alignItems="center"
      justifyContent="center"
      px="4"
      py="2"
      style={{
        transform: [
          {
            rotate: '5deg',
          },
        ],
      }}
    >
      <IconGlobal
        title="Auth"
        width={widthReso * 0.417}
        height={heightReso * 0.066}
        resizeMode="contain"
        alt="auth-login"
      />
    </VStack>
    <VStack
      width="100%"
      alignItems="center"
      justifyContent="center"
      space={heightReso * 0.035}
    >
      <VStack
        width="100%"
        space={heightReso * 0.019}
      >
       <FormInput
         label="Email"
         placeholder="example@gmail.com"
         height={heightReso * 0.04333}
         value={form.email}
         placeholderColor="custom.200"
         fontSizeLabel={heightReso * 0.013}
         fontSize={heightReso * 0.011}
         onChangeText={(value) => setForm('email', value)}
       />
       <FormInput
         label="Password"
         placeholder="min. 6 characters"
         typeText="password"
         placeholderColor="custom.200"
         fontSizeLabel={heightReso * 0.013}
         fontSize={heightReso * 0.011}
         height={heightReso * 0.04333}
         value={form.password}
         showPassword={isPassword}
         handleShowPassword={onShowPassword}
         visibleIcon={isVisibleIcon}
         onChangeText={(value) => onChangeFieldPassword(value)}
       />
      </VStack>
      <VStack>
         <ButtonGlobal
           title="SIGN IN"
           titleColor="custom.900"
           titleColorPress="custom.100"
           fontSize={heightReso * 0.0136}
           fontWeight={500}
           nativeColor="custom.100"
           paddingX={widthReso * 0.052}
           paddingY={widthReso * 0.0235}
           borderRadius="6px"
           pressedColor="red.600"
           hoveredColor="red.600"
           onPress={onContinue}
         />
      </VStack>
      <HStack
        justifyContent="center"
        alignItems="center"
        space={1}
      >
       <Text
         color="custom.100"
         fontSize={heightReso * 0.013}
         fontFamily="body"
         fontWeight={100}
         letterSpacing="sm"
       >
        Dont have an account?
       </Text>
       <Pressable
         onPress={() => navigation.push('SignUp')}
       >
         {({ isHovered, isFocused, isPressed }) => (
          <Text
            underline
            color={isPressed ? 'red.600' : 'custom.100'}
            fontSize={heightReso * 0.013}
            fontFamily="body"
            fontWeight={300}
            letterSpacing="sm"
          >
                Register here
          </Text>
         )}
       </Pressable>
      </HStack>
    </VStack>

   </VStack>
  );
};

export default SignIn;
