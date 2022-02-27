import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../style/card'
import Buttontemplate from './ButtonTemplate'

function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.text}</Text>
            <View style={styles.container}>
                <Buttontemplate text='Не важно' gender='any' genderType={props.genderType} />
                <Buttontemplate text='Мужской' gender='male' genderType={props.genderType} />
                <Buttontemplate text='Женский' gender='female' genderType={props.genderType} />
            </View>
        </View>
    )
}

export default Card
