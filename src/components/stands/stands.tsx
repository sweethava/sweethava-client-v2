'use client'

import { EffectComposer, Outline, SMAA, SSAO, Selection } from "@react-three/postprocessing"
import CHIcon from "../chIcon/chIcon"
import { Color } from 'three'

const Stands = () => {
    return (
        <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
                <Outline
                    visibleEdgeColor={0xffffff}
                    hiddenEdgeColor={0xffffff}
                    width={1000}
                    edgeStrength={100}
                    xRay

                />
            </EffectComposer>
            <group position={[-1.8, 1.061, -0.4]} rotation-y={-0.1}>
                <CHIcon />
            </group>

            <group position={[0, 1.061, 0]} rotation-y={-0.1}>
                <CHIcon />
            </group>
        </Selection>
    )
}

export default Stands