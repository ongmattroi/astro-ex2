import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
} from '../actions/types';

const initialState = {
  userName: '',
  password: '',
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case SIGN_IN_FAILED:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
