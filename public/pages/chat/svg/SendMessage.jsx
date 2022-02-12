import React from 'react'
import Svg, { Path } from "react-native-svg"

function SendMessage(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}
            fill={props.color}

            xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 512 512'
        >
            <Path d="m16 464 480-208L16 48v160l320 48-320 48Z" />
        </Svg>
    )
}

export default SendMessage
