'use client'

import { useEffect, useRef } from "react"
import { GameCameraZoomSpeed } from "../../config/gameConfig"
import useModel from "../../hooks/modelHooks"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { setCameraPosition, setCameraTargetPosition, setHideChair, setInteractiveMode, setIsOnSafe, setLockCamera, setShowGoBack, setZoom } from "../../store/gameStore"
import HoverHighlight from "../hoverHighlight/hoverHighlight"
import { Group } from "three"
import gsap from "gsap"
import { safeLoaded } from "../../store/loadingStore"

const Safe = () => {
    // @ts-ignore
    const { nodes, materials } = useModel('/gltf/safe.glb')
    const { interactiveMode, isOnSafe, zoomMultiplier } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()
    const doorRef = useRef<Group>(null!)
    const openedDoorAngle = 2
    const closedDoorAngle = 0
    const openAudio = new Audio('/sounds/openSafe.mp3')

    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setIsOnSafe(true))
            dispatch(setHideChair(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(2000 * zoomMultiplier))
            dispatch(setCameraTargetPosition([-1.252, 1.6, 1.372]))
            dispatch(setCameraPosition([0, 1.9, 0]))
            dispatch(setInteractiveMode(true))

            setTimeout(() => {
                dispatch(setShowGoBack(true))
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    useEffect(() => {
        if (doorRef.current) {
            gsap.to(doorRef.current.rotation, {
                y: isOnSafe ? openedDoorAngle : closedDoorAngle,
                duration: 1.5
            })

            if (isOnSafe) {
                openAudio.play()
            }
        }
    }, [isOnSafe])

    useEffect(() => {
        dispatch(safeLoaded())
    }, [])

    return (
        <group dispose={null}>
            <HoverHighlight
                disabled={interactiveMode}
                onClick={onOpen}
            >
                <group
                    position={[-1.252, 1.581, 1.372]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.071}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle023.geometry}
                        material={materials.DarkMetal}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle023_1.geometry}
                        material={materials.Gold}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle023_2.geometry}
                        material={materials.Web}
                    />
                </group>
                <group
                    position={[-1.339, 1.583, 1.111]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.071}
                    ref={doorRef}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle004.geometry}
                        material={materials.Metallic}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle004_1.geometry}
                        material={materials.DarkMetal}
                    />
                </group>
            </HoverHighlight>
        </group>
    )
}

export default Safe