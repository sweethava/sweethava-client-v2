'use client'

import { useEffect, useRef } from "react"
import useModel from "../../hooks/modelHooks"
import { useAppSelector } from "../../hooks/storeHooks"
import { Group } from "three"
import gsap from "gsap"
import { GameCameraZoomSpeed, GameChairRotationSpeed } from "../../config/gameConfig"
import { useFrame } from "@react-three/fiber"
import { useDispatch } from "react-redux"
import { chairLoaded } from "../../store/loadingStore"

const Chair = () => {
    const { nodes, materials } = useModel("/gltf/chair.glb")
    const { hideChair } = useAppSelector(store => store.game)
    const defaultYPosition = 0
    const interactiveYPosition = -1
    const ref = useRef<Group>(null!)
    const topRef = useRef<Group>(null!)
    const dispatch = useDispatch()

    useFrame((state, delta) => {
        if (topRef.current) {
            topRef.current.rotation.y += delta * GameChairRotationSpeed
        }
    })

    useEffect(() => {
        if (ref.current) {
            gsap.to(ref.current.position, {
                duration: GameCameraZoomSpeed,
                y: hideChair ? interactiveYPosition : defaultYPosition
            })
        }
    }, [hideChair])

    useEffect(() => {
        dispatch(chairLoaded())
    }, [])

    return (
        <group dispose={null}
            ref={ref}
        >
            <group
                position={[0.17, 1.48, 0.181]}
                rotation={[-Math.PI, 1.056, -Math.PI]}
                scale={1.293}
                ref={topRef}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014.geometry}
                    material={materials.Fabric}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014_1.geometry}
                    material={materials.Metallic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014_2.geometry}
                    material={materials.DarkPlastic}
                />
            </group>
            <group
                position={[0.17, 1.48, 0.181]}
                rotation={[Math.PI, -0.518, Math.PI]}
                scale={1.293}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle020.geometry}
                    material={materials.DarkPlastic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle020_1.geometry}
                    material={materials.Metallic}
                />
            </group>
        </group>
    )
}

export default Chair