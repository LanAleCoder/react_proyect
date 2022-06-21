import React from 'react';
import {View, Text} from 'react-native';
import styleLoginSuccess from './loginSucces.styles';

const LoginSucces = () => {
  return (
    <View style={styleLoginSuccess.container}>
      <Text>Logueado correctamente</Text>
    </View>
  );
};

export default LoginSucces;
