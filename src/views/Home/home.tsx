import React from 'react';
import {View, Text} from 'react-native';
import homeStyles from './home.styles';
import SVGCar from '../../utils/res/img/car.svg';
import Button from '../../components/buttons';
import {logout} from '../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const HomeView = ({navigation}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout()).then(response => {
      if (response.status === 'success') {
        navigation.replace('Login');
      }
    });
  };
  return (
    <View style={homeStyles.homeContainer}>
      <View style={homeStyles.containerImage}>
        <SVGCar width={300} height={300} />
        <View>
          <Text style={homeStyles.titleHome}>¡Bienvenido!</Text>
        </View>
        <View style={homeStyles.containerPhrase}>
          <Text style={homeStyles.textPhrase}>{state.user}</Text>
        </View>
      </View>
      <Button title="Cerrar sesión" onPress={() => onLogout()} />
    </View>
  );
};

export default HomeView;
