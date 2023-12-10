'use client'

import { OrbitControls } from "@react-three/drei"
import { useAppSelector } from "../../hooks/storeHooks"
import { useThree } from "@react-three/fiber"
import { Vector3 } from "three"
import { useEffect, useRef } from "react"
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { GameCameraZoomSpeed, GameInitialTargetPosition } from "../../config/gameConfig"
import gsap from "gsap"
const Controls = () => {
    const { lockCamera, cameraPosition, cameraTargetPosition, zoom } = useAppSelector(store => store.game)
    const controls = useRef<OrbitControlsImpl>(null!)
    const { camera } = useThree()

    useEffect(() => {
        gsap.to(
            controls.current.target,
            {
                duration: GameCameraZoomSpeed,
                x: cameraTargetPosition[0],
                y: cameraTargetPosition[1],
                z: cameraTargetPosition[2],
                onUpdate: controls.current.update
            }
        )

    }, [cameraTargetPosition])

    useEffect(() => {
        gsap.to(
            camera.position,
            {
                duration: GameCameraZoomSpeed,
                onUpdate: controls.current.update,
                x: cameraPosition[0],
                y: cameraPosition[1],
                z: cameraPosition[2],
            }
        )
    }, [cameraPosition])

    useEffect(() => {
        gsap.to(
            camera,
            {
                duration: GameCameraZoomSpeed,
                onUpdate: controls.current.update,
                zoom: zoom
            }
        )
    }, [zoom])

    useEffect(() => {
        controls.current.enabled = !lockCamera
        controls.current.enableRotate = !lockCamera
    }, [lockCamera])

    return (
        <OrbitControls
            makeDefault
            minAzimuthAngle={lockCamera ? -1000 : 0}
            maxAzimuthAngle={lockCamera ? 1000 : Math.PI / 2}
            minPolarAngle={lockCamera ? -1000 : Math.PI / 3}
            maxPolarAngle={lockCamera ? 1000 : Math.PI / 2}
            enableZoom={false}
            enablePan={false}
            zoomSpeed={0.3}
            dampingFactor={0.1}
            target={new Vector3(...GameInitialTargetPosition)}
            ref={controls}
        />
    )
}

export default Controls