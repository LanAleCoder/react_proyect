import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from './login.styles';
import Button from '../../components/buttons';
import theme from '../../components/theme';
import SVGFacebook from '../../../utils/res/img/facebook (1).svg';
import SVGithub from '../../../utils/res/img/github (1).svg';
import SVGEmail from '../../../utils/res/img/mail.svg';

const Login = () => {
  return (
    <View style={style.containerRegister}>
      <Text style={style.tittle}>Log In</Text>
      <View style={style.infoContainer}>
        <Text style={style.textinfoContainer}>
          Fill the form to Join to Your account
        </Text>
      </View>
      <TextInput
        placeholder="User/email"
        placeholderTextColor={theme.colors.TEXT_COLOR}
        style={style.inputStyle}
        underlineColorAndroid="transparent"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme.colors.TEXT_COLOR}
        style={style.inputStyle}
        secureTextEntry={true}
      />
      <View style={style.buttonContainer}>
        <Button title="Log In" />
      </View>
      <View style={style.buttonsSignUpContainer}>
        <Text style={style.textinfoContainer}>Or Log In with:</Text>
        <View style={style.buttonsSocialNetworks}>
          <TouchableOpacity style={style.buttonsTouchable}>
            <SVGFacebook width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonsTouchable}>
            <SVGEmail width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonsTouchable}>
            <SVGithub width={40} height={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
