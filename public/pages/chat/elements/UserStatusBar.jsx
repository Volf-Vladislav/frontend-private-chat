import React from 'react'
import { View, Text } from 'react-native'

import Pencil from '../svg/Pencil'

import { styles } from '../style/userStatusBar'

import { COLORS } from './../../../templates/styles/colors'

function UserStatusBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Anonym</Text>

            <OnlineStatus />
        </View>
    )
}

function OnlineStatus() {
    return (
        <View style={styles.online}>
            <Text style={styles.onlineText}>online</Text>
        </View>
    )
}

function LeftStatus() {
    return (
        <Text style={styles.leftText}>покинул чат</Text>
    )
}

function PrintMessage() {
    return (
        <View style={styles.printMessage}>
            <Text style={{ color: COLORS.neonLight }}>печатает </Text>
            <View style={styles.pencil}>
                <Pencil height={8} width={8} color={COLORS.neonLight} />
            </View>
        </View>
    )
}



export default UserStatusBar
