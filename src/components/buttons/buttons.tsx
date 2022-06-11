import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import buttonStyle from './buttons.style';

type Props = {
  title: string;
  onPress(): void;
};

const Button = ({title, onPress}: Props) => {
  return (
    <View style={buttonStyle.buttonContainer}>
      <TouchableOpacity style={buttonStyle.touchableOp} onPress={onPress}>
        <Text style={buttonStyle.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
