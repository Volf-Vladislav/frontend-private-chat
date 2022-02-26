import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Network from 'expo-network'

import Filter from '../pages/filter/Filter'
import ChatController from '../pages/chatController/ChatController'
import Ban from '../pages/ban/Ban'

import { pages } from './pageList'
import { checkBan } from './../api/checkBan'

function RenderPages() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        
        async function setID() {
            dispatch({ type: 'SETUSERID', payload: await Network.getIpAddressAsync() })
        }
        async function getResult() {
            dispatch({ type: 'SETBAN', payload: await checkBan() })
        }
        setID()
        getResult()

        return () => {

        }
    })

    const page = useSelector(state => state.page)
    const isBan = useSelector(state => state.isBan)

    if (page == pages.filter && isBan == 'false') {
        return (
            <Filter />
        )
    }
    else if (page == pages.search && isBan == 'false') {
        return (
            <ChatController />
        )
    }
    else return (
        <Ban />
    )
}

export default RenderPages