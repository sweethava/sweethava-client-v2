'use client'

import { AccumulativeShadows, ContactShadows, RandomizedLight, useHelper } from "@react-three/drei"
import { useRef } from "react"
import { PointLightHelper } from "three"

const RoomLight = () => {
    return (
        <group position-y={0.01}>
            <pointLight castShadow position-y={1.5} intensity={3} />
            <AccumulativeShadows temporal frames={100} scale={10}>
                <RandomizedLight amount={8} position={[1, 1.5, 1]} />
            </AccumulativeShadows>
        </group>
    )
}

export default RoomLight