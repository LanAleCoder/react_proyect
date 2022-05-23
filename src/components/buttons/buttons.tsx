import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import buttonStyle from './buttons.style';

const Button = (props) => {
  return (
    <View style={buttonStyle.buttonContainer}>
      <TouchableOpacity style={buttonStyle.touchableOp}>
        <Text style={buttonStyle.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
