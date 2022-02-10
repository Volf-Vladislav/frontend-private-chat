import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableHighlight } from 'react-native'

import { COLORS } from './../../../templates/styles/colors'
import Button from './../../../templates/Button'

function Buttontemplate(props) {
    const dispatch = useDispatch()

    const disabledColor = COLORS.button
    const activeColor = COLORS.neon

    const userGender = useSelector(state => state.userGender)
    const penPalgender = useSelector(state => state.penPalgender)

    function checkgender(gender, genderType) {
        if(genderType == 'user') {
            setUserGender(gender)
        }
        else if (genderType == 'penpal') {
            setPenPalGender(gender)
        }
    }

    function setUserGender(gender) {
        dispatch({ type: 'CHANGEUSERGENDER', payload: gender })
    }

    function setPenPalGender(gender) {
        dispatch({ type: 'CHANGEPENPALGENDER', payload: gender })
    }

    function returnColor(gender, type) {
        if(gender == userGender && type == 'user') {
            return activeColor
        }
        else if(gender == penPalgender && type == 'penpal') {
            return activeColor
        }
        else return disabledColor
    }

    return (
        <TouchableHighlight
            onPress={() => { checkgender(props.gender, props.genderType) }}
            underlayColor={COLORS.UILayer}
            style={{ width: '30%' }}>

            <Button
                color={
                    returnColor(props.gender, props.genderType)
                }
                text={props.text}
                fontSize={12}
                fontColor='rgba(255, 255, 255, 0.7)' />
        </TouchableHighlight>
    )
}

export default Buttontemplate
