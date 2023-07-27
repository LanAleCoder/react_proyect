import React, {useState, useContext} from 'react';
import CustomTI from '../../components/textInput';
import {View, Text} from 'react-native';
import style from './login.styles';
import Button from '../../components/buttons';
import AuthContext from '../../state/context/userContext';

const LoginScreen = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    changeInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const handleValidUser = (val: any) => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handleValidPassword = (val: any) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const textInputChange = (val: any) => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        username: val,
        changeInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        changeInputChange: false,
        isValidUser: false,
      });
    }
  };
  const [{}, {signIn}] = useContext(AuthContext);
  const onLogin = () => {
    signIn(data.username, data.password);
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
      <View style={style.containerInputs}>
        <CustomTI
          placeholder="User/email"
          secureTextEntry={false}
          value={data.username}
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
        {data.isValidUser ? null : (
          <Text style={{color: 'red'}}>
            Este campo es obligatorio debe ser mayor a 3 digitos
          </Text>
        )}
        <CustomTI
          placeholder="Password"
          secureTextEntry={true}
          value={data.password}
          onChangeText={val => handleValidPassword(val)}
        />
        {data.isValidPassword ? null : (
          <Text style={{color: 'red'}}>
            Este campo es obligatorio debe ser mayor a 3 digitos
          </Text>
        )}
        <Button
          title="Or register"
          variant="link"
          width={250}
          height={20}
          fontSize={10}
          onPress={() => navigation.navigate('Register')}
          textAlign="center"
        />
        {data.isValidUser && data.isValidPassword ? (
          <>
            <Button
              title="Log In"
              variant="primary"
              width={250}
              height={40}
              fontSize={20}
              textAlign="center"
              onPress={() => onLogin()}
            />
          </>
        ) : (
          <Button
            title="Log In"
            width={250}
            height={40}
            fontSize={20}
            textAlign="center"
            onPress={() => onLogin()}
            disabled={true}
            variant="disabled"
          />
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
