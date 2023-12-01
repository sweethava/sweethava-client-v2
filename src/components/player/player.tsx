'use client'

import { KeyboardControls } from '@react-three/drei'
import { PlayerControls } from '../../config/playerConfig'
import PlayerCapsule from '../playerCapsule/playerCapsule'

const Player = () => {
    return (
        <KeyboardControls
            map={PlayerControls}
        >
            <PlayerCapsule />
        </KeyboardControls>
    )
}

export default Player