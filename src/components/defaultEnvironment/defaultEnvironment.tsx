'use client'

import { Environment, Sky } from "@react-three/drei"
import { EffectComposer, SSR } from '@react-three/postprocessing'
import LiveEnvironment from "../liveEnvironment/liveEnvironment"

const DefaultEnvironment = () => {
    return (
        <>
            <Environment preset="apartment" blur={10} />
            <Sky distance={450000} sunPosition={[-1, 0, 0]} inclination={0} azimuth={0.25} />
        </>
    )
}

export default DefaultEnvironment