import {LOGIN_SUCESS, LOGOUT} from './type';
import AuthService from '../services/authService';

export const login = user => dispatch => {
  return AuthService.logIn(user).then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: LOGIN_SUCESS,
          payload: {user: response.user},
        });
        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();
      Promise.reject();
      return message;
    },
  );
};

export const logout = () => dispatch => {
  return AuthService.logOut().then(response => {
    if (response.status === 'success') {
      dispatch({
        type: LOGOUT,
      });
      Promise.resolve();
      return response;
    }
  });
};
