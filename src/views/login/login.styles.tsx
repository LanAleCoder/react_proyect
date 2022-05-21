import {StyleSheet} from 'react-native';
import Theme from '../../components/theme'

const styles = StyleSheet.create({
    container:{
        margin: 30,
        justifyContent: 'space-between'
    },

    titleContainer:{
     
 },
 
    title: {
     color: Theme.colors.TEXT_COLOR,
     fontSize: Theme.fonts.TITLES,
 },
    inputsText:{
        paddingHorizontal: 22,
        fontSize: Theme.fonts.TEXTO_PEQUEÑO,
        color: Theme.colors.TEXT_COLOR,
    }

    
});

export default styles;