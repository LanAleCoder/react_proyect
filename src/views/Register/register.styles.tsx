import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const registerStyle = StyleSheet.create({
  tittle: {
    fontSize: theme.fonts.TITLES,
    fontFamily: 'Koulen-Regular',
    textAlign: 'center',
    color: '#FFFF',
  },
  containerRegister: {alignItems: 'center', marginTop: 200},
  inputStyle: {
    color: 'red',
    fontSize: theme.fonts.TEXTO_NORMAL,
    width: 250,
    height: 40,
    textAlign: 'center',
    borderRadius: 15,
    marginBottom: 20,
    fontFamily: 'Poppins-Thin'
  },
});

export default registerStyle;
