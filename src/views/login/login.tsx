import React from 'react';
import CustomTI from '../../components/textInput';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './login.styles';
import Button from '../../components/buttons';
import SVGFacebook from '../../utils/res/img/facebook (1).svg';
import SVGithub from '../../utils/res/img/github (1).svg';
import SVGEmail from '../../utils/res/img/mail.svg';
import {Provider, useSelector} from 'react-redux';
import {store} from '../../store/index';
import LoginSucces from '../Login sucess';
import HomeView from '../Home';
import Nologin from '../NoLogin';

const Login = ({navigation}) => {
  const token = useSelector(state => state.reducers.authToken);
  console.log(token);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Provider store={store}>
      <View>
        {token === null ? <LoginSucces /> : <Nologin />}
        <View style={style.containerText}>
          <Text style={style.tittle}>Log In</Text>
          <View style={style.infoContainer}>
            <Text style={style.textinfoContainer}>
              Fill the form to Join to Your account
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
          title="Log In"
          onPress={function () {
            navigation.navigate('Register');
            submit;
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
    </Provider>
  );
};

export default Login;
