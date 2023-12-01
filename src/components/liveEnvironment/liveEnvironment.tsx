'use client'

import { Environment, CubeCamera } from "@react-three/drei"

const LiveEnvironment = () => {
    return (
        <CubeCamera
            resolution={1024}
        >
            {(texture): any => {
                return <Environment map={texture} />
            }}
        </CubeCamera>
    )
}

export default LiveEnvironment