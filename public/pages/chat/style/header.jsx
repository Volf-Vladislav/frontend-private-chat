import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

export const styles = StyleSheet.create({
    header: {
        height: 57,
        backgroundColor: COLORS.UILayer,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 14,
        borderBottomColor: 'rgba(0, 0, 0, 0.4)',
        borderBottomWidth: 1
    },
    menuDots: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 36,
        width: 36,
        alignItems: 'center',
        backgroundColor: COLORS.UILayer,
        borderRadius: 50,
        padding: 10
    },
    menuDotsPressed: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 36,
        width: 36,
        alignItems: 'center',
        backgroundColor: COLORS.UIHover,
        borderRadius: 50,
        padding: 10
    },
    dot: {
        height: 4,
        width: 4,
        borderRadius: 50,
        backgroundColor: COLORS.neonLight,
        margin: 1
    }
})