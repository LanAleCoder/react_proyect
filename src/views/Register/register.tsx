import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import registerStyle from './register.styles';
import Button from '../../components/buttons';
import CustomTI from '../../components/textInput';
import SVGFacebook from '../../utils/res/img/facebook (1).svg';
import SVGithub from '../../utils/res/img/github (1).svg';
import SVGEmail from '../../utils/res/img/mail.svg';

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
      <Button title="Sign Up" onPress={() => console.log('hola')} />
      <View style={registerStyle.buttonsSignUpContainer}>
        <Text style={registerStyle.textinfoContainer}>Or sign up with:</Text>
        <View style={registerStyle.buttonsSocialNetworks}>
          <TouchableOpacity style={registerStyle.buttonsTouchable}>
            <SVGFacebook width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity style={registerStyle.buttonsTouchable}>
            <SVGEmail width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity style={registerStyle.buttonsTouchable}>
            <SVGEmail width={40} height={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
