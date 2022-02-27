import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    loadContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 53
    },
    title: {
        color: COLORS.neonLight,
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,

    },
    nextPageButton: {
        width: width >= 720 ? '20%' : width - 20,
        position: 'absolute',
        bottom: width >= 720 ? 60 : 20,
        left: width >= 720 ? '40%' : 10,
    }
})