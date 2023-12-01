'use clinet'

import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, RapierRigidBody, CapsuleCollider } from '@react-three/rapier'
import { useRef } from 'react'
import { Euler, Quaternion, Vector3 } from 'three'
import { PlayerHeight, PlayerSpeed, PlayerWidth } from '../../config/playerConfig'
import LiveEnvironment from '../liveEnvironment/liveEnvironment'

const PlayerCapsule = () => {
    const player = useRef<RapierRigidBody>(null!)
    const [subscribeKeys, getKeys] = useKeyboardControls()

    useFrame((state, delta) => {
        const camera = state.camera
        const playerPosition = player.current.translation()
        const { forward, backward, leftward, rightward } = getKeys()
        const speed = PlayerSpeed * delta

        camera.position.set(playerPosition.x, playerPosition.y + PlayerHeight / 2, playerPosition.z)

        let velocity = new Vector3(0, 0, 0);
        let cameraDirection = new Vector3();
        camera.getWorldDirection(cameraDirection);

        let forwardMove = new Vector3();
        forwardMove.setFromMatrixColumn(camera.matrix, 0);
        forwardMove.crossVectors(camera.up, forwardMove);

        let rightMove = new Vector3();
        rightMove.setFromMatrixColumn(camera.matrix, 0);

        let [horizontal, vertical] = [0, 0];

        if (forward) {
            vertical += 1;
        }
        if (backward) {
            vertical -= 1;
        }
        if (rightward) {
            horizontal += 1;
        }
        if (leftward) {
            horizontal -= 1;
        }

        if (horizontal !== 0 && vertical !== 0) {
            velocity
                .add(forwardMove.clone().multiplyScalar(speed * vertical))
                .add(rightMove.clone().multiplyScalar(speed * horizontal));
        } else if (horizontal !== 0) {
            velocity.add(rightMove.clone().multiplyScalar(speed * horizontal));
        } else if (vertical !== 0) {
            velocity.add(forwardMove.clone().multiplyScalar(speed * vertical));
        }

        velocity.clampLength(-speed, speed);

        player.current.setLinvel(velocity, true)
    })

    return (
        <RigidBody
            type='dynamic'
            position={[-1, 0.5, 1]}
            ref={player}
            enabledRotations={[false, false, false]}
        >
            <CapsuleCollider args={[PlayerHeight / 2, PlayerWidth / 2]} />
        </RigidBody>
    )
}

export default PlayerCapsule