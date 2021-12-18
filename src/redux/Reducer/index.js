import { globalAction } from '../Action';

const initialLoadingState = {
  loading: false
};

const initialNewsReducer = {
  new: [{
    id: '',
    headline: '',
    writer: '',
    date: '',
    content: '',
    image: '',
    path: '',
    idArtist: ''
  }],

};

export const loadingReducer = (state = initialLoadingState, action) => {
  if (action.type === globalAction.SET_LOADING) {
    return {
      ...state,
      loading: action.value
    };
  }
  return state;
};

export const newsReducer = (state = initialNewsReducer, action) => {
  if (action.type === globalAction.SET_NEWS) {
    return {
      ...state,
      new: action.value
    };
  }
  return state;
};
