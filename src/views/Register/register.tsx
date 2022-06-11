import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import registerStyle from './register.styles';
import Button from '../../components/buttons';
import CustomTI from '../../components/textInput';

const Register = () => {
  return (
    <View>
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
      <Button title="Sign Up" />
      <View style={registerStyle.buttonsSignUpContainer}>
        <Text style={registerStyle.textinfoContainer}>Or sign up with:</Text>
        <View style={registerStyle.buttonsSocialNetworks}>
          <TouchableOpacity style={registerStyle.buttonsTouchable} />
          <TouchableOpacity style={registerStyle.buttonsTouchable} />
          <TouchableOpacity style={registerStyle.buttonsTouchable} />
        </View>
      </View>
    </View>
  );
};

export default Register;
