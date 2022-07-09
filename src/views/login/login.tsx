import React, {useState, useContext} from 'react';
import CustomTI from '../../components/textInput';
import {View, Text} from 'react-native';
import style from './login.styles';
import Button from '../../components/buttons';
import AuthContext from '../../state/context/userContext';

const LoginScreen = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [{}, {signIn}] = useContext(AuthContext);
  const onLogin = () => {
    signIn(username, password);
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
        onChangeText={text => setUserName(text)}
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
        textAlign="center"
        onPress={() => onLogin()}
      />
    </View>
  );
};

export default LoginScreen;
