'use client'

import { Select } from '@react-three/postprocessing'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Group, Object3D, Vector3, Euler } from 'three'
import usePlayerStore from '../../store/playerStore'
import { useFrame } from '@react-three/fiber'
import { CollisionEnterHandler, RapierRigidBody, RigidBody } from '@react-three/rapier'

let bodyPosition = new Vector3()
let lastCameraRotation = new Euler()
let lastCameraPosition = new Vector3()


const PickUp = ({ children }: PropsWithChildren) => {
    const [isPicked, setIsPicked] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [physBody, setPhysBody] = useState<RapierRigidBody | null>(null)
    const ref = useRef<Group>(null!)
    const { pickedUp, setPickedUp } = usePlayerStore(store => store)

    const setPicked = () => {
        setPickedUp(ref.current?.id)
    }

    useFrame((state) => {
        if (isPicked && physBody) {
            const { camera } = state
            const cameraPostion = camera.position
            const cameraRotation = camera.rotation

            if (!cameraPostion.equals(lastCameraPosition) || !cameraRotation.equals(lastCameraRotation)) {
                bodyPosition.set(0, 0, -0.5).applyEuler(cameraRotation).add(cameraPostion)
                physBody.setTranslation(bodyPosition, false)

                lastCameraRotation = cameraRotation.clone()
                lastCameraPosition = cameraPostion.clone()
            }
        }
    })

    useEffect(() => {
        if (physBody) {
            physBody.setEnabled(false)
        }
    }, [physBody])

    useEffect(() => {
        if (pickedUp === ref.current?.id) {
            setIsPicked(true)

            ref.current.traverse((item) => {
                if (item.userData.isPickable) {
                    setPhysBody(item.userData.ref.current)
                }
            })
        } else {
            setIsPicked(false)
            setPhysBody(null)
        }
    }, [pickedUp])

    return (
        <group
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onClick={setPicked}
            ref={ref}
        >
            <Select enabled={hovered}>
                {children}
            </Select>
        </group>
    )
}

export default PickUp