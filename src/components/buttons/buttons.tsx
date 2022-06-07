import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import buttonStyle from './buttons.style';

const Button = ({title}: {title: string}) => {
  return (
    <View style={buttonStyle.buttonContainer}>
      <TouchableOpacity style={buttonStyle.touchableOp}>
        <Text style={buttonStyle.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
