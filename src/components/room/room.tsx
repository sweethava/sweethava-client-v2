'use client'

import { useGLTF } from "@react-three/drei"
import GlassMaterial from "../../materials/glassMaterial"
import { CuboidCollider, RigidBody, interactionGroups } from '@react-three/rapier'
import CarpetMaterial from "../../materials/carpetMaterial"
import WallMaterial from "../../materials/wallMaterial"
import Stands from "../stands/stands"
import { GameEnvIntensity } from "../../config/gameConfig"

const Room = () => {
    // @ts-ignore
    const { nodes, materials } = useGLTF('/gltf/room.glb')

    for (const key in materials) {
        const material = materials[key]
        material.side = 0
        material.envMapIntensity = GameEnvIntensity
    }

    materials.Floor = CarpetMaterial
    materials.Wall = WallMaterial

    materials.FabricMain.roughness = 1
    materials.FabricSecond.roughness = 1
    materials.GlassRegular = GlassMaterial

    materials.Mirror = GlassMaterial
    materials.BlackScreen.metalness = 1
    materials.BlackScreen.roughness = 0

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MousePad.geometry}
                material={materials.FurnitureSecond}
                position={[1.378, 0.751, -1.737]}
            />

            <group scale={0.75}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017.geometry}
                    material={materials.Wall}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_1.geometry}
                    material={materials.Floor}
                />
                {/* <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_2.geometry}
                    material={materials.Roof}
                /> */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_3.geometry}
                    material={materials.FurnitureMain}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_4.geometry}
                    material={materials.FurnitureSecond}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_5.geometry}
                    material={materials.GlassRegular}
                />

                {/* Colliders */}

                <RigidBody
                    position={[0, -0.1, 0]}
                    type="fixed"
                >
                    <CuboidCollider args={[3, 0.1, 3]} />
                </RigidBody>

                <RigidBody
                    position={[0, 3.1, 0]}
                    type="fixed"
                >
                    <CuboidCollider args={[3, 0.1, 3]} />
                </RigidBody>

                <RigidBody
                    position={[3.05, 1.5, 0]}
                    type="fixed"
                >
                    <CuboidCollider args={[0.1, 1.5, 3]} />
                </RigidBody>

                <RigidBody
                    position={[-3.05, 1.5, 0]}
                    type="fixed"
                >
                    <CuboidCollider args={[0.1, 1.5, 3]} />
                </RigidBody>

                <RigidBody
                    position={[0, 1.5, -3.05]}
                    type="fixed"
                >
                    <CuboidCollider args={[3, 1.5, 0.1]} />
                </RigidBody>

                <RigidBody
                    position={[0, 1.5, 3.05]}
                    type="fixed"
                >
                    <CuboidCollider args={[3, 1.5, 0.1]} />
                </RigidBody>
            </group>

            <RigidBody type="fixed" colliders="trimesh">
                <group>
                    <group position={[1.6, 0, -1.842]} scale={0.25}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006.geometry}
                            material={materials.BlackPlastic}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_1.geometry}
                            material={materials.GlassRegular}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_2.geometry}
                            material={materials.RGBLighting}
                        />
                    </group>
                    <group position={[1.033, 0, -1.842]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane002.geometry}
                            material={materials.FurnitureMain}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane002_1.geometry}
                            material={materials.FurnitureSecond}
                        />
                    </group>
                    <group position={[2.013, 0, -2.023]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube.geometry}
                            material={materials.FurnitureMain}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_1.geometry}
                            material={materials.FurnitureSecond}
                        />
                    </group>
                    <group position={[-1.935, 0, -0.677]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004.geometry}
                            material={materials.FurnitureMain}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_1.geometry}
                            material={materials.FurnitureSecond}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_2.geometry}
                            material={materials.Mirror}
                        />
                    </group>
                    <group position={[-2.047, 0.183, 1.091]} rotation={[0, 1.571, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube005.geometry}
                            material={materials.FurnitureMain}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube005_1.geometry}
                            material={materials.FurnitureSecond}
                        />
                    </group>
                    <group position={[-2.209, 0.78, 1.091]} rotation={[0, 1.571, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane003.geometry}
                            material={materials.BlackPlastic}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane003_1.geometry}
                            material={materials.BlackScreen}
                        />
                    </group>
                    <group
                        position={[0.757, -0.098, 0.884]}
                        rotation={[0, 1.571, 0]}
                        scale={1.3}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane015.geometry}
                            material={materials.FurnitureMain}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane015_1.geometry}
                            material={materials.FabricMain}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane015_2.geometry}
                            material={materials.FurnitureSecond}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Pillow.geometry}
                        material={materials.FabricMain}
                        position={[0.405, 0.409, 1.94]}
                        rotation={[0, 1.571, 0]}
                        scale={1.3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Pillow001.geometry}
                        material={materials.FabricMain}
                        position={[1.061, 0.409, 1.934]}
                        rotation={[-Math.PI, 1.483, -Math.PI]}
                        scale={1.3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Blanket.geometry}
                        material={materials.FabricSecond}
                        position={[0.757, 0.593, 0.884]}
                        rotation={[0, 1.571, 0]}
                        scale={1.3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.WallShelf.geometry}
                        material={materials.FurnitureSecond}
                        position={[1.042, 1.618, -2.117]}
                    />
                    <group position={[1.874, 0, 2.001]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube003.geometry}
                            material={materials.FurnitureMain}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube003_1.geometry}
                            material={materials.FabricSecond}
                        />
                    </group>
                    <group position={[0.762, 1.525, 2.238]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane019.geometry}
                            material={materials.FurnitureSecond}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane019_1.geometry}
                            material={materials.PaingingWhitePaper}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane019_2.geometry}
                            material={materials.PaintingHorizontal}
                        />
                    </group>
                    <group
                        position={[-0.161, 1.307, -2.242]}
                        rotation={[Math.PI, 0, Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane020.geometry}
                            material={materials.FurnitureSecond}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane020_1.geometry}
                            material={materials.PaingingWhitePaper}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane020_2.geometry}
                            material={materials.PaintingVertical}
                        />
                    </group>
                </group>
            </RigidBody>

            <Stands />
        </group>
    )
}

useGLTF.preload('/gltf/room.glb')

export default Room