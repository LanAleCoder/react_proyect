import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import theme from '../../components/theme';
import Button from '../../components/buttons';

const Map = () => {
  const route = '10km';
  return (
    <View style={styles.containerView}>
      <MapView
        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <View style={styles.buttonGroup}>
        <Button
          title={`Shortest route ${route}`}
          fontSize={10}
          height={40}
          width={250}
          textAlign={'center'}
        />
        <Button
          title={`Second route ${route}`}
          fontSize={10}
          height={40}
          width={250}
          textAlign={'center'}
        />
        <Button
          title={`Third route ${route}`}
          fontSize={10}
          height={40}
          width={250}
          textAlign={'center'}
        />
      </View>
      <View style={styles.submit}>
        <Button
          title={'Continue'}
          fontSize={10}
          height={40}
          width={250}
          textAlign={'center'}
          variant="primary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  map: {
    width: '100%',
    height: 300,
    flex: 3,
  },
  containerView: {
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
    flex: 1,
    alignItems: 'center',
  },
  buttonGroup: {
    width: '100%',
    flex: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  submit: {
    width: 300,
    flex: 2,
  },
});

export default Map;
