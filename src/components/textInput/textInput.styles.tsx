import {StyleSheet} from 'react-native';
import Theme from '../theme'


const style = StyleSheet.create({
    textInput: {
        borderWidth: 3,
        borderColor: Theme.colors.COLOR_BORDER_INPUT,
        paddingHorizontal: 20,
        margin: 4,
        borderRadius: 100,
        flexGrow: 1,
        color: Theme.colors.TEXT_COLOR,
    }

});

export default style;