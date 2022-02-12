import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { View, Text } from 'react-native'

import Loader from './svg/Loader'

import { COLORS } from './../../templates/styles/colors'
import { pages } from './../../navigation/pageList'

import BackButton from './elements/BackButton'
import { styles } from './style/search'

function Serach() {
    const dispatch = useDispatch()
    const penPalStatus = useSelector(state => state.penPalStatus)

    const [seconds, setSeconds] = useState(0)
    const [minute, setMinute] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setSeconds(seconds + 1)

            if (penPalStatus == 'connected') setPage(pages.chat)
        }, 1000)

        return () => clearTimeout(timer)
    })

    function setPage(page) {
        dispatch({ type: 'SELECTPAGE', payload: page })
    }

    return (
        <View style={styles.container}>
            <View style={styles.loadContainer}>
                <Loader size={80} color={COLORS.neonLight} />
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
        if (minute < 10)  return `0${minute}`
        else return + minute
    }
}



export default Serach
