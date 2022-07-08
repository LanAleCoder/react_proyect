import {StyleSheet} from 'react-native';
import theme from '../theme';

const style = StyleSheet.create({
  inputStyle: {
    color: '#ffffff',
    fontSize: theme.fonts.REGULAR_TEXT,
    width: 250,
    height: 50,
    borderRadius: 15,
    fontFamily: 'Poppins-Thin',
    borderColor: theme.colors.COLOR_BORDER_INPUT,
    borderWidth: 3,
    paddingHorizontal: 20,
  },
  inputContainer: {alignItems: 'center', margin: 13},
});

export default style;
