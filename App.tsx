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
import {View, SafeAreaView, ScrollView} from 'react-native';

import //Colors,
//DebugInstructions,
//Header,
//LearnMoreLinks,
//ReloadInstructions,
'react-native/Libraries/NewAppScreen';

import Registerview from './src/views/Register';
import Login from './src/views/login';
import Home from './src/views/Home';
import stylesApp from './App.styles';

const Space=() => {
  return(<View style={{
    flexDirection: "row",
    height: 150,
  }}> 
  </View> 
  )
  
}

const App = () => {
  return (
    <SafeAreaView style={stylesApp.main}>
      <ScrollView>
        <Home/>
          <Space/>
        <Login/>
          <Space/>
        <Registerview /> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
