import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

export const styles = StyleSheet.create({
    content: {
        height: '100%',
        backgroundColor: COLORS.background,
        padding: 10,
        paddingTop: 40
    },
    nextPageButton: {
        width: Dimensions.get('window').width - 20,
        position: 'absolute',
        bottom: 20
    }
})