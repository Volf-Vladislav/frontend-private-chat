import React from "react"
import Svg, { Path } from "react-native-svg"

function NextArrow(props) {
    return (
        <Svg
            height={props.height}
            width={props.width}
            fill={props.color}

            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"

            style={{
                enableBackground: "new 0 0 300 300",
            }}
            xmlSpace="preserve"
        >
            <Path d="M150 0C67.157 0 0 67.157 0 150c0 82.841 67.157 150 150 150s150-67.159 150-150C300 67.157 232.843 0 150 0zm45.708 160.159a14.146 14.146 0 0 1-2.368 1.886l-56.295 56.295c-2.734 2.736-6.318 4.103-9.902 4.103s-7.166-1.367-9.902-4.103c-5.47-5.47-5.47-14.34 0-19.808l48.509-48.516-48.265-48.265c-5.47-5.473-5.47-14.34 0-19.808 5.47-5.47 14.338-5.467 19.808-.003l56.046 56.043a13.956 13.956 0 0 1 2.365 1.886c2.796 2.796 4.145 6.479 4.082 10.146.066 3.665-1.28 7.346-4.078 10.144z" />
        </Svg>
    )
}

export default NextArrow