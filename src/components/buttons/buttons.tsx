import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import buttonStyle from './buttons.style';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
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
