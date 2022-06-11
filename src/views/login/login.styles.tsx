import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const style = StyleSheet.create({
  tittle: {
    fontSize: theme.fonts.TITLES,
    fontFamily: 'Koulen-Regular',
    color: '#FFFF',
  },
  infoContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 200,
  },
  textinfoContainer: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    textAlign: 'center',
  },
  containerRegister: {alignItems: 'center', marginTop: 100, flex: 1},

  buttonContainer: {paddingTop: 20, marginBottom: 60},
  buttonsSignUpContainer: {
    backgroundColor: '#6D6D7D',
    width: '100%',
    height: '50%',
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
    backgroundColor: '#C2C2C5',
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

export default style;