import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/styles/colors';

export const styles = StyleSheet.create({
    footer: {
        height: 58,
        padding: 4,
    },
    textInput: {
        backgroundColor: COLORS.UILayer,
        height: 50,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        marginLeft: 10,
        width: '80%',
        fontSize: 16
    },
})