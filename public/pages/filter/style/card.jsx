import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        margin: 10,
        marginBottom: 20,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.65)',
        fontSize: 11,
        textTransform: 'uppercase',
    },
    card: {
        backgroundColor: COLORS.UILayer,
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
        paddingBottom: 50,
        borderColor: 'black',
        borderWidth: 1
    }
})