'use client'

import styles from './mainScene.module.scss'
import { Canvas } from "@react-three/fiber"
import { PointerLockControls } from "@react-three/drei"
import Room from '../../components/room/room'
import DefaultEnvironment from '../../components/defaultEnvironment/defaultEnvironment'
import RoomLight from '../../components/roomLight/roomLight'
import { Physics } from '@react-three/rapier'
import Player from '../../components/player/player'
import { useEffect, useRef } from 'react'
import Stand from '../../components/stand/stand'
import CHIcon from '../../components/chIcon/chIcon'

const MainScene = () => {
    useEffect(() => {
        document.exitPointerLock()
    }, [])

    return (
        <div className={styles.scene}>
            <Canvas shadows>
                <Physics>
                    <Room />
                    <Player />
                    <CHIcon />
                </Physics>
                <RoomLight />
                <DefaultEnvironment />
                <PointerLockControls makeDefault />
            </Canvas>
        </div>
    )
}

export default MainScene