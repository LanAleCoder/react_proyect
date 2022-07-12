import {StyleSheet} from 'react-native';
import theme from '../theme';
const stylesDropdown = StyleSheet.create({
  containerDropwDown: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownStyles: {
    borderColor: theme.colors.COLOR_BORDER_INPUT,
    backgroundColor: 'transparent',
    borderWidth: 3,
  },
});

export default stylesDropdown;
