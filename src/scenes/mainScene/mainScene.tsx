'use client'

import styles from './mainScene.module.scss'
import { Canvas } from "@react-three/fiber"
import DefaultEnvironment from '../../components/defaultEnvironment/defaultEnvironment'
import { Suspense, useEffect } from 'react'
import { GameCameraZoom, GameInitialPosition } from '../../config/gameConfig'
import SelectionBound from '../../components/selectionBound/selectionBound'
import { Vector3 } from 'three'
import Controls from '../../components/controls/controls'
import GameUI from '../../components/ui/gameUI/gameUI'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import StartScreen from '../../components/ui/startScreen/startScreen'
import { useDetectGPU, useGLTF } from '@react-three/drei'
import { gpuLoaded, setIsMobile } from '../../store/loadingStore'
import { setZoom, setZoomMultiplier } from '../../store/gameStore'
import Desktop from '@/components/desktop/desktop'
import Plants from '@/components/plants/plants'
import Room from '@/components/room/room'
import Laptop from '@/components/laptop/laptop'
import Phone from '@/components/phone/phone'
import Camera from '@/components/camera/camera'
import Chair from '@/components/chair/chair'
import Safe from '@/components/safe/safe'
import Book from '@/components/book/book'
import Props from '@/components/props/props'
import HeavyPlants from '../../components/heavyPlants/heavyPlants'
import Console from '../../components/console/console'

const MainScene = () => {
    const { zoomMultiplier } = useAppSelector(store => store.game)
    const { isGpuLoaded } = useAppSelector(store => store.loading)
    const GPUTier = useDetectGPU()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if ((GPUTier.tier === 0 || GPUTier.isMobile)) {
            dispatch(setIsMobile(true))
        }
        dispatch(gpuLoaded())

        const { innerWidth, innerHeight } = window

        dispatch(setZoomMultiplier(innerWidth / innerHeight))
    }, [])

    useEffect(() => {
        dispatch(setZoom(zoomMultiplier * GameCameraZoom))
    }, [zoomMultiplier])

    return (
        <div className={styles.scene}>
            <Suspense>
                <Canvas
                    orthographic
                    shadows
                    dpr={[1, 1.5]}
                    camera={{
                        position: new Vector3(...GameInitialPosition),
                        zoom: GameCameraZoom * zoomMultiplier,
                    }}
                    eventPrefix="offset"
                >
                    {
                        isGpuLoaded ?
                            <>
                                <SelectionBound>
                                    <Room />
                                    <Props />
                                    <Plants />
                                    <HeavyPlants />
                                    <Desktop />
                                    <Laptop />
                                    <Phone />
                                    <Camera />
                                    <Chair />
                                    <Safe />
                                    <Book />
                                    <Console />
                                </SelectionBound>
                                <DefaultEnvironment />
                            </> : null
                    }

                    <Controls />
                </Canvas>
                <GameUI />
                <StartScreen />
            </Suspense>
        </div>
    )
}

export default MainScene