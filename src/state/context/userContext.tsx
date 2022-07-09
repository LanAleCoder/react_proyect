import React, {useReducer, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from '../reducers/userReducer';
import {actions, initialState} from '../reducers/userReducer';
import {createContext} from 'react';

const {SIGN_IN, PERSIST_TOKEN, LOGOUT} = actions;

const AuthContext = createContext([initialState, {}, () => {}]);

interface AuthChildren {
  children?: JSX.Element;
}

const AuthProvider = ({children}: AuthChildren) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const contextActions = useMemo(
    () => ({
      signIn: async (userName: string, password: string) => {
        let userToken = null;
        if (userName === 'user' && password === '123') {
          userToken = userName + password;
          await AsyncStorage.setItem('token', userToken);
          console.log(userToken);
        } else {
          console.log('usuario no encontrado');
        }
        dispatch({type: SIGN_IN, token: userToken});
      },
      logOut: async () => {
        try {
          await AsyncStorage.removeItem('token');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: LOGOUT});
      },
      persistToken: async () => {
        let userToken = null;
        try {
          userToken = await AsyncStorage.getItem('token');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: PERSIST_TOKEN, token: userToken});
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={[state, contextActions, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export {AuthProvider};
