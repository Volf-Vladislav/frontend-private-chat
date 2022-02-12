import React from 'react'
import Svg, { Rect } from "react-native-svg"

function Loader(props) {
    return (
        <Svg
            width={props.size}
            height={props.size}

            xmlns="http://www.w3.org/2000/svg"
            
            style={{
                margin: "auto",
                shapeRendering: "auto",
                animationPlayState: "running",
                animationDelay: "0s",
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"

        >
            <Rect
                x={34}
                y={5}
                rx={16}
                ry={16}
                width={32}
                height={32}
                fill={props.color}
                style={{
                    animationPlayState: "running",
                    animationDelay: "0s",
                }}
            ></Rect>
            <Rect
                x={34}
                y={5}
                rx={16}
                ry={16}
                width={32}
                height={32}
                fill={props.color}
                style={{
                    animationPlayState: "running",
                    animationDelay: "0s",
                }}
                transform="rotate(72 50 50)"
            ></Rect>
            <Rect
                x={34}
                y={5}
                rx={16}
                ry={16}
                width={32}
                height={32}
                fill={props.color}
                style={{
                    animationPlayState: "running",
                    animationDelay: "0s",
                }}
                transform="rotate(144 50 50)"
            ></Rect>
            <Rect
                x={34}
                y={5}
                rx={16}
                ry={16}
                width={32}
                height={32}
                fill={props.color}
                style={{
                    animationPlayState: "running",
                    animationDelay: "0s",
                }}
                transform="rotate(216 50 50)"
            ></Rect>
            <Rect
                x={34}
                y={5}
                rx={16}
                ry={16}
                width={32}
                height={32}
                fill={props.color}
                style={{
                    animationPlayState: "running",
                    animationDelay: "0s",
                }}
                transform="rotate(288 50 50)"
            ></Rect>
        </Svg>
    )
}

export default Loader
