'use client'

import { Html } from '@react-three/drei'
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { ScreenDisabledMaterial, ScreenEnabledMaterial } from "../../materials/screenMaterial"
import { GameCameraZoomSpeed } from "../../config/gameConfig"
import { setCameraPosition, setCameraTargetPosition, setHideChair, setInteractiveMode, setIsOnLaptop, setLockCamera, setShowGoBack, setZoom } from "../../store/gameStore"
import HoverHighlight from "../hoverHighlight/hoverHighlight"
import styles from './laptop.module.scss'
import clsx from "clsx"
import useModel from "../../hooks/modelHooks"
import { useEffect } from 'react'
import { laptopLoaded } from '../../store/loadingStore'

const Laptop = () => {
    // @ts-ignore
    const { nodes, materials } = useModel("/gltf/laptop.glb")
    const { interactiveMode, isOnLaptop, zoomMultiplier } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()

    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setIsOnLaptop(true))
            dispatch(setHideChair(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(900 * zoomMultiplier))
            dispatch(setCameraTargetPosition([-1.535, 2, -1.478]))
            dispatch(setCameraPosition([4, 4, 4]))
            dispatch(setInteractiveMode(true))

            setTimeout(() => {
                dispatch(setShowGoBack(true))
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    useEffect(() => {
        dispatch(laptopLoaded())
    }, [])

    return (
        <group dispose={null}>
            <HoverHighlight
                disabled={interactiveMode}
                onClick={onOpen}
            >
                <group position={[-1.535, 1.863, -1.478]} rotation={[0, 0.773, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003.geometry}
                        material={materials.Aluminum}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003_1.geometry}
                        material={materials.DarkPlastic}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003_2.geometry}
                        material={isOnLaptop ? ScreenEnabledMaterial : ScreenDisabledMaterial}
                    >
                        <Html
                            className={clsx(styles.wrapper, isOnLaptop ? styles.show : null)}
                            transform
                            position={[0.001, 0.226, 0]}
                            scale={isOnLaptop ? 0.031 : 0}
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
    )
}

export default Laptop