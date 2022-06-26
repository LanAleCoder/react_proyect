/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/views/Register';
import Login from './src/views/login';
import Home from './src/views/Home';
import Verification from './src/views/verification';
import ProfileConfig from './src/views/profileCofiguration';
import Nationality from './src/views/Nationality';
import stylesApp from './App.styles';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/store';
import {Persistlogin} from './src/store/actions';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}> 
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Create Account" component={ProfileConfig} />
      <Stack.Screen name="Select your Nationality" component={Nationality} />
      <Stack.Screen name="Verification" component={Verification}/>
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector(state => state.AuthReducer.authToken);
  const dispatch = useDispatch();
  const keepToken = () => {
    dispatch(Persistlogin());
  };
  useEffect(() => {
    keepToken();
  }, []);
  console.log(token);

  return (
    <NavigationContainer>
      {token === null ? (
        <>
          <AuthStack />
        </>
      ) : (
        <>
          <MainStack />
        </>
      )}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={stylesApp.main}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
