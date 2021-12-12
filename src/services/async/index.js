import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const getAsyncData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeAsyncData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('session deleted');
  } catch (e) {
    console.log(e);
  }
};
