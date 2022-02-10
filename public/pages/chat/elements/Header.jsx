import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { useDispatch } from 'react-redux'

import EndChat from './../svg/EndChat'
import Popup from './Popup'
import UserStatusBar from './UserStatusBar'

import { COLORS } from './../../../templates/styles/colors'
import { styles } from '../style/header'

function Chatheader() {
    const dispatch = useDispatch()

    const [isPress, setIsPress] = React.useState(false)

    function showModal() {
        setIsPress(!isPress)
    }

    function disconect(pageNumber) {
        dispatch({ type: 'SELECTPAGE', payload: pageNumber })
    }

    return (
        <>
            <View style={styles.header}>

                <TouchableHighlight
                    onPress={() => disconect(1)}
                    underlayColor={COLORS.UILayer}>
                    <EndChat height={20} width={20} color={COLORS.red} />
                </TouchableHighlight>

                <UserStatusBar />

                <TouchableHighlight
                    onPress={() => showModal()}
                    underlayColor={COLORS.UILayer}>

                    <View style={isPress ? styles.menuDotsPressed : styles.menuDots}>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                    </View>
                </TouchableHighlight>
            </View>

            {
                isPress ? <Popup /> : <></>
            }
        </>
    )
}

export default Chatheader
