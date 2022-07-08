import React from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import styles from './textInput.styles';
import theme from '../theme';

const CustomTI = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
}: {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
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
      />
    </View>
  );
};

export default CustomTI;
