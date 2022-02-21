import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { useDispatch } from 'react-redux'

import { styles } from '../style/popup'
import { COLORS } from './../../../templates/styles/colors'
import { pages } from './../../../navigation/pageList'

function MenuItem(props) {

    const dispatch = useDispatch()

    function click(action) {
        if(action == 'left') {
            dispatch({ type: 'SELECTPAGE', payload: pages.filter })
        }
        else if(action == 'next') {
            dispatch({ type: 'SELECTPAGE', payload: pages.filter })
            setTimeout(() => {
                dispatch({ type: 'SELECTPAGE', payload: pages.search })
            }, 0)
        }
    }

    return (
        <TouchableHighlight
            onPress={() => { click(props.action) }}
            underlayColor={COLORS.UILayer}>

            <View style={styles.menuItem}>
                <View style={{ marginRight: props.margin }}>
                    {props.icon && props.icon()}
                </View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default MenuItem