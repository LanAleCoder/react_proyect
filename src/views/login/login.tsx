import React from 'react';
import {View, Text } from 'react-native';
import TextInput from '../../components/textInput'
import style from './login.styles';
import Button from '../../components/buttons';

const Login = () => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <View>
          <Text style={style.title}>Log In</Text>
        </View>
        <View>
          <Text style={style.inputsText}>Ingrese su Usuario</Text>
          <TextInput/>
          <Text style={style.inputsText}>Ingrese su Contrseña</Text>
          <TextInput/>
        </View>
      </View>
    <Button/>
      
    </View>
  );
};

export default Login;
