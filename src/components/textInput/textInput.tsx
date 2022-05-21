import React from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import styles from './textInput.styles';


const TextInput = () => {
  return (
    <View>
      <RNTextInput style={styles.textInput} placeholder="Ingrese Texto" placeholderTextColor={'#888B9C'}/>
    </View>
  );
};

export default TextInput;