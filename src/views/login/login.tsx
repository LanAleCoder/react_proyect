import React, {useState, useEffect} from 'react';
import CustomTI from '../../components/textInput';
import {View, Text} from 'react-native';
import style from './login.styles';
import Button from '../../components/buttons';
import {login} from '../../actions/auth';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const onLogin = () => {
    let user = {
      username: username,
      password: password,
    };
    dispatch(login(user))
      .then(response => {
        if (response.status === 'success') {
          navigation.replace('Home');
        }
      })
      .catch(error => {
        navigation.replace('Register');
      });
  };

  return (
    <View style={style.loginView}>
      <View style={style.containerText}>
        <Text style={style.tittle}>Log In</Text>
        <View style={style.infoContainer}>
          <Text style={style.textinfoContainer}>
            Fill the form to join to your account
          </Text>
        </View>
      </View>
      <CustomTI
        placeholder="User/email"
        secureTextEntry={false}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <CustomTI
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Log In" onPress={() => onLogin()} />
    </View>
  );
};

export default Login;
