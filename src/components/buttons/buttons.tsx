import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import buttonStyle from './buttons.style';
import theme from '../theme';
import FontAwesome5, {
  FontAwesome5IconProps,
} from 'react-native-vector-icons/FontAwesome5';

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
  textAlign: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
  name?: FontAwesome5IconProps;
  size?: number;
  name2?: FontAwesome5IconProps;
  size2?: number;
}

const Button = ({
  title,
  onPress,
  variant,
  height,
  width,
  fontSize,
  textAlign,
  name,
  size,
  name2,
  size2,
}: Props) => {
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
        <Text style={[buttonStyle.text, {color}, {fontSize}, {textAlign}]}>
          <FontAwesome5 name={name} onPress={onPress} size={size} />
          {title}
          <FontAwesome5 name={name2} onPress={onPress} size={size2} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {variant: 'default'};

export default Button;
