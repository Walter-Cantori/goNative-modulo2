import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
        paddingHorizontal: 25,
        borderRadius: metrics.baseRadius,
        backgroundColor: colors.filterGrey
    },

    txt: {
        color: colors.filterTxt,
        fontSize: metrics.inputTxtSize,
    },

    activeTxt: {
        ...this.txt,
        fontWeight: 'bold',
    },
    inactiveTxt: {
        ...this.txt,
        opacity: 0.5,
    }
})

export default styles;