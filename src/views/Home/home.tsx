import React from 'react';
import {View, Text, Image} from 'react-native';
import homeStyles from './home.styles';
import Button from '../../components/buttons';
import {useDispatch} from 'react-redux';
import {Logout} from '../../store/actions';

const HomeView = ({navigation}) => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
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
        title="Cerrar sesión"
        variant="primary"
        width={200}
        height={40}
        fontSize={19}
        onPress={submit}
      />
    </View>
  );
};

export default HomeView;
