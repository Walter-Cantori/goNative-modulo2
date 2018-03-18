import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       height: 90,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: colors.white,
       padding: 20,
       paddingTop: 50,
    },

    textInput:{
        backgroundColor: colors.darkGrey,
        fontSize: metrics.inputTxtSize,
        height: 35,
        width: '90%',
        borderRadius: metrics.baseRadius,
        padding: 10,
        marginRight: '5%',
        color: 'black',
    },
    textInputError:{
        backgroundColor: colors.darkGrey,
        fontSize: metrics.inputTxtSize,
        height: 35,
        width: '90%',
        borderRadius: metrics.baseRadius,
        borderColor: "red",
        borderWidth: 1,
        padding: 10,
        marginRight: '5%',
        color: 'black',
    },

});

export default styles;
