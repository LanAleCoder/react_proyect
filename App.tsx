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
import {
  SafeAreaView,
  // ScrollView,
  Text,
  //View,
} from 'react-native';

import //Colors,
//DebugInstructions,
//Header,
//LearnMoreLinks,
//ReloadInstructions,
'react-native/Libraries/NewAppScreen';

import Registerview from './src/views/Register';
import stylesApp from './App.styles';
import Button from './src/components/buttons';

const App = () => {
  return (
    <SafeAreaView style={stylesApp.main}>
      <Text style={stylesApp.textSize}>Login</Text>
      <Registerview />
      <Button />
    </SafeAreaView>
  );
};

export default App;
