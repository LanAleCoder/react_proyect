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

import stylesApp from './App.styles';
import HomeView from './src/views/Home';

const App = () => {
  return (
    <SafeAreaView style={stylesApp.main}>
      <HomeView />
    </SafeAreaView>
  );
};

export default App;
