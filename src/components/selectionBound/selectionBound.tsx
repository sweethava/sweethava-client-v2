'use client'

import { EffectComposer, Outline, SMAA, Selection } from "@react-three/postprocessing"
import { PropsWithChildren } from "react"

const SelectionBound = ({ children }: PropsWithChildren) => {
    return (
        <Selection>
            <EffectComposer multisampling={0} autoClear={false}>
                <SMAA />
                <Outline visibleEdgeColor={0xffffff} hiddenEdgeColor={0xffffff} blur width={1000} edgeStrength={100} />
            </EffectComposer>
            <group>
                {children}
            </group>
        </Selection>
    )
}

export default SelectionBound