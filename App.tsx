/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useContext} from 'react';
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
import Ride from './src/views/Ride';
import {enableLatestRenderer} from 'react-native-maps';
import Map from './src/views/map';
import AuthContext, {AuthProvider} from './src/state/context/userContext';
import InitialScreen from './src/views/InitialScreen';

enableLatestRenderer();

const Stack = createNativeStackNavigator();

const App = () => {
  const [{userToken}, {persistToken}] = useContext(AuthContext);
  useEffect(() => {
    persistToken();
  }, []);
  return (
    <SafeAreaView style={stylesApp.main}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {userToken == null ? (
            <>
              <Stack.Screen name="InitialScreen" component={InitialScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Create Account" component={ProfileConfig} />
              <Stack.Screen
                name="Select your Nationality"
                component={Nationality}
              />
              <Stack.Screen name="Verification" component={Verification} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Ofrecer un ride" component={Ride} />
              <Stack.Screen
                name="Ofrecer un ride map"
                component={Map}
                options={{
                  title: 'Select your route',
                  headerShown: true,
                  headerTitleAlign: 'center',
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
