import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, TextInput, TouchableHighlight } from 'react-native'

import Chat from './../chat/Chat'
import Serach from './../search/Serach'
import { message } from './elements/message'

import Smile from '../chat/svg/Smile'
import SendMessage from '../chat/svg/SendMessage'

import { webSocketURL } from '../../api/webSocketURL'

import { COLORS } from './../../templates/styles/colors'
import { styles } from './../chat/style/input'

function ChatController() {
    const socket = useRef()
    const dispatch = useDispatch()

    const [status, setStatus] = useState('seeking')

    const userGender = useSelector(state => state.userGender)
    const penPalgender = useSelector(state => state.penPalgender)
    const userID = useSelector(state => state.userID)


    useEffect(() => {
        socket.current = new WebSocket(webSocketURL)

        socket.current.onopen = () => {
            socket.current.send(message({
                gender: userGender,
                seekingGender: penPalgender,
                status: status,
                id: userID
            }, 'status'))
        }

        socket.current.onmessage = (event) => {
            event = JSON.parse(event.data)
            if (event.event == 'status') {
                setStatus(event.data)
                dispatch({ type: 'CHANGEPENPALSTATUS', payload: event.data })
            }
            else if (event.event == 'message') {
                dispatch({
                    type: 'CHANGEMESSAGES', payload: {
                        position: 'left',
                        message: event.data
                    }
                })
            }
        }

        return () => {
            dispatch({ type: 'REMOVEMESSAGES' })
            closeConnection()
        }
    }, [])

    function closeConnection() {
        const readyState = socket.current.readyState

        if (readyState == 3) {
            console.log('Соединение уже закрыто')
        }
        else {
            socket.current.close()
        }
    }

    if (status == 'disconnected') {
        closeConnection()
    }

    if (status == 'seeking') {
        return <Serach />
    }
    else {
        const InputElement = () => (<Input />)
        return <Chat input={InputElement} />
    }

    function Input() {
        const [value, setValue] = useState('')

        function click() {
            const readyState = socket.current.readyState

            if (readyState == 3) {
                console.log('Соединение уже закрыто')
            }
            else {
                socket.current.send(message(value, 'message'))

                dispatch({
                    type: 'CHANGEMESSAGES', payload: {
                        position: 'right',
                        message: value
                    }
                })
            }
            setValue('')
        }
        return (
            <View style={styles.footer}>
                <View style={styles.textInput}>
                    <Smile height={20} width={20} color={COLORS.neonLight} />

                    <TouchableHighlight
                        onPress={() => {
                            click(value)
                        }}
                        underlayColor={COLORS.UILayer}
                        style={styles.sendButton}>

                        <SendMessage size={24} color={COLORS.neonLight} />
                    </TouchableHighlight>

                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={setValue}
                        placeholder='Message'
                        placeholderTextColor={COLORS.disabledText}
                        keyboardAppearance='dark'
                        onSubmitEditing={() => {
                            click(value)
                        }}
                    />
                </View>
            </View>
        )
    }
}

export default ChatController
