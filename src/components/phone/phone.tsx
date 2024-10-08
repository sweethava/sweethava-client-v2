'use client'

import { Html } from '@react-three/drei'
import styles from './phone.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { setCameraPosition, setCameraTargetPosition, setHideDesktop, setInteractiveMode, setIsOnPhone, setLockCamera, setShowGoBack, setZoom } from '../../store/gameStore'
import { GameCameraZoomSpeed } from '../../config/gameConfig'
import HoverHighlight from '../hoverHighlight/hoverHighlight'
import { ScreenDisabledMaterial, ScreenEnabledMaterial } from '../../materials/screenMaterial'
import clsx from 'clsx'
import useModel from '../../hooks/modelHooks'
import { useEffect } from 'react'
import { phoneLoaded } from '../../store/loadingStore'
import PhoneScreen from '../ui/phoneScreen/phoneScreen'

const Phone = () => {
    const { nodes, materials } = useModel("/gltf/phone.glb");
    const { interactiveMode, isOnPhone, showGoBack, zoomMultiplier } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()

    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setHideDesktop(true))
            dispatch(setIsOnPhone(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(1700 * zoomMultiplier))
            dispatch(setCameraTargetPosition([0.071, 2.189, -1.677]))
            dispatch(setCameraPosition([-1, 6, 1]))
            dispatch(setInteractiveMode(true))

            setTimeout(() => {
                dispatch(setShowGoBack(true))
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    useEffect(() => {
        dispatch(phoneLoaded())
    }, [])

    return (
        <group dispose={null}>
            <HoverHighlight
                disabled={interactiveMode}
                onClick={onOpen}
            >
                <group position={[0.071, 2.189, -1.677]} rotation={[0, -0.352, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane041.geometry}
                        material={materials.Aluminum}
                    />
                    <mesh
                        castShadow
                        geometry={nodes.Plane041_1.geometry}
                        material={isOnPhone ? ScreenEnabledMaterial : ScreenDisabledMaterial}
                    >
                        <Html
                            className={clsx(styles.wrapper, isOnPhone && showGoBack ? styles.show : null)}
                            transform
                            position={[0, 0, -0.027]}
                            rotation-x={-Math.PI / 2}
                            scale={isOnPhone ? 0.0145 : 0}
                        >
                            <PhoneScreen />
                        </Html>
                    </mesh>
                </group>
            </HoverHighlight>
        </group>
    );
}

export default Phone