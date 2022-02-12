import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Chat from './../chat/Chat'
import Serach from './../search/Serach'
import { message } from './elements/message'

function ChatController() {
    const dispatch = useDispatch()

    const userID = useSelector(state => state.userID)
    const status = useSelector(state => state.status)

    const socket = useRef()

    useEffect(() => {
        socket.current = new WebSocket('ws://privatechatwss.herokuapp.com')

        socket.current.onopen = () => {
            socket.current.send(JSON.stringify(message('connected', userID, 'status')))
        }

        socket.current.onmessage = (e) => {
            const event = JSON.parse(e.data)

            if (event.action == 'status') {
                if (event.message == 'connected') {
                    dispatch(({ type: 'CHANGESTATUS', payload: true }))
                    dispatch(({ type: 'CHANGEPENPALSTATUS', payload: 'online' }))

                    socket.current.send(JSON.stringify(message('connected', userID, 'status')))
                }
                else if (event.message == 'disconnected') {
                    dispatch(({ type: 'CHANGEPENPALSTATUS', payload: 'disconnected' }))
                }
            }
            else if (event.action == 'message') {
                dispatch(({ type: 'CHANGEMESSAGES', payload: { id: event.id, message: event.message } }))
            }
        }

        socket.current.onerror = () => {
            closeConnection()
        }

        return () => {
            closeConnection()
        }

        function closeConnection() {
            dispatch(({ type: 'REMOVEMESSAGES' }))
            dispatch(({ type: 'CHANGEMESSAGE', payload: '' }))

            dispatch(({ type: 'CHANGESTATUS', payload: false }))
            socket.current.send(JSON.stringify(message('disconnected', userID, 'status')))
            socket.current.close()
        }
    }, [])

    if (status) {
        return <Chat />
    }
    else return <Serach />
}

export default ChatController
