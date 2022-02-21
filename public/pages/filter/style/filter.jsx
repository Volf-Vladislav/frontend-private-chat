import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    content: {
        height: '100%',
        backgroundColor: COLORS.background,
        padding: 5,
        paddingTop: 40,
        width:  width>= 720 ? '50%' : '100%',
        marginLeft: width >= 720 ? '25%' : 0
    },
    nextPageButton: {
        width: width >= 720 ? '100%' : width - 10,
        position: 'absolute',
        bottom: 20,
        left: 5
    }
})