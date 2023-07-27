import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24253C',
    flex: 1,
    alignItems: 'center',
  },
  lottieAnimation: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: 190,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Kollektif',
  },
  headerStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontFamily: 'Koulen-Regular',
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    flex: 0.7,
  },
  buttonsSocialNetwork: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: 280,
    flex: 0.42,
    alignItems: 'center',
  },
  lineView: {
    width: 35,
    height: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  containerSubtitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
