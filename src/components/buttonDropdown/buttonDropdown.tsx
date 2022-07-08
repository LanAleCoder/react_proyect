import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import stylesDropdown from './buttonDropdown.styles';

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Guatemala (+502', value: '+502'},
    {label: 'Afghanistan (+93)', value: '+93'},
    {label: 'Albania	(+355)', value: '+355'},
    {label: 'Algeria (+213)', value: '+213'},
    {label: 'United States (+1)', value: '+1'},
    {label: 'Argentina (+54)', value: '+54'},
  ]);
  return (
    <View style={stylesDropdown.containerDropwDown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
        placeholder="Country/region"
        style={stylesDropdown.dropDownStyles}
      />
    </View>
  );
};

export default DropDown;
