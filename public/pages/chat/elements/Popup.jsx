import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

import EndChat from './../svg/EndChat'
import NextArrow from './../svg/NextArrow'
import Report from './../svg/Report'

import { styles } from '../style/popup'


function Popup() {

    const EndChatButton = () => (<EndChat height={19} width={19} color={COLORS.neonLight} />)
    const NextArrowButton = () => (<NextArrow height={21} width={21} color={COLORS.neonLight} />)
    const ReportButton = () => (<Report width={25} height={25} color={COLORS.neonLight} />)

    return (
        <View style={styles.container}>
            <MenuItem margin={21} icon={EndChatButton} text='Закончить беседу' />
            <MenuItem margin={19} icon={NextArrowButton} text='Следующая беседа' />
            <MenuItem margin={15} icon={ReportButton} text='Пожаловаться' />
        </View>
    )
}

function MenuItem(props) {
    return (
        <View style={styles.menuItem}>
            <View style={{ marginRight: props.margin }}>
                {props.icon && props.icon()}
            </View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

export default Popup
