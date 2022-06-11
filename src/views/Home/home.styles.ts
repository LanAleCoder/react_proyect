import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const homeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
  },
  containerImage: {
    alignItems: 'center',
    padding: 50,
  },
  containerPhrase: {
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 300,
    alignContent: 'center',
  },
  textPhrase: {textAlign: 'center', fontFamily: 'Poppins-Regular'},
  titleHome: {
    fontSize: theme.fonts.HEADING,
    fontFamily: 'Poppins-Black',
    textAlign: 'center',
  },
  containerButton: {paddingTop: 20},
});

export default homeStyles;
