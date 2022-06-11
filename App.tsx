/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Button from './src/components/buttons';

import Register from './src/views/Register';
import Login from './src/views/login';
import Home from './src/views/Home';
import stylesApp from './App.styles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={stylesApp.main}>
      <Login />
    </SafeAreaView>
  );
};

export default App;
