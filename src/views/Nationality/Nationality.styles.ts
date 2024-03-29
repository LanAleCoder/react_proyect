import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const styleNationality = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
    alignItems: 'center',
  },
  containerText: {
    alignItems: 'center',
  },
  textContainer: {justifyContent: 'center', width: 250, marginBottom: 8},
  title: {
    textAlign: 'center',
    fontFamily: 'Koulen-Regular',
    fontSize: theme.fonts.HEADING,
    color: theme.colors.TEXT_COLOR,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: theme.fonts.TINY_TEXT,
    color: theme.colors.TEXT_COLOR,
  },
  dropDownStyles: {
    borderColor: theme.colors.COLOR_BORDER_INPUT,
    backgroundColor: 'transparent',
    borderWidth: 3,
  },
  containerDropwDown: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styleNationality;
