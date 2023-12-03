'use clinet'

import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, RapierRigidBody, CapsuleCollider } from '@react-three/rapier'
import { useRef } from 'react'
import { Euler, Quaternion, Vector3 } from 'three'
import { PlayerHeight, PlayerSmooth, PlayerSpeed, PlayerWidth } from '../../config/playerConfig'
import LiveEnvironment from '../liveEnvironment/liveEnvironment'

let lastVertical = 0
let lastHorizontal = 0

const PlayerCapsule = () => {
    const player = useRef<RapierRigidBody>(null!)
    const [subscribeKeys, getKeys] = useKeyboardControls()

    useFrame((state, delta) => {
        if (!player.current) return

        const camera = state.camera
        const cameraRotation = camera.rotation
        const playerPosition = player.current.translation()
        const { forward, backward, leftward, rightward } = getKeys()
        const speed = PlayerSpeed * delta

        camera.position.set(playerPosition.x, playerPosition.y + PlayerHeight / 2, playerPosition.z)

        let [horizontal, vertical] = [0, 0]

        if (forward) {
            vertical -= 1;
        }
        if (backward) {
            vertical += 1;
        }
        if (rightward) {
            horizontal += 1;
        }
        if (leftward) {
            horizontal -= 1;
        }

        if (vertical == 0 && horizontal == 0) {
            vertical = lastVertical * PlayerSmooth
            horizontal = lastHorizontal * PlayerSmooth
        }

        lastVertical = vertical
        lastHorizontal = horizontal

        let velocity = new Vector3(horizontal, 0, vertical).multiplyScalar(speed).applyEuler(cameraRotation)
        velocity.y = 0

        player.current.setLinvel(velocity, true)
    })

    return (
        <RigidBody
            type='dynamic'
            position={[-1, 0.5, 1]}
            ref={player}
            enabledRotations={[false, false, false]}
            name='Player'
        >
            <raycaster args={[new Vector3(0, 0, 0), new Vector3(-1, 0, 0)]} />
            <CapsuleCollider args={[PlayerHeight / 2, PlayerWidth / 2]} />
        </RigidBody>
    )
}

export default PlayerCapsule