'use client'

import useModel from "../../hooks/modelHooks"

const HeavyPlants = () => {
    const { nodes, materials } = useModel('/gltf/heavyPlants.glb')

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath001.geometry}
                material={materials.Plants}
                position={[0.273, 3.29, -1.793]}
                rotation={[0, 0.57, 0]}
            />
        </group>
    )
}

export default HeavyPlants