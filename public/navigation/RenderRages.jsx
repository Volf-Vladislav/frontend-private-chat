import React from 'react'
import { useSelector } from 'react-redux'

import Filter from '../pages/filter/Filter'
import Serach from './../pages/search/Serach'
import Chat from '../pages/chat/Chat'

import { pages } from './pageList'


function RenderPages() {
    const page = useSelector(state => state.page)

    if (page == pages.filter) {
        return (
            <Filter />
        )
    }
    else if (page == pages.search) {
        return (
            <Serach />
        )
    }
    else if (page == pages.chat) {
        return (
            <Chat />
        )
    }
    else return (
        <></>
    )
}

export default RenderPages