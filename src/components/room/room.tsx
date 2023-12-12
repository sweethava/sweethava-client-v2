'use client'

import { CSMaterial, JSMaterial, NodeMaterial, ReactImageMaterial, TSImageMaterial } from "../../materials/imageMaterial"
import useModel from "../../hooks/modelHooks"
import { useAppDispatch } from "../../hooks/storeHooks"
import { useEffect } from "react"
import { roomLoaded } from "../../store/loadingStore"

const Room = () => {
    const { nodes, materials } = useModel("/gltf/room.glb")
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(roomLoaded())
    }, [])

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wall.geometry}
                material={materials.Wall}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Floor.geometry}
                material={materials.Wood}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table.geometry}
                material={materials.Wood}
                position={[-0.943, 0.617, 0.127]}
            />
            <group position={[0.324, 1.434, -0.952]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials.DarkPlastic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010_1.geometry}
                    material={materials.Wood}
                />
            </group>
            <group position={[-0.706, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials.Metallic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_2.geometry}
                    material={materials.Fabric}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.WallShelf.geometry}
                material={materials.Wood}
                position={[-0.296, 3.161, -1.785]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Carpet.geometry}
                material={materials.Fabric}
                position={[0.314, 0.622, 0.312]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shelf.geometry}
                material={materials.Wood}
                position={[-1.581, 1.252, 1.357]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ShelfItems.geometry}
                material={materials.Wood}
                position={[-1.581, 1.252, 1.357]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.WallTop.geometry}
                material={materials.Wood}
                position={[0, -0.021, 0]}
            />
            <group position={[-1.933, 3.042, 0.775]} rotation={[0.048, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_1.geometry}
                    material={materials.PaingingWhite}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_2.geometry}
                    material={CSMaterial}
                />
            </group>
            <group position={[0.966, 3.323, -1.921]} rotation={[1.571, -1.53, 1.571]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_1.geometry}
                    material={materials.PaingingWhite}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_2.geometry}
                    material={ReactImageMaterial}
                />
            </group>
            <group
                position={[-1.436, 2.931, -1.921]}
                rotation={[-1.571, -1.535, -1.571]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_1.geometry}
                    material={materials.PaingingWhite}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_2.geometry}
                    material={NodeMaterial}
                />
            </group>
            <group position={[-1.933, 3.399, 1.416]} rotation={[-0.018, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_1.geometry}
                    material={materials.PaingingWhite}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_2.geometry}
                    material={TSImageMaterial}
                />
            </group>
            <group
                position={[1.523, 2.766, -1.921]}
                rotation={[-1.571, -1.536, -1.571]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_1.geometry}
                    material={materials.PaingingWhite}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045_2.geometry}
                    material={JSMaterial}
                />
            </group>
            <group position={[-1.637, 2.073, 0.286]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube028.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube028_1.geometry}
                    material={materials.WoodLight}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube028_2.geometry}
                    material={materials.DarkPlastic}
                />
            </group>
        </group>
    );
}

export default Room