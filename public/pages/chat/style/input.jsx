import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

export const styles = StyleSheet.create({
    footer: {
 
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
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.84)',
        height: 30,
        lineHeight: 30
    },
    sendButton: {
        position: 'absolute',
        right: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})