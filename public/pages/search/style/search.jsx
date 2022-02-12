import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    loadContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        color: 'rgba(255, 255, 255, 0.74)',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,

    },
    nextPageButton: {
        width: Dimensions.get('window').width - 10,
        position: 'absolute',
        bottom: 20,
        left: 5
    }
})