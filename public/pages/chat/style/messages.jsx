import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/styles/colors';

export const styles = StyleSheet.create({
    leftMessage: {
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'flex-start',
    },
    rightMessage: {
        marginRight: 10,
        marginTop: 10,
        alignItems: 'flex-end',
    },
    leftMessageText: {
        color: COLORS.defaultText,
        backgroundColor: COLORS.UILayer,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        maxWidth: '60%',
    },
    rightMessageText: {
        color: COLORS.defaultText,
        backgroundColor: COLORS.neon,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        maxWidth: '60%'
    },
})