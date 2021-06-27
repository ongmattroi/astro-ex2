import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from './types';
import { signIn } from 'next-auth/client';
import { HttpStatus } from '../../lib/HttpStatusCode';
export const signInRequest = (signInForm) => (dispatch) => {
  dispatch({
    type: SIGN_IN_REQUEST,
  });

  signIn('credentials', signInForm).then((res) => {
    debugger;
    console.log(res);
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: res,
    });
  });
};
export const validate = (errors) => (dispatch) => {
  //   console.log(errors);
  dispatch({
    type: SIGN_IN_FAILED,
    errors: errors,
  });
};
