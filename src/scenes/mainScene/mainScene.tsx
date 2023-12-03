'use client'

import styles from './mainScene.module.scss'
import { Canvas } from "@react-three/fiber"
import { CameraControls, Fisheye, PointerLockControls, Select } from "@react-three/drei"
import Room from '../../components/room/room'
import DefaultEnvironment from '../../components/defaultEnvironment/defaultEnvironment'
import RoomLight from '../../components/roomLight/roomLight'
import { Physics } from '@react-three/rapier'
import Player from '../../components/player/player'
import { useEffect, Suspense } from 'react'
import { GameFlyMode, GameGravity, GameLowGravity, GamePhysicsDebug } from '../../config/gameConfig'
import { Perf } from 'r3f-perf'

const MainScene = () => {
    useEffect(() => {
        document.exitPointerLock()
    }, [])

    return (
        <div className={styles.scene}>

            <Suspense>
                <Canvas
                    shadows
                    frameloop={"demand"}
                >
                    <Perf />
                    <Physics gravity={GameGravity ? GameLowGravity ? [0, -0.5, 0] : undefined : [0, 0, 0]} debug={GamePhysicsDebug}>
                        <Room />
                        {GameFlyMode ? null : <Player />}
                    </Physics>
                    <RoomLight />
                    <DefaultEnvironment />
                    {GameFlyMode ? <CameraControls makeDefault /> : <PointerLockControls makeDefault />}
                </Canvas>
            </Suspense>

        </div>
    )
}

export default MainScene