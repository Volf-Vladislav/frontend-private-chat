import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

export const styles = StyleSheet.create({
    content: {
        height: '100%',
        backgroundColor: COLORS.background,
        padding: 5,
        paddingTop: 40
    },
    nextPageButton: {
        width: Dimensions.get('window').width - 10,
        position: 'absolute',
        bottom: 20,
        left: 5
    }
})