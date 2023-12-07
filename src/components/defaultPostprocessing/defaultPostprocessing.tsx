'use client'

import { EffectComposer, Noise, SSAO } from "@react-three/postprocessing"
import { BlendFunction } from 'postprocessing'

const DefaultPostprocessing = () => {
    return (
        <EffectComposer>
            <Noise opacity={0.02} />
        </EffectComposer>
    )
}

export default DefaultPostprocessing