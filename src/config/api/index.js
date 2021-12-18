import axios from 'axios';

const localServer = 'http://192.168.56.1:4000';

export const service = axios.create({
  baseURL: localServer
});

export const globalEnv = {
  URI_IMAGE: localServer
};
