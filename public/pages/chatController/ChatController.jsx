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
    const penPalID = useSelector(state => state.penPalID)
    const penPalStatus = useSelector(state => state.penPalStatus)


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
                console.log(event.data)
                dispatch({ type: 'CHANGEPENPALSTATUS', payload: event.data })

                if (event.id) {
                    dispatch({ type: 'SETID', payload: event.id })
                }

            }
            else if (event.event == 'message') {
                dispatch({
                    type: 'CHANGEMESSAGES', payload: {
                        position: 'left',
                        id: penPalID,
                        message: event.data
                    }
                })
            }
        }

        socket.current.onerror = (err) => {
            closeConnection()
            console.log(err)
        }

        socket.current.onclose = () => {
            closeConnection()
        }

        return () => {
            dispatch({ type: 'REMOVEMESSAGES' })
            closeConnection()
        }
    }, [])

    function closeConnection() {
        const readyState = socket.current.readyState
        dispatch({ type: 'CHANGEPENPALSTATUS', payload: 'disconnected' })

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
        const [emoji, setEmoji] = useState(false)
        const [value, setValue] = useState('')

        function click() {
            if (value != '') {
                const readyState = socket.current.readyState

                if (readyState == 3) {
                    console.log('Соединение уже закрыто')
                }
                else {
                    dispatch({
                        type: 'CHANGEMESSAGES', payload: {
                            position: 'right',
                            id: userID,
                            message: value
                        }
                    })
                    //socket.current.send(message({ status: 'endPrint' }, 'status'))
                    const msg = value
                    setValue('')
                    socket.current.send(message(msg, 'message'))
                }
            }
        }
        function open() {
            setEmoji(!emoji)
        }


        return (
            <>
                <View style={styles.footer}>

                    <View style={styles.textInput}>
                        <TouchableHighlight
                            onPress={() => {
                                open()
                            }}
                            underlayColor={COLORS.UILayer}>

                            <Smile height={20} width={20} color={COLORS.neonLight} />
                        </TouchableHighlight>


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
                            onChangeText={(text) => {
                                setValue(text)
                                //socket.current.send(message({ status: 'print' }, 'status'))
                            }}

                            placeholder='Message'
                            placeholderTextColor={COLORS.disabledText}
                            keyboardAppearance='dark'
                            onSubmitEditing={() => {
                                click(value)
                            }}
                        />
                    </View>
                </View>
            </>
        )
    }
}

export default ChatController
