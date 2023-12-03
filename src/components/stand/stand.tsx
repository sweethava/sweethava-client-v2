'use client'

import { Center, Text3D, useGLTF } from '@react-three/drei'
import { PropsWithChildren, useRef } from 'react'
import StandGlassMaterial from '../../materials/standGlassMaterial'
import StandTextMaterial from '../../materials/standTextMaterial'
import { CollisionTarget, CuboidCollider, RigidBody, interactionGroups } from '@react-three/rapier'

interface StandProps {
    text: string
}

const Stand = ({ children, text }: PropsWithChildren<StandProps>) => {
    // @ts-ignore
    const { nodes, materials } = useGLTF("gltf/stand.glb")
    const ref = useRef(null!)

    for (const key in materials) {
        const material = materials[key]
        material.side = 0
    }

    materials.GlassRegular = StandGlassMaterial

    return (
        <RigidBody
            name='Prop'
            colliders={false}
            rotation-y={Math.PI / 2}
            ref={ref}
            userData={{
                ref: ref,
                isPickable: true
            }}
        >
            <CuboidCollider args={[0.075, 0.09, 0.015]}>
                <group scale={0.5} position-y={0.02}>
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
                        material={StandGlassMaterial}
                    />
                    <group>
                        {children}
                    </group>
                    <group position={[0, -0.177, 0.04]}>
                        <Center>
                            <Text3D
                                size={0.02}
                                height={0.005}
                                font="/fonts/Inter.json"
                                material={StandTextMaterial}
                            >{text}</Text3D>
                        </Center>
                    </group>
                </group>
            </CuboidCollider>
        </RigidBody>
    )
}

useGLTF.preload('/gltf/stand.glb')

export default Stand