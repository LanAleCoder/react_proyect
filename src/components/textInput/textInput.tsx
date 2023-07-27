import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import styles from './textInput.styles';
import theme from '../theme';

const CustomTI = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  keyboardType,
  onEndEditing,
}: {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  onEndEditing?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
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
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default CustomTI;
