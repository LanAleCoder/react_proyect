import {Modal, Text, View} from 'react-native';
import React, {useState} from 'react';
import stylesRide from './Ride.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Button from '../../components/buttons';
import theme from '../../components/theme';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
const Ride = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const currentDate = Date.now();
  const [modalVisible, setModalVisible] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
  ]);

  return (
    <SafeAreaView style={stylesRide.container}>
      <View style={stylesRide.containerText}>
        <View>
          <Text style={stylesRide.title}>Offer a ride</Text>
        </View>
        <View>
          <Text style={stylesRide.textInfo}>
            Create an itinerary and map out your plans
          </Text>
        </View>
      </View>
      <View style={stylesRide.containerText2}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAl0HmQXXjnCCC6-royC4T_2H2aNLEOMjg',
            language: 'en',
          }}
          styles={{
            container: {
              width: '80%',
              zIndex: 1000,
              flex: 0,
              margin: 10,
            },
            row: {
              alignItems: 'center',
              justifyContent: 'center',
            },
            textInput: {
              borderColor: theme.colors.COLOR_BORDER_INPUT,
              borderWidth: 3,
              backgroundColor: 'transparent',
              borderRadius: 25,
              color: theme.colors.TEXT_COLOR,
            },
            poweredContainer: {alignItems: 'center', justifyContent: 'center'},
          }}
          textInputProps={{
            placeholderTextColor: theme.colors.TEXT_COLOR,
          }}
        />
        <View>
          <Button
            title={'Add detour   '}
            fontSize={15}
            height={40}
            width={300}
            variant="link"
            textAlign="right"
            name2="plus-circle"
          />
        </View>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAl0HmQXXjnCCC6-royC4T_2H2aNLEOMjg',
            language: 'en',
          }}
          styles={{
            container: {
              width: '80%',
              flex: 0,
              margin: 10,
            },
            row: {
              alignItems: 'center',
              justifyContent: 'center',
            },
            textInput: {
              borderColor: theme.colors.COLOR_BORDER_INPUT,
              borderWidth: 3,
              backgroundColor: 'transparent',
              borderRadius: 25,
              color: theme.colors.TEXT_COLOR,
            },
            poweredContainer: {
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
          textInputProps={{
            placeholderTextColor: theme.colors.TEXT_COLOR,
          }}
        />
        <Button
          title={'   Trip date'}
          fontSize={15}
          height={40}
          width={250}
          textAlign="left"
          name="calendar"
          size={15}
          iconColor="white"
          onPress={() => setOpen(true)}
        />
        <Button
          title={'   Free seats'}
          fontSize={15}
          height={40}
          width={250}
          textAlign="left"
          name={'chair'}
          size={15}
          onPress={() => setModalVisible(true)}
        />
        <Button
          title={'Continue'}
          fontSize={19}
          textAlign={'center'}
          height={40}
          width={250}
          variant="primary"
          onPress={() => {
            navigation.navigate('Ofrecer un ride map');
          }}
        />
        <DatePicker
          modal
          open={open}
          date={date}
          title="Select a date"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            console.log(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          minimumDate={new Date(currentDate)}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={stylesRide.centeredView}>
            <View style={stylesRide.modalView}>
              <DropDownPicker
                open={openDrop}
                value={value}
                items={items}
                setOpen={setOpenDrop}
                setValue={setValue}
                setItems={setItems}
              />
              <Button
                title={'Continue'}
                width={180}
                height={40}
                textAlign={'center'}
                fontSize={15}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  console.log(value);
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Ride;
