import React from 'react';
import {View, Text} from 'react-native';
import DropDown from '../../components/buttonDropdown';
import Button from '../../components/buttons';
import CustomTI from '../../components/textInput';
import styleNationality from './Nationality.styles';

const Nationality = () => {
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
      <CustomTI placeholder="Enter phone number" />
      <DropDown label="dfsjf" valor="ksdjfkdasf" />
      <Button
        title="Continue"
        variant="primary"
        width={250}
        height={40}
        fontSize={19}
      />
      <Button
        title="Terms and conditions & privacy policy"
        variant="link"
        width={300}
        height={40}
        fontSize={15}
      />
    </View>
  );
};

export default Nationality;
