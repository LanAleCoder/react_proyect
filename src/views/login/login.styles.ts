import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const style = StyleSheet.create({
  mainLogin: {
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
  },
  tittle: {
    fontSize: theme.fonts.TITLES,
    fontFamily: 'Koulen-Regular',
    color: '#FFFF',
  },
  containerText: {alignItems: 'center'},
  infoContainer: {
    alignItems: 'center',
    width: 200,
  },
  textinfoContainer: {
    fontFamily: 'Poppins-Light',
    fontSize: theme.fonts.TINY_TEXT,
    textAlign: 'center',
    color: theme.colors.TEXT_COLOR,
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
  },
});

export default style;
