'use client'

import { MeshReflectorMaterial } from "@react-three/drei"

const MirrorMaterial = () => {
    return (
        <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={0}
            depthScale={0}
            minDepthThreshold={0}
            maxDepthThreshold={0}
            color="#fff"
            metalness={1}
            mirror={1}
        />
    )
}

export default MirrorMaterial