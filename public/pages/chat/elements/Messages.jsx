import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../style/messages'

function Messages() {
    return (
        <View>
            <View style={styles.leftMessage}>
                <Text style={styles.leftMessageText}>1000-7?</Text>
            </View>

            <View style={styles.leftMessage}>
                <Text style={styles.leftMessageText}>???????????????????????????????????</Text>
            </View>

            <View style={styles.rightMessage}>
                <Text style={styles.rightMessageText}>ZXC 993</Text>
            </View>
        </View>
    )
}

export default Messages
