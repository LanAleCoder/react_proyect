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

import //Colors,
//DebugInstructions,
//Header,
//LearnMoreLinks,
//ReloadInstructions,
'react-native/Libraries/NewAppScreen';

import Registerview from './src/views/Register';
import Login from './src/views/login'
import stylesApp from './App.styles';

const App = () => {
  return (
    <SafeAreaView style={stylesApp.main}>
        <Login/>
      <Registerview />
    </SafeAreaView>
  );
};

export default App;
