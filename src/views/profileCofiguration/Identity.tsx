import React from 'react';
import {Image, Text, View} from 'react-native';
import CustomTI from '../../components/textInput';
import Button from '../../components/buttons';
import stylesIdentity from './profileConfig';

const ProfileConfig = ({navigation}) => {
  return (
    <View style={stylesIdentity.container}>
      <View style={stylesIdentity.containerText}>
        <Text style={stylesIdentity.title}>Identity</Text>
        <View style={stylesIdentity.textContainer}>
          <Text style={stylesIdentity.text}>
            Enter a good profile photo and type your name
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://icon-library.com/images/profile-icon-white/profile-icon-white-22.jpg',
          }}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </View>
      <CustomTI placeholder="Name" />
      <CustomTI placeholder="Last Name" />
      <Button
        title="Create Account"
        width={200}
        height={40}
        fontSize={19}
        variant="primary"
        onPress={() => {
          navigation.navigate('Select your Nationality');
        }}
      />
    </View>
  );
};

export default ProfileConfig;
