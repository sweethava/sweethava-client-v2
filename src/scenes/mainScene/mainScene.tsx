'use client'

import styles from './mainScene.module.scss'
import { Canvas } from "@react-three/fiber"
import DefaultEnvironment from '../../components/defaultEnvironment/defaultEnvironment'
import { Suspense } from 'react'
import { GameCameraZoom, GameInitialPosition } from '../../config/gameConfig'
import Room from '../../components/room/room'
import SelectionBound from '../../components/selectionBound/selectionBound'
import Desktop from '../../components/desktop/desktop'
import { Vector3 } from 'three'
import Controls from '../../components/controls/controls'
import GameUI from '../../components/ui/gameUI/gameUI'

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
                        <Room />
                        <Desktop />
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