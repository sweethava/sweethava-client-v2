'use client'

import { useHelper } from "@react-three/drei"
import { useRef } from "react"
import { PointLightHelper } from "three"

const RoomLight = () => {
    const ref = useRef(null!)

    useHelper(ref, PointLightHelper)

    return (
        <group position-y={2.2}>
            <pointLight
                castShadow
                distance={5}
                intensity={5}
                shadow-mapSize-height={2048}
                shadow-mapSize-width={2048}
                shadow-bias={-0.0001}
                ref={ref}
            />
        </group>
    )
}

export default RoomLight