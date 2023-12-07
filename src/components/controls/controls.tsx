'use client'

import { OrbitControls } from "@react-three/drei"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector3 } from "three"
import { useEffect, useRef } from "react"
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { lerp } from "three/src/math/MathUtils.js"
import { GameInitialTargetPosition } from "../../config/gameConfig"
import gsap from "gsap"
const Controls = () => {
    const dispatch = useAppDispatch()
    const { lockCamera, cameraPosition, cameraTargetPosition, zoom } = useAppSelector(store => store.game)
    const controls = useRef<OrbitControlsImpl>(null!)
    const { camera } = useThree()

    useEffect(() => {
        gsap.to(
            controls.current.target,
            {
                duration: 1,
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
                duration: 1,
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
                duration: 1,
                zoom: zoom
            }
        )
    }, [zoom])

    useEffect(() => {
        controls.current.enabled = !lockCamera
    }, [lockCamera])

    return (
        <OrbitControls
            makeDefault
            minAzimuthAngle={0}
            maxAzimuthAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
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