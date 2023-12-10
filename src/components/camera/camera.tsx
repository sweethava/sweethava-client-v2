'use client'

import gsap from "gsap"
import { GameCameraZoomSpeed } from "../../config/gameConfig"
import useModel from "../../hooks/modelHooks"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { setCameraPosition, setCameraShot, setCameraTargetPosition, setInteractiveMode, setIsOnCamera, setLockCamera, setShowPicture, setZoom } from "../../store/gameStore"
import HoverHighlight from "../hoverHighlight/hoverHighlight"
import { setGameDefaultState } from "../../utils/game"
import { useEffect } from "react"
import { cameraLoaded } from "../../store/loadingStore"

const Camera = () => {
    // @ts-ignore
    const { nodes, materials } = useModel('/gltf/camera.glb')
    const { interactiveMode, zoomMultiplier } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()
    const shotAudio = new Audio('/sounds/camera.mp3')
    const gigachadAudio = new Audio('/sounds/gigachad.mp3')

    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setIsOnCamera(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(1000 * zoomMultiplier))
            dispatch(setCameraTargetPosition([-0.02, 3.367, -1.747]))
            dispatch(setCameraPosition([-0.296, 3.5, 3]))
            dispatch(setInteractiveMode(true))

            setTimeout(() => {
                playShot()
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    const closeCamera = () => {
        setGameDefaultState(dispatch)
    }

    const playShot = () => {
        shotAudio.play()
        dispatch(setCameraShot(true))

        setTimeout(() => {
            dispatch(setShowPicture(true))

            gigachadAudio.volume = 0.5
            gigachadAudio.play()
            gsap.to(gigachadAudio, {
                volume: 0,
                ease: 'power4.in',
                duration: 5,
                onComplete: () => {
                    gigachadAudio.currentTime = 0
                    gigachadAudio.pause()
                }
            })

            setTimeout(() => {
                closeCamera()
            }, 4000)
        }, 1000)
    }

    useEffect(() => {
        dispatch(cameraLoaded())
    }, [])

    return (
        <group dispose={null}>
            <HoverHighlight
                disabled={interactiveMode}
                onClick={onOpen}
            >
                <group position={[-0.02, 3.465, -1.747]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube022.geometry}
                        material={materials.Aluminum}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube022_1.geometry}
                        material={materials.DarkPlastic}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube022_2.geometry}
                        material={materials.Screen}
                    />
                </group>
            </HoverHighlight>
        </group>
    );
}

export default Camera