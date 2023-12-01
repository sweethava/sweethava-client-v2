'use client'

import { useGLTF } from '@react-three/drei'
import { PropsWithChildren } from 'react'
import GlassMaterial from '../../materials/glassMaterial'
import StandGlassMaterial from '../../materials/standGlassMaterial'

const Stand = ({ children }: PropsWithChildren) => {
    // @ts-ignore
    const { nodes, materials } = useGLTF("gltf/stand.glb")

    for (const key in materials) {
        const material = materials[key]
        material.side = 0
    }

    materials.GlassRegular = StandGlassMaterial

    return (
        <group position-y={1.5} position-x={1} scale={0.5} rotation-y={Math.PI / 2}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve007.geometry}
                material={materials.Metallic}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve007_1.geometry}
                material={materials.GlassRegular}
            />
            <group>
                {children}
            </group>
        </group>
    )
}

useGLTF.preload('/gltf/stand.glb')

export default Stand