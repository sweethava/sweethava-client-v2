'use client'

import { Bloom, EffectComposer, GodRays, Noise } from "@react-three/postprocessing"

const DefaultPostprocessing = () => {
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={0.1} />
        </EffectComposer>
    )
}

export default DefaultPostprocessing