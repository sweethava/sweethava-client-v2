'use client'

import { useGLTF } from "@react-three/drei"
import Stand from "../stand/stand"

const CHIcon = () => {
    // @ts-ignore
    const { nodes, materials } = useGLTF("gltf/chIcon.glb")

    for (const key in materials) {
        const material = materials[key]
        material.side = 0
    }

    return (
        <Stand>
            <group>
                <mesh
                    castShadow
                    geometry={nodes.Curve014.geometry}
                    material={materials.CHColor1}
                />
                <mesh
                    castShadow
                    geometry={nodes.Curve014_1.geometry}
                    material={materials.CHColor2}
                />
                <mesh
                    castShadow
                    geometry={nodes.Curve014_2.geometry}
                    material={materials.CHColor3}
                />
                <mesh
                    castShadow
                    geometry={nodes.Curve014_3.geometry}
                    material={materials.CHColor4}
                />
            </group>
        </Stand>
    )
}

useGLTF.preload('/gltf/chIcon.glb')

export default CHIcon