import React, {useState} from 'react';
import CustomTI from '../../components/textInput';
import {View, Text} from 'react-native';
import style from './login.styles';
import Button from '../../components/buttons';
import {useDispatch} from 'react-redux';
import {Login} from '../../store/actions';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Login(username, password));
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
      <Button
        title="Or register"
        variant="link"
        width={150}
        height={20}
        fontSize={10}
        onPress={() => navigation.navigate('Register')}
        textAlign="center"
      />
      <Button
        title="Log In"
        variant="primary"
        width={250}
        height={40}
        fontSize={20}
        onPress={submit}
        textAlign="center"
      />
    </View>
  );
};

export default LoginScreen;
