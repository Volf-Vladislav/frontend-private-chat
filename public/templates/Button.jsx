import React from 'react'
import { View, Text } from 'react-native'
import { buttonStyle } from './styles/butonStyle'

function Button(props) {
    return (
        <View style={buttonStyle(props.color)}>
            <Text style={{
                color: props.fontColor,
                fontSize: props.fontSize,
                textTransform: 'uppercase',
                fontWeight: '400'
            }}>{props.text}</Text>
        </View>
    )
}

export default Button
