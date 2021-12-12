import React, { useState } from 'react';
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
  IconGlobal
} from '../../components';
import {
  globalResolution,
  ShowError,
  ShowSuccess,
  useForm
} from '../../utils';

const SignUp = () => {
  const toast = useToast();
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;
  const [message, setMessage] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
    confirmation: ''
  });
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [isVisibleIcon, setIsVisibleIcon] = useState(false);
  const [isVisibleIconConfirm, setIsVisibleIconConfirm] = useState(false);
  const [isVisibleKeyboard, setIsVisibleKeyboard] = useState(true);

  const onContinue = () => {
    if (form.email !== ''
     && form.password !== ''
     && form.confirmation !== '') {
      const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(form.email) === false) {
        toast.show({
          placement: 'top',
          duration: 2000,
          render: () => (
           <ShowError message="Email format invalid" />
          ),
        });
      } else if (form.password.length !== 6) {
        toast.show({
          placement: 'top',
          duration: 2000,
          render: () => (
           <ShowError message="Password lest than 6 character" />
          ),
        });
      } else if (!form.password.match(form.confirmation)) {
        toast.show({
          placement: 'top',
          duration: 2000,
          render: () => (
            <ShowError message="Password confirmation doesn't match" />
          ),
        });
      } else {
        console.log(form.email, ' ', form.password, ' ', form.confirmation);
        setForm('reset');
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

  const onShowConfirmation = () => {
    setIsConfirmation(!isConfirmation);
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

  const onChangeFieldConfirmation = (value) => {
    if (value === '') {
      setIsVisibleIconConfirm(false);
      setForm('confirmation', value);
    } else {
      setIsVisibleIconConfirm(true);
      setForm('confirmation', value);
    }
  };

  return (
 <VStack
   flex={1}
   px={widthReso * 0.19}
   bg="custom.900"
   justifyContent="center"
   space={heightReso * 0.035}
 >
   <VStack
     alignItems="flex-start"
     justifyContent="center"
     space="1"
   >
     <Box>
      <Text
        color="custom.100"
        fontSize={heightReso * 0.016}
        fontFamily="body"
        fontWeight={200}
        letterSpacing="sm"
      >
      Are you music enthusiast ?
      </Text>
      <Text
        color="custom.100"
        fontSize={heightReso * 0.016}
        fontFamily="body"
        fontWeight={200}
        letterSpacing="sm"
      >
      or passionate to writing all
      about songs, albums, biography, etc from artist/band you
      like most ?
      </Text>
     </Box>
     <Text
       color="custom.100"
       fontSize={heightReso * 0.018}
       fontFamily="body"
       fontWeight={400}
       letterSpacing="sm"
     >
      Let&rsquo;s join with us !
     </Text>
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
     <FormInput
       label="Passwod Confirmation"
       placeholder="min. 6 characters"
       typeText="password"
       placeholderColor="custom.200"
       fontSizeLabel={heightReso * 0.013}
       fontSize={heightReso * 0.011}
       height={heightReso * 0.04333}
       value={form.confirmation}
       showPassword={isConfirmation}
       handleShowPassword={onShowConfirmation}
       visibleIcon={isVisibleIconConfirm}
       onChangeText={(value) => onChangeFieldConfirmation(value)}
     />
    </VStack>
    <VStack>
      <ButtonGlobal
        title="SIGN UP"
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
  </VStack>
 </VStack>
  );
};
export default SignUp;
