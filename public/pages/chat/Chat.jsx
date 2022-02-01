import React from 'react'
import { View, ScrollView } from 'react-native'

import Header from './elements/Header'
import Messages from './elements/Messages'
import Input from './elements/Input'
import Popup from './elements/Popup';

function Chat() {
    return (
        <View style={{ flex: 1, }}>
            <Header />
            <Popup />

            <ScrollView>
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
            </ScrollView>

            <Input />
        </View>
    )
}

export default Chat
