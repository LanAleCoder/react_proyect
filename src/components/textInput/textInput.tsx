import React from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import styles from './textInput.styles';
import theme from '../theme'


const CustomTI = ({placeholder, secureTextEntry}: {placeholder: string, secureTextEntry: boolean} ) => {
  return (
    <View>
      <RNTextInput placeholder={placeholder}
       placeholderTextColor={theme.colors.TEXT_COLOR}
       style={styles.inputStyle}
       underlineColorAndroid="transparent"
       secureTextEntry={secureTextEntry}
       />
    </View>
  );
};

export default CustomTI;