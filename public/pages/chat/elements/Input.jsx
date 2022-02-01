import React from 'react'
import { View, TextInput } from 'react-native'

import Smile from '../svg/Smile'
import { styles } from '../style/input'
import { COLORS } from './../../../templates/styles/colors';

function Input() {
    return (
        <View style={styles.footer}>
            <View style={styles.textInput}>
                <Smile height={20} width={20} color={COLORS.neon} />
                <TextInput
                    style={styles.input}
                    value=''
                    placeholder='Message'
                    placeholderTextColor={COLORS.disabledText}
                    keyboardAppearance='dark'
                />
            </View>
        </View>
    )
}

export default Input
