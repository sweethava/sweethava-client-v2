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

const MainScene = () => {
    useEffect(() => {
        console.log(document.pointerLockElement);

        document.exitPointerLock()
    }, [])

    return (
        <div className={styles.scene}>
            <Canvas shadows>
                <ambientLight color={'#fff'} intensity={0.4} />
                <Physics>
                    <Room />
                    <Player />
                </Physics>
                <RoomLight />
                <DefaultEnvironment />
                <PointerLockControls makeDefault onLock={() => {
                    console.log('LOCK')
                }} />
            </Canvas>
        </div>
    )
}

export default MainScene