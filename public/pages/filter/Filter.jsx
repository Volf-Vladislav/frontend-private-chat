import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { COLORS } from './../../templates/styles/colors';

const Filter = () => {
    return (
        <View style={{ height: '100%', backgroundColor: COLORS.UILayer, justifyContent: 'center'}}>
            <View style={styles.content}>
                <Text style={styles.text}>Ваш пол</Text>

                <View style={styles.buttons}>
                    <View style={styles.button2}>
                        <Text style={styles.buttonText}>Мужской</Text>
                    </View>

                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Женский</Text>
                    </View>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>Пол собеседника</Text>

                <View style={styles.buttons}>
                    <View style={styles.button2}>
                        <Text style={styles.buttonText}>Мужской</Text>
                    </View>

                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Женский</Text>
                    </View>
                </View>
            </View>

            <View style={styles.button3}>
                <Text style={styles.buttonText}>Перейти в чат</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 160,
        padding: 30,
        //backgroundColor: COLORS.UILayer
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        backgroundColor: '#00000069',
        height: 45,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        textTransform: 'uppercase'
    },
    text: {
        color: COLORS.disabledText,
        fontSize: 15,
        paddingLeft: 5
    },
    buttonText: {
        color: COLORS.defaultText,
        fontSize: 12
    },
    button2: {
        backgroundColor: '#05050533',
        height: 45,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        textTransform: 'uppercase'
    },
    button3: {
        width: '60%',
        height: 50,
        backgroundColor: '#05050533',
        marginLeft: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        textTransform: 'uppercase'
    }

})

export default Filter
