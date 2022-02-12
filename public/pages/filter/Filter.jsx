import React from 'react'
import { useDispatch } from 'react-redux'
import { View, TouchableHighlight } from 'react-native'

import Button from './../../templates/Button'
import Card from './elements/Card'

import { COLORS } from './../../templates/styles/colors'
import { styles } from './style/filter'

import { pages } from './../../navigation/pageList'

function Filter() {
    const dispatch = useDispatch()

    function nextPage(page) {
        dispatch({ type: 'SELECTPAGE', payload: page })
    }

    return (
        <View style={styles.content}>

            <Card text='Ваш пол' genderType='user' />
            <Card text='Пол собеседника' genderType='penpal' />

            <TouchableHighlight
                onPress={() => { nextPage(pages.search) }}
                underlayColor={COLORS.UILayer}
                style={styles.nextPageButton}>

                <Button
                    color={COLORS.UILayer}
                    text='Найти собеседника'
                    fontSize={12}
                    fontColor='rgba(255, 255, 255, 0.84)' />
            </TouchableHighlight>
        </View>
    )
}

export default Filter
