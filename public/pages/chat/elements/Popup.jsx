import React from 'react'
import { View } from 'react-native'

import EndChat from './../svg/EndChat'
import NextArrow from './../svg/NextArrow'
import Report from './../svg/Report'
import MenuItem from './MenuItem'

import { styles } from '../style/popup'
import { COLORS } from './../../../templates/styles/colors'


function Popup() {
    const EndChatButton = () => (<EndChat height={19} width={19} color={COLORS.neonLight} />)
    const NextArrowButton = () => (<NextArrow height={21} width={21} color={COLORS.neonLight} />)
    const ReportButton = () => (<Report width={25} height={25} color={COLORS.neonLight} />)

    return (
        <View style={styles.container}>
            <MenuItem margin={21} icon={EndChatButton} text='Закончить беседу' action='left'/>
            <MenuItem margin={19} icon={NextArrowButton} text='Следующая беседа' action='next' />
            <MenuItem margin={15} icon={ReportButton} text='Отправить жалобу' action='report' />
        </View>
    )
}

export default Popup
