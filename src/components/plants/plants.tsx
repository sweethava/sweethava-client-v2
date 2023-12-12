'use client'

import { useEffect, useRef } from "react"
import useModel from "../../hooks/modelHooks"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { plantsLoaded } from "../../store/loadingStore"
import { Group } from "three"
import gsap from "gsap"

const Plants = () => {
    const { nodes, materials } = useModel('/gltf/plants.glb')
    const dispath = useAppDispatch()
    const { hidePlant } = useAppSelector(store => store.game)
    const plantRef = useRef<Group>(null!)

    useEffect(() => {
        dispath(plantsLoaded())
    }, [])

    useEffect(() => {
        if (plantRef.current) {
            gsap.to(plantRef.current.position, {
                x: hidePlant ? -1 : 0,
                duration: 0.5
            })
        }
    }, [hidePlant])

    return (
        <group dispose={null}>
            <group ref={plantRef}>
                <group position={[-1.528, 2.47, 1.565]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle006.geometry}
                        material={materials.Jug}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle006_1.geometry}
                        material={materials.Mud}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leaves1.geometry}
                    material={materials.Plants}
                    position={[-1.528, 2.605, 1.565]}
                    rotation={[-0.013, 0.054, 0.001]}
                    scale={0.708}
                />
            </group>
            <group position={[1.372, 0.786, -1.452]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_1.geometry}
                    material={materials.Jug}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_2.geometry}
                    material={materials.Mud}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Leave.geometry}
                material={materials.Plants}
                position={[1.453, 2.154, -1.543]}
                rotation={[0.425, 0.98, -0.374]}
                scale={0.875}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Leaves2.geometry}
                material={materials.Plants}
                position={[1.453, 2.154, -1.543]}
                rotation={[3.058, 0.932, -3.112]}
                scale={0.875}
            />
            <group position={[0.273, 3.243, -1.793]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006.geometry}
                    material={materials.Jug}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006_1.geometry}
                    material={materials.Mud}
                />
            </group>
        </group>
    )
}

export default Plants