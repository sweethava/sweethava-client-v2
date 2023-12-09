'use client'

import styles from './mainScene.module.scss'
import { Canvas } from "@react-three/fiber"
import DefaultEnvironment from '../../components/defaultEnvironment/defaultEnvironment'
import { Suspense, useEffect, useMemo } from 'react'
import { GameCameraZoom, GameInitialPosition } from '../../config/gameConfig'
import SelectionBound from '../../components/selectionBound/selectionBound'
import { Vector3 } from 'three'
import Controls from '../../components/controls/controls'
import GameUI from '../../components/ui/gameUI/gameUI'
import dynamic from 'next/dynamic'
import FrameLimiter from '../../components/frameLimiter/frameLimiter'
import DefaultPostprocessing from '../../components/defaultPostprocessing/defaultPostprocessing'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import LoadingScreen from '../../components/ui/loadingScreen/loadingScreen'
import StartScreen from '../../components/ui/startScreen/startScreen'
import { useDetectGPU, useGLTF } from '@react-three/drei'
import { gpuLoaded, setIsMobile } from '../../store/loadingStore'
import { setZoom, setZoomMultiplier } from '../../store/gameStore'

const RoomComponent = dynamic(() => import('@/components/room/room'), {
    ssr: false
})
const LaptopComponent = dynamic(() => import('@/components/laptop/laptop'), {
    ssr: false
})
const DesktopComponent = dynamic(() => import('@/components/desktop/desktop'), {
    ssr: false
})
const PhoneComponent = dynamic(() => import('@/components/phone/phone'), {
    ssr: false
})
const CameraComponent = dynamic(() => import('@/components/camera/camera'), {
    ssr: false
})
const ChairComponent = dynamic(() => import('@/components/chair/chair'), {
    ssr: false
})
const SafeComponent = dynamic(() => import('@/components/safe/safe'), {
    ssr: false
})
const BookComponent = dynamic(() => import('@/components/book/book'), {
    ssr: false
})

const MainScene = () => {
    const { zoomMultiplier } = useAppSelector(store => store.game)
    const { isGpuLoaded } = useAppSelector(store => store.loading)
    const Room = useMemo(() => {
        return <RoomComponent />
    }, [])
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
            <LoadingScreen />
            <Suspense>
                <Canvas
                    orthographic
                    shadows
                    dpr={[1, 1.5]}
                    camera={{
                        position: new Vector3(...GameInitialPosition),
                        zoom: GameCameraZoom * zoomMultiplier,
                    }}
                >
                    {
                        isGpuLoaded ?
                            <>
                                <SelectionBound>
                                    {Room}
                                    <DesktopComponent />
                                    <LaptopComponent />
                                    <PhoneComponent />
                                    <CameraComponent />
                                    <ChairComponent />
                                    <SafeComponent />
                                    <BookComponent />
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