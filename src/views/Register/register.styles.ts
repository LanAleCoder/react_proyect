import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const registerStyle = StyleSheet.create({
  mainRegister: {
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default registerStyle;
