import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { styles } from '../style/popup'
import { COLORS } from './../../../templates/styles/colors'
import { pages } from './../../../navigation/pageList'
import { serverURL } from './../../../api/serverURL'

function MenuItem(props) {
    const [report, setReport] = React.useState(true)

    const penPalID = useSelector(state => state.penPalID)
    const messages = useSelector(state => state.messages)

    const dispatch = useDispatch()

    async function click(action) {
        if (action == 'left') {
            dispatch({ type: 'SELECTPAGE', payload: pages.filter })
        }
        else if (action == 'next') {
            dispatch({ type: 'SELECTPAGE', payload: pages.filter })
            setTimeout(() => {
                dispatch({ type: 'SELECTPAGE', payload: pages.search })
            }, 0)
        }

        else if (action == 'report') {
            if(report) {
                const url = serverURL + '/api/report/postreport'
                const data = []
                messages.forEach(element => {
                    if(element.position == 'left') {
                        data.push(element.message)
                    }
                })
    
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({userIP: penPalID, messages: data})
                    })
                }
                catch (err) {
                    console.log(err)
                }
    
                dispatch({ type: 'CHANGEPENPALSTATUS', payload: 'report' })
                setReport(false)
            }
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