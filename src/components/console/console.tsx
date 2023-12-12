'use client'

import clsx from 'clsx'
import { GameCameraZoomSpeed } from '../../config/gameConfig'
import useModel from '../../hooks/modelHooks'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { ScreenDisabledMaterial, ScreenEnabledMaterial } from '../../materials/screenMaterial'
import { setCameraPosition, setCameraTargetPosition, setHidePlant, setInteractiveMode, setIsOnConsole, setLockCamera, setShowGoBack, setZoom } from '../../store/gameStore'
import HoverHighlight from '../hoverHighlight/hoverHighlight'
import styles from './console.module.scss'
import { Html } from '@react-three/drei'
import ConsoleScreen from '../ui/consoleScreen/consoleScreen'
import { useEffect } from 'react'
import { consoleLoaded } from '../../store/loadingStore'

const Console = () => {
    const { nodes, materials } = useModel('/gltf/console.glb')
    const { interactiveMode, isOnConsole, zoomMultiplier } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()

    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setHidePlant(true))
            dispatch(setIsOnConsole(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(2000 * zoomMultiplier))
            dispatch(setCameraTargetPosition([-1.546, 2.467, 1.187]))
            dispatch(setCameraPosition([0, 6, 2]))
            dispatch(setInteractiveMode(true))

            setTimeout(() => {
                dispatch(setShowGoBack(true))
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    useEffect(() => {
        dispatch(consoleLoaded())
    }, [])

    return (
        <group dispose={null}>
            <HoverHighlight
                disabled={interactiveMode}
                onClick={onOpen}
            >
                <group position={[-1.546, 2.467, 1.187]} rotation={[0, 0.883, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane014.geometry}
                        material={materials.DarkPlastic}
                    />
                    <mesh
                        castShadow
                        geometry={nodes.Plane014_1.geometry}
                        material={isOnConsole ? ScreenEnabledMaterial : ScreenDisabledMaterial}
                    >
                        <Html
                            className={clsx(styles.wrapper, isOnConsole ? styles.show : null)}
                            transform
                            position={[-0.005, 0, -0.024]}
                            rotation-x={-Math.PI / 2}
                            scale={isOnConsole ? 0.013 : 0}
                        >
                            <ConsoleScreen />
                        </Html>
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane014_2.geometry}
                        material={materials.ConsoleColor1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane014_3.geometry}
                        material={materials.ConsoleColor2}
                    />
                </group>
            </HoverHighlight>
        </group>
    )
}

export default Console