import { Stylesheet, StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
    box: {
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: metrics.baseRadius,  
    },

    boxDesc: {
        flex: 1,
    },

    boxAvatar: {
        marginRight: 10,
        width: 45,
        height: 45,
        borderRadius: 25,
    },

    boxName: {
        color: colors.black,
        fontSize: metrics.titleTxtSize,
    },

    boxOrg: { 
        color: colors.lightGrey,
        fontSize: metrics.descTxtSize,
    },

    boxIcon: {
        alignSelf: "center",
        color: colors.lightGrey,
    }
});

export default styles;