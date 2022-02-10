import React from 'react'
import { View, ScrollView } from 'react-native'

import Header from './elements/Header'
import Messages from './elements/Messages'
import Input from './elements/Input'

function Chat() {
    return (
        <View style={{ flex: 1, }}>
            <Header />

            <ScrollView>
                <Messages />
                <Messages />
            </ScrollView>

            <Input />
        </View>
    )
}

export default Chat
