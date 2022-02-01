import React from 'react'
import { View } from 'react-native'
import { styles } from '../style/header'
import EndChat from './../svg/EndChat';

function Chatheader() {
    return (
        <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
                <EndChat color={'#ff6c60'}/>
            </View>

            <View style={styles.menuDots}>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
            </View>
        </View>
    )
}

export default Chatheader
