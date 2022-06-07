import {StyleSheet} from 'react-native';
import theme from '../theme';

const buttonStyle = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: theme.fonts.BTN_REGULAR_TEXT,
    fontFamily: 'Poppins-Regular',
  },
  touchableOp: {
    height: 40,
    width: 250,
    backgroundColor: theme.colors.RED_CARAMEL_BTN,
    borderRadius: 50,
  },
});

export default buttonStyle;
