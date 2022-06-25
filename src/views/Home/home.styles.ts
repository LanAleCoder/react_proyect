import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const homeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
  },
  containerImage: {
    alignItems: 'center',
  },
  containerPhrase: {
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 300,
    alignContent: 'center',
  },
  textPhrase: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: theme.colors.TEXT_COLOR,
    fontSize: theme.fonts.REGULAR_TEXT
  },
  titleHome: {
    fontSize: theme.fonts.HEADING,
    fontFamily: 'Poppins-Black',
    textAlign: 'center',
    color: theme.colors.TEXT_COLOR,
  },
});

export default homeStyles;
