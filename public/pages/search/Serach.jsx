import React from 'react'
import { useDispatch } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'

function Serach() {
    const dispatch = useDispatch()

    setTimeout(() => dispatch({ type: 'SELECTPAGE', payload: 3 }), 3000)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Поиск</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    title: {
        color: 'white',
        fontSize: 18
    }
})

export default Serach
