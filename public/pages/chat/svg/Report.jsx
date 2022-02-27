import React from "react"
import Svg, { Path } from "react-native-svg"

function Report(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            fill={props.color}

            xmlns="http://www.w3.org/2000/svg"
            viewBox='0 0 48 48'
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20ZM21 12a3 3 0 1 1 6 0v16a3 3 0 1 1-6 0V12Zm3 21a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            />
        </Svg>
    )
}

export default Report