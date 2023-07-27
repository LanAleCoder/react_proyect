import React from 'react';
import {View, Text, TouchableOpacity, ColorValue} from 'react-native';
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
  variant:
    | 'default'
    | 'primary'
    | 'link'
    | 'disabled'
    | 'outline'
    | 'facebook'
    | 'gmail'
    | 'linkedin';
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
  disabled?: boolean;
  borderRadius?: number;
  color2?: ColorValue;
  marginHorizontal?: number;
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
  disabled,
  color2,
  marginHorizontal,
}: Props) => {
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.RED_CARAMEL_BTN
      : variant === 'link'
      ? 'transparent'
      : variant === 'disabled'
      ? theme.colors.RED_CARAMEL_BTN_DISABLED
      : variant === 'outline'
      ? theme.colors.OUTLINE_COLOR_BTN
      : variant === 'facebook'
      ? '#1877F2'
      : variant === 'gmail'
      ? '#BB001B'
      : variant === 'linkedin'
      ? '#0072B1'
      : '#FFA500';
  const color =
    variant === 'primary'
      ? theme.colors.TEXT_COLOR
      : variant === 'link'
      ? '#3165de'
      : variant === 'outline'
      ? 'white'
      : 'black';
  const borderWidth = variant === 'outline' ? 2 : 0;
  const borderColor = variant === 'outline' ? 'white' : 'transparent';
  return (
    <View style={buttonStyle.buttonContainer}>
      <TouchableOpacity
        style={[
          buttonStyle.touchableOp,
          {backgroundColor},
          {height},
          {width},
          {borderColor},
          {borderWidth},
        ]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[buttonStyle.text, {color}, {fontSize}, {textAlign}]}>
          <FontAwesome5
            name={name}
            onPress={onPress}
            size={size}
            style={[buttonStyle.icon, {marginHorizontal}]}
            color={color2}
          />
          {title}
          <FontAwesome5
            name={name2}
            onPress={onPress}
            size={size2}
            style={[buttonStyle.icon, {marginHorizontal}]}
            color={color2}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {variant: 'default', disabled: false};

export default Button;
