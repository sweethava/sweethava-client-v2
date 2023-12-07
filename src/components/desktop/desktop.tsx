'use client'

import { useEffect } from "react"
import { SetMaterials } from "../../utils/materials"
import { useGLTF } from "@react-three/drei"
import HoverHighlight from "../hoverHighlight/hoverHighlight"
import { Vector3 } from "three"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { setCameraPosition, setCameraTargetPosition, setIsOnDesktop, setLockCamera, setShowGoBack, setZoom } from "../../store/gameStore"
import { GameCameraZoomSpeed } from "../../config/gameConfig"

const Desktop = () => {
    // @ts-ignore
    const { nodes, materials } = useGLTF("/gltf/display.glb")
    const { isOnDesktop } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()

    useEffect(() => {
        SetMaterials(materials)
    }, [])

    const onOpen = () => {
        if (!isOnDesktop) {
            dispatch(setIsOnDesktop(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(1267))
            dispatch(setCameraTargetPosition([-0.296, 2.7, -1.708]))
            dispatch(setCameraPosition([-0.296, 2.65, 3]))

            setTimeout(() => {
                dispatch(setShowGoBack(true))
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    return (
        <group dispose={null}>
            <HoverHighlight
                disabled={isOnDesktop}
                onClick={onOpen}
            >
                <group position={[-0.296, 2.219, -1.708]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane011.geometry}
                        material={materials.Aluminum}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane011_1.geometry}
                        material={materials.Screen}
                    />
                </group>
            </HoverHighlight>
        </group>
    );
}

export default Desktop