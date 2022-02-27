import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Pencil(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            fill={props.color}

            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 303.9 303.9"

            style={{
                enableBackground: "new 0 0 303.9 303.9",
            }}
            xmlSpace="preserve"
        >
            <Path d="M1.562 276.063a20.073 20.073 0 0 0 26.275 26.274l73.467-30.805-68.937-68.936-30.805 73.467zM298.021 55.559 248.34 5.879c-7.839-7.839-20.549-7.839-28.389 0L50.773 175.06c-.043.042-.079.089-.121.132l78.057 78.057c.043-.042.09-.078.132-.12l169.18-169.18c7.839-7.84 7.839-20.55 0-28.39z" />
        </Svg>
    )
}

export default Pencil