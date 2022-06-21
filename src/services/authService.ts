import {AsyncStorage} from 'react-native';

const logIn = async user => {
  console.log('user info: ', user);
  const {username, password} = user;
  if (username == 'Admin' && password == 'root') {
    AsyncStorage.setItem('user', JSON.stringify(user));
    return {
      status: 'success',
      message: 'Redireccionando a la pagina de inicio',
      user: username,
    };
  }
};

const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: 'success',
    message: 'Cerrando sesión',
  };
};

export default {
  logIn,
  logOut,
};
