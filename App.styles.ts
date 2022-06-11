import {StyleSheet} from 'react-native';
import theme from './src/components/theme';

const stylesApp = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
  },
  textSize: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Poppins-ExtraLight',
  },
});
export default stylesApp;
