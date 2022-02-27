import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { styles } from '../style/messages'

function Messages() {
    const messages = useSelector(state => state.messages)
    
    if (messages != null) {
        return (
            messages.map(element => {
                if (element.message == null || element.message == '') {
                    return <View key={Math.random()}></View>
                }
                else if (element.position == 'right') {
                    return (
                        <View style={styles.rightMessage} key={Math.random()}>
                            <Text style={styles.rightMessageText}>{element.message}</Text>
                        </View>
                    )
                }
                else {
                    return (
                        <View style={styles.leftMessage} key={Math.random()}>
                            <Text style={styles.leftMessageText}>{element.message}</Text>
                        </View>
                    )
                }
            })
        )
    }
    else return <></>
}

export default Messages
