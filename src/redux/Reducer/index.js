import { globalAction } from '../Action';

const initialLoadingState = {
  loading: false
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
