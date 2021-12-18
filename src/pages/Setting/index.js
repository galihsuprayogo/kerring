import React from 'react';
import {
  useToast,
  VStack
} from 'native-base';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { ButtonGlobal } from '../../components';
import {
  removeAsyncData,
  getAsyncData,
  postWithToken,
  globalUrl
} from '../../services';
import { globalAction } from '../../redux';
import {
  globalResolution,
  ShowSuccess,
  ShowError
} from '../../utils';

const Setting = ({ navigation }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;

  const onSignOut = () => {
    dispatch({ type: globalAction.SET_LOADING, value: true });
    const res = setTimeout(async () => {
      const session = await getAsyncData('user_session');
      const data = {
        uid: session.uid
      };
      const response = await postWithToken(globalUrl.URL_SIGN_OUT, data, session.token);
      if (response.status === 200) {
        console.log(response);
        auth().signOut().then(() => {
          removeAsyncData('user_session');
          navigation.replace('SignIn');
          toast.show({
            placement: 'top',
            duration: 2000,
            render: () => (
           <ShowSuccess message={response.data.message} />
            ),
          });
        }).catch((error) => {
          toast.show({
            placement: 'top',
            duration: 2000,
            render: () => (
             <ShowError message="Try Again" />
            ),
          });
        });
      } else {
        toast.show({
          placement: 'top',
          duration: 2000,
          render: () => (
           <ShowError message={response.data.message} />
          ),
        });
      }
      dispatch({ type: globalAction.SET_LOADING, value: false });
    }, 2500);
    return () => clearTimeout(res);
  };

  return (
  <VStack
    flex={1}
    alignItems="flex-end"
    justifyContent="flex-end"
    p="5"
  >
     <ButtonGlobal
       title="SIGN OUT"
       titleColor="custom.100"
       titleColorPress="custom.900"
       fontSize={heightReso * 0.0136}
       fontWeight={700}
       nativeColor="custom.900"
       paddingX={widthReso * 0.052}
       paddingY={widthReso * 0.0235}
       borderRadius="6px"
       pressedColor="red.600"
       hoveredColor="red.600"
       onPress={onSignOut}
     />
  </VStack>
  );
};

export default Setting;
