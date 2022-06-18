import React from 'react';
import CustomTI from '../../components/textInput';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './login.styles';
import Button from '../../components/buttons';
import SVGFacebook from '../../utils/res/img/facebook (1).svg';
import SVGithub from '../../utils/res/img/github (1).svg';
import SVGEmail from '../../utils/res/img/mail.svg';

const Login = ({navigation}) => {
  return (
    <View>
      <View style={style.containerText}>
        <Text style={style.tittle}>Log In</Text>
        <View style={style.infoContainer}>
          <Text style={style.textinfoContainer}>
            Fill the form to Join to Your account
          </Text>
        </View>
      </View>
      <CustomTI placeholder="User/email" secureTextEntry={false} />
      <CustomTI placeholder="Password" secureTextEntry={true} />
      <Button
        title="Log In"
        onPress={function () {
          navigation.navigate('Register');
        }}
      />
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
            <SVGEmail width={40} height={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
