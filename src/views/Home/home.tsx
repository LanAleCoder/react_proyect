import React from 'react';
import {View, Text} from 'react-native';
import homeStyles from './home.styles';
import SVGCar from '../../utils/res/img/car.svg';
import Button from '../../components/buttons';

const HomeView = ({navigation}) => {
  return (
    <View style={homeStyles.homeContainer}>
      <View style={homeStyles.containerImage}>
        <SVGCar width={300} height={300} />
      </View>
      <View>
        <View>
          <Text style={homeStyles.titleHome}>¡Bienvenido!</Text>
        </View>
        <View style={homeStyles.containerPhrase}>
          <Text style={homeStyles.textPhrase}>
            Evita contaminar más y gasta menos al transportarte
          </Text>
        </View>
      </View>
      <View style={homeStyles.containerButton}>
        <Button
          title="Registrate"
          onPress={function () {
            navigation.navigate('Login');
          }}
        />
      </View>
    </View>
  );
};

export default HomeView;
