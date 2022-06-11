import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const registerStyle = StyleSheet.create({
  tittle: {
    fontSize: theme.fonts.TITLES,
    fontFamily: 'Koulen-Regular',
    color: '#FFFF',
  },
  containerText: {alignItems: 'center', margin: 65},
  infoContainer: {
    alignItems: 'center',
    width: 200,
  },
  textinfoContainer: {
    fontFamily: 'Poppins-Light',
    fontSize: theme.fonts.TINY_TEXT,
    textAlign: 'center',
  },
  buttonsSignUpContainer: {
    backgroundColor: theme.colors.BG_COLOR_SOCIALNETWORKS,
    width: '100%',
    height: '100%',
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    color: theme.colors.TEXT_COLOR,
  },
  buttonsSocialNetworks: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  buttonsTouchable: {
    backgroundColor: theme.colors.BG_COLOR_BTN_NETWORKS,
    width: 80,
    height: 80,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlignVertical: 'center',
  },
  buttonSocial: {borderRadius: 100},
  imageSize: {height: 50, width: 50},
});

export default registerStyle;
