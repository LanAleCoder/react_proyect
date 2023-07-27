import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import homeStyles from './home.styles';
import Button from '../../components/buttons';
import AuthContext from '../../state/context/userContext';

const HomeView = ({navigation}) => {
  const [{userToken}, {logOut}] = useContext(AuthContext);
  const cerrarSesion = () => {
    logOut();
    console.log(userToken);
  };
  return (
    <View style={homeStyles.homeContainer}>
      <View style={homeStyles.containerImage}>
        <Image
          source={{
            uri: 'https://icon-library.com/images/profile-icon-white/profile-icon-white-22.jpg',
          }}
          style={{width: 150, height: 150}}
        />
        <View>
          <Text style={homeStyles.titleHome}>¡Bienvenido!</Text>
        </View>
        <View style={homeStyles.containerPhrase}>
          <Text style={homeStyles.textPhrase}>User</Text>
        </View>
      </View>
      <Button
        title="Ofrecer un ride"
        variant="primary"
        width={220}
        height={40}
        fontSize={19}
        onPress={() => {
          navigation.navigate('Ofrecer un ride');
        }}
        textAlign="center"
      />
      <Button
        title="Cerrar sesión"
        variant="primary"
        width={220}
        height={40}
        fontSize={19}
        textAlign="center"
        onPress={cerrarSesion}
      />
    </View>
  );
};

export default HomeView;
