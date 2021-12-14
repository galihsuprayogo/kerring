import React from 'react';
import {
  useToast,
  VStack
} from 'native-base';
import { useDispatch } from 'react-redux';
import { ButtonGlobal } from '../../components';
import { removeAsyncData } from '../../services';
import { globalAction } from '../../redux';
import {
  globalResolution,
  ShowSuccess
} from '../../utils';

const Setting = ({ navigation }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const heightReso = globalResolution().height;
  const widthReso = globalResolution().width;

  const onSignOut = () => {
    dispatch({ type: globalAction.SET_LOADING, value: true });
    const res = setTimeout(() => {
      removeAsyncData('user_session');
      navigation.replace('Splash');
      dispatch({ type: globalAction.SET_LOADING, value: false });
      toast.show({
        placement: 'top',
        duration: 2000,
        render: () => (
         <ShowSuccess message="Logout Successfully" />
        ),
      });
    }, 3000);
    return () => clearTimeout(res);
  };

  return (
  <VStack
    flex={1}
    alignItems="center"
    justifyContent="center"
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
