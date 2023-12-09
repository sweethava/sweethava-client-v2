'use client'

import { Html } from "@react-three/drei"
import HoverHighlight from "../hoverHighlight/hoverHighlight"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { setCameraPosition, setCameraTargetPosition, setHideChair, setInteractiveMode, setIsOnDesktop, setLockCamera, setShowGoBack, setZoom } from "../../store/gameStore"
import { GameCameraZoomSpeed } from "../../config/gameConfig"
import styles from './desktop.module.scss'
import clsx from "clsx"
import { ScreenDisabledMaterial, ScreenEnabledMaterial } from "../../materials/screenMaterial"
import useModel from "../../hooks/modelHooks"
import { useEffect } from "react"
import { desktopLoaded } from "../../store/loadingStore"

const Desktop = () => {
    // @ts-ignore
    const { nodes, materials } = useModel("/gltf/display.glb")
    const { interactiveMode, isOnDesktop, zoomMultiplier } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()

    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setIsOnDesktop(true))
            dispatch(setHideChair(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(1267 * zoomMultiplier))
            dispatch(setCameraTargetPosition([-0.296, 2.7, -1.708]))
            dispatch(setCameraPosition([-0.296, 2.65, 3]))
            dispatch(setInteractiveMode(true))

            setTimeout(() => {
                dispatch(setShowGoBack(true))
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    useEffect(() => {
        dispatch(desktopLoaded())
    }, [])

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
                        geometry={nodes.Plane011_1.geometry}
                        material={isOnDesktop ? ScreenEnabledMaterial : ScreenDisabledMaterial}
                    >
                        <Html
                            className={clsx(styles.wrapper, isOnDesktop ? styles.show : null)}
                            transform
                            position={[0.012, 0.435, 0]}
                            scale={isOnDesktop ? 0.0345 : 0}
                        >
                            <h1>Test</h1>
                            <h1>Test</h1>
                            <h1>Test</h1>
                            <h1>Test</h1>
                            <h1>Test</h1>
                            <h1>Test</h1>
                            <h1>Test</h1>
                            <h1>Test</h1>
                        </Html>
                    </mesh>
                </group>
            </HoverHighlight>
        </group>
    );
}

export default Desktop