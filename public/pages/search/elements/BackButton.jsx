import React from 'react'
import { TouchableHighlight } from 'react-native'
import { useDispatch } from 'react-redux'

import Button from './../../../templates/Button'
import { pages } from './../../../navigation/pageList'

import { COLORS } from './../../../templates/styles/colors'
import { styles } from './../style/search'

function BackButton() {
    const dispatch = useDispatch()

    function setPage(page) {
        dispatch({ type: 'SELECTPAGE', payload: page })
    }

    return (
        <TouchableHighlight
            onPress={() => { setPage(pages.filter) }}
            underlayColor={COLORS.UILayer}
            style={styles.nextPageButton}>

            <Button
                color={COLORS.UILayer}
                text='Отменить'
                fontSize={13}
                fontColor='rgba(255, 255, 255, 0.84)' />
        </TouchableHighlight>
    )
}

export default BackButton
