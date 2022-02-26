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
        <View style={{
            width: width >= 720 ? '40%' : '100%',
            marginLeft: width >= 720 ? '30%' : 0,
            borderColor: 'rgba(255, 255, 255, 0.05)',
            borderWidth: width >= 720 ? 1 : 0,
            borderTopWidth: 0,
            borderBottomWidth: 0
        }}>
            <View style={Platform.OS == 'web' ? { height: '100vh' } : { flex: 1 }}>
                <Header />
                <ScrollView ref={scrollViewRef}>
                    <Messages />
                </ScrollView>

                {props.input && props.input()}
            </View>
        </View>
    )
}

export default Chat
