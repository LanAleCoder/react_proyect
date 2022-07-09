import React from 'react';
import {View, Text} from 'react-native';
import DropDown from '../../components/buttonDropdown';
import Button from '../../components/buttons';
import CustomTI from '../../components/textInput';
import styleNationality from './Verification.styles';

const Verification = ({navigation}) => {
  return (
    <View style={styleNationality.container}>
      <View style={styleNationality.containerText}>
        <Text style={styleNationality.title}>Verification</Text>
        <View style={styleNationality.textContainer}>
          <Text style={styleNationality.text}>
            Enter code sent to your phone
          </Text>
          <Text style={styleNationality.text}>numer: +(502) 12345678</Text>
        </View>
      </View>
      <CustomTI placeholder="type your code" keyboardType="number-pad" />
      <Button
        title="¿Code not Recieved?"
        variant="link"
        width={200}
        height={13}
        fontSize={10}
        textAlign="center"
      />
      <Button
        title="Go Login"
        variant="primary"
        width={250}
        height={40}
        fontSize={19}
        onPress={() => {
          navigation.navigate('Login');
        }}
        textAlign="center"
      />
      <Button
        title="Terms and conditions & privacy policy"
        variant="link"
        width={390}
        height={40}
        fontSize={15}
        textAlign="center"
      />
    </View>
  );
};

export default Verification;
