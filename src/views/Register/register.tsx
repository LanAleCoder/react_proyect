import React from 'react';
import {View, Text} from 'react-native';
import registerStyle from './register.styles';
import Button from '../../components/buttons';
import CustomTI from '../../components/textInput';
const Register = () => {
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
      <CustomTI placeholder="Name" secureTextEntry={false} />
      <CustomTI placeholder="Last Name" secureTextEntry={false} />
      <CustomTI placeholder="Email" secureTextEntry={false} />
      <CustomTI placeholder="Password" secureTextEntry={true} />
      <Button title="Sign Up" onPress={() => console.log('hola')} />
    </View>
  );
};

export default Register;
