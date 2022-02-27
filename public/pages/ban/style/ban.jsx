import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    title: {
        color: COLORS.red,
        fontSize: 16,
        textTransform: 'uppercase'
    },
    title2: {
        color: COLORS.red,
        fontSize: 14,
        textTransform: 'uppercase'
    },
    text: {
        color: COLORS.neonLight,
        textTransform: 'uppercase',
        fontSize: 12
    },
    separator: {
        marginTop: 15,
        alignItems: 'center'
    }
})