'use client'

import { Sky } from "@react-three/drei"
import { EffectComposer, SSR } from '@react-three/postprocessing'
import LiveEnvironment from "../liveEnvironment/liveEnvironment"

const DefaultEnvironment = () => {
    return (
        <>
            <EffectComposer disableNormalPass>
                <SSR
                    temporalResolve
                    STRETCH_MISSED_RAYS
                    USE_MRT
                    USE_NORMALMAP
                    USE_ROUGHNESSMAP
                    ENABLE_JITTERING
                    ENABLE_BLUR
                    temporalResolveMix={0.9}
                    temporalResolveCorrectionMix={0.25}
                    maxSamples={0}
                    blurMix={1}
                    blurKernelSize={0}
                    blurSharpness={0.1}
                    rayStep={0.3}
                    intensity={1}
                    maxRoughness={0.1}
                    jitter={1}
                    jitterSpread={0.45}
                    jitterRough={0.1}
                    MAX_STEPS={20}
                    NUM_BINARY_SEARCH_STEPS={5}
                    maxDepthDifference={3}
                    maxDepth={1}
                    thickness={10}
                    ior={1.5}
                />
            </EffectComposer>
            <Sky distance={450000} sunPosition={[1, 1, 1]} inclination={0} azimuth={0.25} />
        </>
    )
}

export default DefaultEnvironment