import React from 'react';
import {View, Text, TextInput} from 'react-native';
import registerStyle from './register.styles';
import Button from '../../components/buttons';

const Registerview = () => {
  return (
    <View style={registerStyle.containerRegister}>
      <Text style={registerStyle.tittle}>Register</Text>
      <TextInput placeholder="Nombre" style={registerStyle.inputStyle} />
      <TextInput placeholder="Apellido" style={registerStyle.inputStyle} />
      <TextInput placeholder="Contraseña" style={registerStyle.inputStyle} />
      <Button />
    </View>
  );
};

export default Registerview;
