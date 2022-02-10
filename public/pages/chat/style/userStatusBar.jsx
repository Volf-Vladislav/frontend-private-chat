import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.77)',
        textTransform: 'uppercase',
        fontWeight: 500
    },
    online: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    onlineText: {
        color: COLORS.neonLight
    },
    leftText: {
        color: COLORS.red,
        fontSize: 14,
        fontWeight: 500,
    },
    printMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pencil: {
        paddingTop: 4,
        marginLeft: 0
    }
})