import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  KeyboardTypeOptions,
} from 'react-native';
import styles from './textInput.styles';
import theme from '../theme';

const CustomTI = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  keyboardType,
}: {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
}) => {
  return (
    <View style={styles.inputContainer}>
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.TEXT_COLOR}
        style={styles.inputStyle}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomTI;
