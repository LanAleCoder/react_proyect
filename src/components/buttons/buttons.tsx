import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import buttonStyle from './buttons.style';

const Button = () => {
  return (
    <View style={buttonStyle.buttonContainer}>
      <TouchableOpacity style={buttonStyle.touchableOp}>
        <Text style={buttonStyle.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
