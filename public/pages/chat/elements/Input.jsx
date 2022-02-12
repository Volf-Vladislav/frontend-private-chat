import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, TextInput, TouchableHighlight } from 'react-native'

import Smile from '../svg/Smile'
import SendMessage from './../svg/SendMessage'

import { styles } from '../style/input'
import { COLORS } from './../../../templates/styles/colors'
import { message } from './../../chatController/elements/message'


function Input() {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('')
    const userID = useSelector(state => state.userID)
    const socket = React.useRef()

    React.useEffect(() => {
        socket.current = new WebSocket('ws://privatechatwss.herokuapp.com')

        return () => {
            socket.current.close()
        }
    })

    function sendMessage() {
        socket.current.send(JSON.stringify(message(value, userID, 'message')))
        setValue('')
    }

    return (
        <View style={styles.footer}>
            <View style={styles.textInput}>
                <Smile height={20} width={20} color={COLORS.neonLight} />

                <TouchableHighlight
                    onPress={() => sendMessage()}
                    underlayColor={COLORS.UILayer}
                    style={styles.sendButton}>

                    <SendMessage size={24} color={COLORS.neonLight} />
                </TouchableHighlight>

                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={(value) => {
                        setValue(value)
                        dispatch(({ type: 'CHANGEPENPALSTATUS', payload: 'print' }))
                    }}
                    placeholder='Message'
                    placeholderTextColor={COLORS.disabledText}
                    keyboardAppearance='dark'
                    onSubmitEditing={() => sendMessage()}
                />
            </View>
        </View>
    )
}

export default Input
