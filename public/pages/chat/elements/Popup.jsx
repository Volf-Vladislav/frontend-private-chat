import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { COLORS } from './../../../templates/styles/colors'

import Report from './../svg/Report'
import NextArrow from './../svg/NextArrow'
import EndChat from './../svg/EndChat';


function Popup() {
    return (
        <View style={styles.container}>
            <View style={styles.menuItem}>
                <View style={{ marginRight: 22 }}>
                    <EndChat color='#805dab'/>
                </View>
                <Text style={styles.text}>Закончить беседу</Text>
            </View>

            <View style={styles.menuItem}>
                <View style={{ marginRight: 20 }}>
                    <NextArrow />
                </View>
                <Text style={styles.text}>Следующая беседа</Text>
            </View>

            <View style={styles.menuItem}>
                <View style={{ marginRight: 15 }}>
                    <Report width={25} height={25} color={COLORS.defaultText} />
                </View>
                <Text style={styles.text}>Пожаловаться</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.UILayer,
        position: 'absolute',
        zIndex: 999,
        top: 56,
        right: 10,
        borderRadius: 10,
        flexDirection: 'column',
        padding: 20,
        paddingBottom: 10
    },
    menuItem: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: COLORS.defaultText,
        fontSize: 16
    }
})

export default Popup
