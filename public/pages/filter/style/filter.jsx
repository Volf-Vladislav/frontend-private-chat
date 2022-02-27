import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    content: {
        height: '100%',
        backgroundColor: COLORS.background,
        padding: 10,
        paddingTop: 40,
        width:  width>= 720 ? '44%' : '100%',
        marginLeft: width >= 720 ? '28%' : 0,
        justifyContent: width >= 720 ? 'center' : 'flex-start',
    },
    nextPageButton: {
        width: width >= 720 ? '100%' : width - 20,
        position: width >= 720 ? 'relative' : 'absolute',
        bottom: 20,
        left:  width >= 720 ? 0 : 10,
        marginTop: width >= 720 ? 20 : 0,
    }
})