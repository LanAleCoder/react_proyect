import AsyncStorage from '@react-native-async-storage/async-storage';

export const Persistlogin = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log(token);
      dispatch({
        type: 'LOGIN',
        payload: token,
      });
    }
  };
};

export const Login = (username, password) => {
  return async dispatch => {
    let token = null;
    if (username === 'Admin' && password === 'root') {
      token = username + password;
      await AsyncStorage.setItem('token', token);
      console.log(token);
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
    });
  };
};

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
