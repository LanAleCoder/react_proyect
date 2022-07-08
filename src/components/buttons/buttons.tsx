import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import buttonStyle from './buttons.style';
import theme from '../theme';

// type Props = {
//   title: string;
//   onPress?: (event: GestureResponderEvent) => void;
// };

interface Props {
  variant: 'default' | 'primary' | 'link';
  title: string;
  onPress?: () => void;
  height: number;
  width: number;
  fontSize: number;
}

const Button = ({title, onPress, variant, height, width, fontSize}: Props) => {
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.RED_CARAMEL_BTN
      : variant === 'link'
      ? 'transparent'
      : '#FFA500';
  const color =
    variant === 'primary'
      ? theme.colors.TEXT_COLOR
      : variant === 'link'
      ? '#3165de'
      : 'black';
  return (
    <View style={buttonStyle.buttonContainer}>
      <TouchableOpacity
        style={[buttonStyle.touchableOp, {backgroundColor}, {height}, {width}]}
        onPress={onPress}>
        <Text style={[buttonStyle.text, {color}, {fontSize}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {variant: 'default'};

export default Button;
