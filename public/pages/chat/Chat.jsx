import React from 'react'
import { View, ScrollView } from 'react-native'

import Header from './elements/Header'
import Messages from './elements/Messages'

function Chat(props) {
    return (
        <View style={{ flex: 1, }}>
            <Header />

            <ScrollView>
                <Messages />
            </ScrollView>

            {props.input && props.input()}
        </View>
    )
}

export default Chat
