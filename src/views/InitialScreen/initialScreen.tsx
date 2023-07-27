import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './initialScreen.styles';
import Button from '../../components/buttons';
import Lottie from 'lottie-react-native';

const InitialScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottieAnimation}>
        <Lottie
          source={require('./111690-celebration-july.json')}
          autoPlay
          loop
          style={{width: 290, height: 290}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerStyle}>¡Bienvenido!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          Empieza a viajar fácilmente y ayuda al ambiente
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button
          textAlign={'center'}
          height={40}
          width={150}
          title="LogIn"
          fontSize={19}
          variant="primary"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          textAlign={'center'}
          height={40}
          width={150}
          title="Sign Up"
          fontSize={19}
          variant="outline"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <View style={styles.containerSubtitle}>
        <View style={styles.lineView} />
        <Text style={styles.textStyle}>Or via social media</Text>
        <View style={styles.lineView} />
      </View>
      <View style={styles.buttonsSocialNetwork}>
        <Button
          textAlign={'center'}
          height={50}
          width={50}
          fontSize={19}
          variant="facebook"
          name="facebook-f"
          size={20}
          color2="white"
        />
        <Button
          textAlign={'center'}
          height={50}
          width={50}
          fontSize={19}
          variant="gmail"
          name="google"
          color2="white"
          size={20}
          />
        <Button
          textAlign={'center'}
          height={50}
          width={50}
          fontSize={19}
          variant="linkedin"
          name="linkedin-in"
          color2="white"
          size={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;
