import {StyleSheet} from 'react-native';
import theme from '../../components/theme';

const stylesRide = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BLUE_DARK_BACKGROUND,
    alignItems: 'center',
  },
  containerText: {
    width: 200,
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  containerText2: {
    width: 300,
    flex: 11,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'column',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Koulen-Regular',
    fontSize: theme.fonts.SUBTITLES,
    color: 'white',
  },
  textInfo: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    fontSize: theme.fonts.TINY_TEXT,
    color: 'white',
  },
  googleInput: {
    width: '80%',
  },
});

export default stylesRide;
