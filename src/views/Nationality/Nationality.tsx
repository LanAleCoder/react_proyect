import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDown from '../../components/buttonDropdown';
import Button from '../../components/buttons';
import CustomTI from '../../components/textInput';
import styleNationality from './Nationality.styles';

const Nationality = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Guatemala (+502)', value: '+502'},
    {label: 'Afghanistan (+93)', value: '+93'},
    {label: 'Albania	(+355)', value: '+355'},
    {label: 'Algeria (+213)', value: '+213'},
    {label: 'United States (+1)', value: '+1'},
    {label: 'Argentina (+54)', value: '+54'},
  ]);
  return (
    <View style={styleNationality.container}>
      <View style={styleNationality.containerText}>
        <Text style={styleNationality.title}>Welcome</Text>
        <View style={styleNationality.textContainer}>
          <Text style={styleNationality.text}>
            Fill the form to join or create a new account
          </Text>
        </View>
      </View>
      <View style={styleNationality.containerDropwDown}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          theme="DARK"
          placeholder="Country/region"
          style={styleNationality.dropDownStyles}
        />
      </View>
      <CustomTI placeholder="Enter phone number" />
      <Button
        title="Continue"
        width={250}
        height={40}
        fontSize={19}
        textAlign="center"
        variant="primary"
        onPress={() => {
          navigation.navigate('Verification');
        }}
      />
      <Button
        title="Terms and conditions & privacy policy"
        variant="link"
        width={400}
        height={40}
        fontSize={15}
        textAlign="center"
      />
    </View>
  );
};

export default Nationality;
