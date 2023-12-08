'use client'

import styles from './mainScene.module.scss'
import { Canvas } from "@react-three/fiber"
import DefaultEnvironment from '../../components/defaultEnvironment/defaultEnvironment'
import { Suspense } from 'react'
import { GameCameraZoom, GameInitialPosition } from '../../config/gameConfig'
import SelectionBound from '../../components/selectionBound/selectionBound'
import { Vector3 } from 'three'
import Controls from '../../components/controls/controls'
import GameUI from '../../components/ui/gameUI/gameUI'
import dynamic from 'next/dynamic'

const RoomComponent = dynamic(() => import('@/components/room/room'))
const DesktopComponent = dynamic(() => import('@/components/desktop/desktop'))

const MainScene = () => {
    return (
        <div className={styles.scene}>
            <Suspense>
                <Canvas
                    orthographic
                    shadows
                    dpr={[1, 1.5]}
                    camera={{
                        position: new Vector3(...GameInitialPosition),
                        zoom: GameCameraZoom,
                    }}
                >
                    <SelectionBound>
                        <RoomComponent />
                        <DesktopComponent />
                    </SelectionBound>

                    <Controls />

                    <DefaultEnvironment />
                </Canvas>
                <GameUI />
            </Suspense>
        </div>
    )
}

export default MainScene