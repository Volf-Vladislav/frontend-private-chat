import React from 'react'
import { View, ScrollView, Platform, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import Header from './elements/Header'
import Messages from './elements/Messages'

const width = Dimensions.get('window').width

function Chat(props) {
    const messages = useSelector(state => state.messages)
    React.useEffect(() => {
        scrollViewRef.current.scrollToEnd({ animated: true })
    }, [messages])
    const scrollViewRef = React.useRef()

    return (
        <View style={Platform.OS == 'web' ? {
            height: '100vh',
            width: '40%',
            marginLeft: '30%',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1
            } : 
            { flex: 1 }}>
            <Header />
            <ScrollView ref={scrollViewRef}>
                <Messages />
            </ScrollView>

            {props.input && props.input()}
        </View>
    )
}

export default Chat
