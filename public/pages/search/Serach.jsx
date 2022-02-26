import React, { useEffect, useState } from 'react'

import { View, Text, Image } from 'react-native'

import BackButton from './elements/BackButton'
import { styles } from './style/search'

function Serach() {
    const [seconds, setSeconds] = useState(0)
    const [minute, setMinute] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setSeconds(seconds + 1)
        }, 1000)

        return () => clearTimeout(timer)
    })

    return (
        <View style={styles.container}>
            <View style={styles.loadContainer}>
                <Image
                    style={{ width: 80, height: 80, transform: [{ rotate: '90deg' }] }}
                    source={require('./svg/loader.gif')} />
                <Text style={styles.title}>{getTime()}</Text>
            </View>
            <BackButton />
        </View>
    )

    function getTime() {
        if (seconds == 60) {
            setSeconds(0)
            setMinute(minute + 1)
        }
        else if (seconds < 10) return `${getMinutes()}:0${seconds}`
        else return `${getMinutes()}:${seconds}`
    }

    function getMinutes() {
        if (minute < 10) return `0${minute}`
        else return + minute
    }
}



export default Serach
