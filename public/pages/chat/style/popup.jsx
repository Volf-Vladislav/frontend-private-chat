import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.UILayer,
        position: 'absolute',
        zIndex: 999,
        top: 56,
        right: 10,
        borderRadius: 10,
        flexDirection: 'column',
        padding: 20,
        paddingTop: 30,
        paddingBottom: 10,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1
    },
    menuItem: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: COLORS.defaultText,
        fontSize: 16
    }
})