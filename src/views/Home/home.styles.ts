import {StyleSheet} from 'react-native';
import theme from '../../components/theme'

const homeStyles = StyleSheet.create({
  homeContainer: {flex: 1, alignItems: 'center'},
  containerImage: {
    alignItems: 'center',
    padding: 50,
  },
  containerPhrase: {
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 300,
    alignContent: 'center'
  },
  textPhrase: {textAlign: 'center', fontFamily: 'Poppins-Regular',},
  titleHome: {fontSize: 45, fontFamily: 'Poppins-Black', textAlign: 'center'},
  containerButton: {paddingTop: 20}
});

export default homeStyles;
