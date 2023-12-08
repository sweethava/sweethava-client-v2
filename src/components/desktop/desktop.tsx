'use client'

import { useEffect } from "react"
import { SetMaterials } from "../../utils/materials"
import { Html, useGLTF } from "@react-three/drei"
import HoverHighlight from "../hoverHighlight/hoverHighlight"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { setCameraPosition, setCameraTargetPosition, setInteractiveMode, setIsOnDesktop, setLockCamera, setShowGoBack, setZoom } from "../../store/gameStore"
import { GameCameraZoomSpeed } from "../../config/gameConfig"
import styles from './desktop.module.scss'
import clsx from "clsx"

const Desktop = () => {
    // @ts-ignore
    const { nodes, materials } = useGLTF("/gltf/display.glb")
    const { interactiveMode, isOnDesktop } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()

    useEffect(() => {
        SetMaterials(materials)
    }, [])

    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setIsOnDesktop(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(1267))
            dispatch(setCameraTargetPosition([-0.296, 2.7, -1.708]))
            dispatch(setCameraPosition([-0.296, 2.65, 3]))
            dispatch(setInteractiveMode(true))

            setTimeout(() => {
                dispatch(setShowGoBack(true))
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    return (
        <group dispose={null}>
            <HoverHighlight
                disabled={interactiveMode}
                onClick={onOpen}
            >
                <group position={[-0.296, 2.219, -1.708]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane011.geometry}
                        material={materials.Aluminum}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane011_1.geometry}
                        material={materials.Screen}
                    >
                        <Html
                            className={clsx(styles.wrapper, isOnDesktop ? styles.show : null)}
                            castShadow
                            receiveShadow
                            occlude="raycast"
                            transform
                            position={[0.01, 0.435, 0]}
                            scale={isOnDesktop ? 0.05 : 0}
                        >
                            <h1>Test</h1>
                        </Html>
                    </mesh>
                </group>
            </HoverHighlight>
        </group>
    );
}

export default Desktop