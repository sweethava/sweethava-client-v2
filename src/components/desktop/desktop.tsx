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
import { useEffect, useRef } from "react"
import { desktopLoaded } from "../../store/loadingStore"
import DesktopScreen from "../ui/desktopScreen/desktopScreen"
import { Group } from "three"
import gsap from 'gsap'

const Desktop = () => {
    const { nodes, materials } = useModel("/gltf/display.glb")
    const { interactiveMode, isOnDesktop, zoomMultiplier, hideDesktop } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()
    const groupRef = useRef<Group>(null!)

    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setIsOnDesktop(true))
            dispatch(setHideChair(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(600 * zoomMultiplier))
            dispatch(setCameraTargetPosition([-0.296, 2.65, -1.708]))
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

    useEffect(() => {
        if (groupRef.current) {
            gsap.to(groupRef.current.position, {
                duration: GameCameraZoomSpeed,
                z: hideDesktop ? -1 : 0
            })
        }
    }, [hideDesktop])

    return (
        <group
            dispose={null}
            ref={groupRef}
        >
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
                            <DesktopScreen />
                        </Html>
                    </mesh>
                </group>
            </HoverHighlight>
        </group>
    );
}

export default Desktop