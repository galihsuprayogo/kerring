import axios from 'axios';

const localServer = 'http://192.168.56.1:4000';
const kerringSever = 'https://kerring.suicode.tech';

export const service = axios.create({
  baseURL: kerringSever
});

export const globalEnv = {
  URI_IMAGE: kerringSever
};
