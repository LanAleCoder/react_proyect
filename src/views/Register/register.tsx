import React from 'react';
import {View, Text} from 'react-native';
import registerStyle from './register.styles';
import Button from '../../components/buttons';
import CustomTI from '../../components/textInput';
const Register = ({navigation}) => {
  return (
    <View style={registerStyle.mainRegister}>
      <View style={registerStyle.containerText}>
        <Text style={registerStyle.tittle}>Sign up</Text>
        <View style={registerStyle.infoContainer}>
          <Text style={registerStyle.textinfoContainer}>
            Fill the form to join or create a new account
          </Text>
        </View>
      </View>
      <CustomTI placeholder="Email" secureTextEntry={false} />
      <CustomTI placeholder="Password" secureTextEntry={true} />
      <CustomTI placeholder="Confirm password" secureTextEntry={true} />
      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate('Create Account');
        }}
        variant="primary"
        height={40}
        width={250}
        fontSize={19}
      />
    </View>
  );
};

export default Register;
