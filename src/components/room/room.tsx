'use client'

import { useGLTF } from "@react-three/drei"
import { GetBookMaterial } from "../../materials/bookMaterial"
import { CSMaterial, JSMaterial, NodeMaterial, ReactImageMaterial, TSImageMaterial } from "../../materials/imageMaterial"
import { useEffect } from "react"
import { SetMaterials } from "../../utils/materials"

const Room = () => {
    // @ts-ignore
    const { nodes, materials } = useGLTF("gltf/room2.glb")

    useEffect(() => {
        SetMaterials(materials)
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
            <group position={[-0.378, 1.819, -1.168]} rotation={[0, 0.142, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane030.geometry}
                    material={materials.DarkPlastic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane030_1.geometry}
                    material={materials.Aluminum}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MousePad.geometry}
                material={materials.Fabric}
                position={[-0.152, 1.818, -1.166]}
            />
            <group position={[0.237, 1.844, -1.167]} rotation={[0, -0.125, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane032.geometry}
                    material={materials.Aluminum}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane032_1.geometry}
                    material={materials.DarkPlastic}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.WallTop.geometry}
                material={materials.Wood}
                position={[0, -0.021, 0]}
            />
            <group position={[-1.492, 0.799, 1.507]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane036.geometry}
                    material={materials.PaperBoxColor1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane036_1.geometry}
                    material={materials.PaperBoxColor2}
                />
            </group>
            <group position={[-1.492, 1.042, 1.507]} rotation={[0, 0.064, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane036.geometry}
                    material={materials.PaperBoxColor1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane036_1.geometry}
                    material={materials.PaperBoxColor2}
                />
            </group>
            <group position={[-1.308, 1.828, -0.667]} rotation={[0, 0.055, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002.geometry}
                    material={materials.Dishes}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002_1.geometry}
                    material={materials.Tea}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials.Dishes}
                position={[-1.308, 1.809, -0.667]}
                rotation={[0, 0.055, 0]}
            />
            <group position={[-1.69, 2.097, 1.1]} rotation={[-3.003, -0.086, -3.13]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-1.73, 2.096, 1.196]}
                rotation={[-2.923, -0.085, -3.123]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-1.703, 2.094, 1.292]}
                rotation={[-2.818, -0.083, -3.114]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group position={[-1.682, 1.936, 1.529]} rotation={[-1.571, 0, -3.054]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group position={[-1.652, 2.013, 1.539]} rotation={[-1.571, 0, -2.877]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group position={[-1.628, 2.089, 1.524]} rotation={[-1.571, 0, 3.091]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-0.519, 3.278, -1.866]}
                rotation={[-1.571, 0.001, 1.422]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-0.521, 3.356, -1.835]}
                rotation={[-1.571, 0.001, 1.686]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group position={[-0.5, 3.431, -1.815]} rotation={[-1.571, 0.001, 1.398]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-0.78, 3.413, -1.871]}
                rotation={[-1.603, -0.995, 1.546]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group position={[-0.345, 1.861, -1.701]} rotation={[-1.571, 0, 2.874]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-1.618, 2.367, 0.207]}
                rotation={[-1.571, 0.001, 1.109]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-1.51, 0.829, 1.279]}
                rotation={[-1.571, -0.001, -1.558]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-1.548, 0.902, 1.274]}
                rotation={[-1.627, 0.002, -1.596]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group position={[0.249, 1.349, -0.971]} rotation={[-1.571, 0, 2.874]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[0.383, 0.807, -1.274]}
                rotation={[-1.571, 0.001, 1.422]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group position={[0.38, 0.885, -1.243]} rotation={[-1.571, 0.001, 1.686]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[0.401, 0.961, -1.223]}
                rotation={[-1.571, 0.001, 1.398]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[0.162, 0.952, -1.279]}
                rotation={[-1.619, -1.205, 1.528]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
            <group
                position={[-0.118, 1.921, -1.655]}
                rotation={[-1.496, 0.269, 2.864]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={GetBookMaterial()}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>



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
                    material={TSImageMaterial}
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
                    material={NodeMaterial}
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
                    material={ReactImageMaterial}
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
                    material={JSMaterial}
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
                    material={CSMaterial}
                />
            </group>



            <group position={[-1.528, 2.47, 1.565]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006.geometry}
                    material={materials.Jug}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006_1.geometry}
                    material={materials.Mud}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Leaves1.geometry}
                material={materials.Plants}
                position={[-1.528, 2.605, 1.565]}
                rotation={[-0.013, 0.054, 0.001]}
                scale={0.708}
            />







            <group position={[1.372, 0.786, -1.452]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_1.geometry}
                    material={materials.Jug}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001_2.geometry}
                    material={materials.Mud}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Leave.geometry}
                material={materials.Plants}
                position={[1.453, 2.154, -1.543]}
                rotation={[0.425, 0.98, -0.374]}
                scale={0.875}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Leaves2.geometry}
                material={materials.Plants}
                position={[1.453, 2.154, -1.543]}
                rotation={[3.058, 0.932, -3.112]}
                scale={0.875}
            />
            <group position={[0.273, 3.243, -1.793]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006.geometry}
                    material={materials.Jug}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle006_1.geometry}
                    material={materials.Mud}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath001.geometry}
                material={materials.Plants}
                position={[0.273, 3.29, -1.793]}
                rotation={[0, 0.57, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_1.geometry}
                    material={materials.Plants}
                    position={[-0.034, -0.875, 0.47]}
                    rotation={[-2.47, -0.061, 1.972]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_2.geometry}
                    material={materials.Plants}
                    position={[-0.028, -0.863, 0.472]}
                    rotation={[2.151, 0.382, 2.662]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_3.geometry}
                    material={materials.Plants}
                    position={[-0.014, -0.82, 0.456]}
                    rotation={[-0.876, 0.182, 2.967]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_4.geometry}
                    material={materials.Plants}
                    position={[0.002, -0.744, 0.439]}
                    rotation={[1.781, -0.655, 0.2]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_5.geometry}
                    material={materials.Plants}
                    position={[0.004, -0.731, 0.441]}
                    rotation={[-0.958, -0.359, 0.029]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_6.geometry}
                    material={materials.Plants}
                    position={[0.01, -0.72, 0.44]}
                    rotation={[0.305, 0.302, 1.358]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_7.geometry}
                    material={materials.Plants}
                    position={[0.011, -0.675, 0.43]}
                    rotation={[-3.001, 0.007, 1.227]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_8.geometry}
                    material={materials.Plants}
                    position={[0.016, -0.665, 0.419]}
                    rotation={[0.18, -0.376, 1.57]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_9.geometry}
                    material={materials.Plants}
                    position={[0.012, -0.687, 0.424]}
                    rotation={[-3.12, -0.151, 1.887]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_10.geometry}
                    material={materials.Plants}
                    position={[0.011, -0.642, 0.418]}
                    rotation={[0.772, -0.148, 2.07]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_11.geometry}
                    material={materials.Plants}
                    position={[0.021, -0.629, 0.417]}
                    rotation={[0.964, 0.245, -0.783]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_12.geometry}
                    material={materials.Plants}
                    position={[0.012, -0.618, 0.411]}
                    rotation={[-2.278, 0.526, -2.013]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_13.geometry}
                    material={materials.Plants}
                    position={[0.017, -0.571, 0.408]}
                    rotation={[2.626, -0.183, -0.88]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_14.geometry}
                    material={materials.Plants}
                    position={[0.018, -0.558, 0.405]}
                    rotation={[-1.01, -0.068, 0.059]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_15.geometry}
                    material={materials.Plants}
                    position={[0.023, -0.583, 0.404]}
                    rotation={[0.908, 0.15, 2.192]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_16.geometry}
                    material={materials.Plants}
                    position={[0.022, -0.573, 0.4]}
                    rotation={[-2.141, -0.662, 2.068]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_17.geometry}
                    material={materials.Plants}
                    position={[0.009, -0.489, 0.381]}
                    rotation={[0.654, -0.164, 0.692]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_18.geometry}
                    material={materials.Plants}
                    position={[0.008, -0.477, 0.379]}
                    rotation={[1.983, 0.687, -0.743]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_19.geometry}
                    material={materials.Plants}
                    position={[0.008, -0.466, 0.375]}
                    rotation={[-2.73, 0.088, -1.071]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_20.geometry}
                    material={materials.Plants}
                    position={[0.013, -0.451, 0.38]}
                    rotation={[-2.769, -1.023, -0.96]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_21.geometry}
                    material={materials.Plants}
                    position={[0.006, -0.44, 0.373]}
                    rotation={[-0.442, -0.355, 0.177]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_22.geometry}
                    material={materials.Plants}
                    position={[0.017, -0.429, 0.369]}
                    rotation={[2.123, 0.831, 2.61]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_23.geometry}
                    material={materials.Plants}
                    position={[0.016, -0.416, 0.365]}
                    rotation={[0.571, 0.369, -2.057]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_24.geometry}
                    material={materials.Plants}
                    position={[0.017, -0.44, 0.371]}
                    rotation={[-0.182, -0.082, -1.663]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_25.geometry}
                    material={materials.Plants}
                    position={[0.003, -0.393, 0.364]}
                    rotation={[-0.57, -0.571, -2.134]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_26.geometry}
                    material={materials.Plants}
                    position={[0.011, -0.378, 0.362]}
                    rotation={[0.405, -0.457, -0.816]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_27.geometry}
                    material={materials.Plants}
                    position={[0, -0.368, 0.353]}
                    rotation={[-0.716, 0.182, -1.116]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_28.geometry}
                    material={materials.Plants}
                    position={[-0.001, -0.357, 0.352]}
                    rotation={[-0.073, -0.279, -2.639]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_29.geometry}
                    material={materials.Plants}
                    position={[0.01, -0.342, 0.35]}
                    rotation={[0.079, -1.089, -1.167]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_30.geometry}
                    material={materials.Plants}
                    position={[0.004, -0.33, 0.352]}
                    rotation={[-2.424, -0.39, -2.827]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_31.geometry}
                    material={materials.Plants}
                    position={[0.008, -0.32, 0.34]}
                    rotation={[1.905, 0.498, 0.066]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_32.geometry}
                    material={materials.Plants}
                    position={[0.006, -0.308, 0.336]}
                    rotation={[-1.236, 0.564, 0.639]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_33.geometry}
                    material={materials.Plants}
                    position={[-0.006, -0.296, 0.335]}
                    rotation={[1.136, 0.469, 2.182]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_34.geometry}
                    material={materials.Plants}
                    position={[-0.007, -0.284, 0.334]}
                    rotation={[-1.834, -0.299, 2.058]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_35.geometry}
                    material={materials.Plants}
                    position={[-0.001, -0.269, 0.336]}
                    rotation={[0.843, 0.05, 0.68]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_36.geometry}
                    material={materials.Plants}
                    position={[0.002, -0.296, 0.331]}
                    rotation={[2.573, 0.378, -1.044]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_37.geometry}
                    material={materials.Plants}
                    position={[0.002, -0.285, 0.329]}
                    rotation={[2.985, 0.243, -1.82]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_38.geometry}
                    material={materials.Plants}
                    position={[-0.009, -0.236, 0.316]}
                    rotation={[-1.665, 0.24, -0.191]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_39.geometry}
                    material={materials.Plants}
                    position={[-0.009, -0.259, 0.329]}
                    rotation={[0.852, -0.468, 2.716]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_40.geometry}
                    material={materials.Plants}
                    position={[-0.01, -0.248, 0.324]}
                    rotation={[-2.382, -0.25, 2.698]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_41.geometry}
                    material={materials.Plants}
                    position={[-0.01, -0.234, 0.325]}
                    rotation={[1.763, 0.192, 1.373]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_42.geometry}
                    material={materials.Plants}
                    position={[0.001, -0.257, 0.332]}
                    rotation={[1.834, -1.421, -1.757]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_43.geometry}
                    material={materials.Plants}
                    position={[-0.012, -0.213, 0.312]}
                    rotation={[-2.964, -0.801, -2.958]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_44.geometry}
                    material={materials.Plants}
                    position={[-0.004, -0.197, 0.316]}
                    rotation={[-2.993, 1.189, -0.722]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_45.geometry}
                    material={materials.Plants}
                    position={[-0.007, -0.224, 0.312]}
                    rotation={[-1.47, 0.35, 1.073]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_46.geometry}
                    material={materials.Plants}
                    position={[-0.013, -0.178, 0.3]}
                    rotation={[0.387, 0.666, 0.883]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_47.geometry}
                    material={materials.Plants}
                    position={[-0.004, -0.163, 0.303]}
                    rotation={[-2.618, 0.639, 1.227]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_48.geometry}
                    material={materials.Plants}
                    position={[-0.004, -0.188, 0.304]}
                    rotation={[1.449, 0.202, -3.116]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_49.geometry}
                    material={materials.Plants}
                    position={[-0.018, -0.141, 0.298]}
                    rotation={[0.037, -0.06, -1.591]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_50.geometry}
                    material={materials.Plants}
                    position={[-0.007, -0.128, 0.293]}
                    rotation={[-0.687, -0.401, -2.075]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_51.geometry}
                    material={materials.Plants}
                    position={[-0.006, -0.153, 0.294]}
                    rotation={[-1.522, -1.228, -3.034]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_52.geometry}
                    material={materials.Plants}
                    position={[-0.02, -0.107, 0.288]}
                    rotation={[0.46, -0.568, 0.102]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_53.geometry}
                    material={materials.Plants}
                    position={[-0.009, -0.095, 0.28]}
                    rotation={[-2.197, 0.644, -0.964]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_54.geometry}
                    material={materials.Plants}
                    position={[-0.007, -0.117, 0.287]}
                    rotation={[-1.173, 0.448, 1.161]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_55.geometry}
                    material={materials.Plants}
                    position={[-0.022, -0.075, 0.271]}
                    rotation={[1.103, 0.511, 1.121]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_56.geometry}
                    material={materials.Plants}
                    position={[-0.015, -0.064, 0.264]}
                    rotation={[1.888, 0.149, -1.016]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_57.geometry}
                    material={materials.Plants}
                    position={[-0.017, -0.086, 0.271]}
                    rotation={[-2.187, -0.1, -1.333]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_58.geometry}
                    material={materials.Plants}
                    position={[-0.024, -0.04, 0.267]}
                    rotation={[-2.702, -1.236, -0.541]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_59.geometry}
                    material={materials.Plants}
                    position={[-0.023, -0.028, 0.264]}
                    rotation={[-0.214, -1.043, 0.146]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_60.geometry}
                    material={materials.Plants}
                    position={[-0.015, -0.053, 0.261]}
                    rotation={[2.683, 0.922, 2.764]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_61.geometry}
                    material={materials.Plants}
                    position={[-0.025, -0.011, 0.249]}
                    rotation={[-0.707, 0.801, 2.894]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_62.geometry}
                    material={materials.Plants}
                    position={[-0.026, 0.001, 0.25]}
                    rotation={[1.422, 0.236, -0.695]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_63.geometry}
                    material={materials.Plants}
                    position={[-0.025, -0.019, 0.257]}
                    rotation={[-2.785, 0.422, -1.928]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_64.geometry}
                    material={materials.Plants}
                    position={[-0.025, -0.009, 0.256]}
                    rotation={[2.932, 0.133, -1.12]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_65.geometry}
                    material={materials.Plants}
                    position={[-0.021, 0.003, 0.254]}
                    rotation={[-1.952, -0.541, -0.469]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_66.geometry}
                    material={materials.Plants}
                    position={[-0.016, -0.021, 0.25]}
                    rotation={[2.247, -0.207, -2.794]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_67.geometry}
                    material={materials.Plants}
                    position={[-0.015, -0.012, 0.247]}
                    rotation={[-0.571, 0.367, -1.221]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_68.geometry}
                    material={materials.Plants}
                    position={[-0.018, 0.056, 0.22]}
                    rotation={[0.426, 0.062, -1.982]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_69.geometry}
                    material={materials.Plants}
                    position={[-0.018, 0.065, 0.216]}
                    rotation={[-0.081, -0.087, -1.336]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_70.geometry}
                    material={materials.Plants}
                    position={[-0.014, 0.101, 0.209]}
                    rotation={[-1.125, -0.192, -2.608]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_71.geometry}
                    material={materials.Plants}
                    position={[-0.021, 0.105, 0.195]}
                    rotation={[2.124, -1.117, 0.483]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_72.geometry}
                    material={materials.Plants}
                    position={[-0.017, 0.113, 0.191]}
                    rotation={[-0.339, 0.089, 0.205]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_73.geometry}
                    material={materials.Plants}
                    position={[-0.011, 0.142, 0.181]}
                    rotation={[1.741, 0.982, 2.157]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_74.geometry}
                    material={materials.Plants}
                    position={[-0.023, 0.164, 0.16]}
                    rotation={[0.913, -0.197, -1.91]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_75.geometry}
                    material={materials.Plants}
                    position={[-0.011, 0.156, 0.173]}
                    rotation={[-0.772, -0.341, -1.482]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_76.geometry}
                    material={materials.Plants}
                    position={[-0.021, 0.177, 0.155]}
                    rotation={[0.57, -0.038, -1.425]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_77.geometry}
                    material={materials.Plants}
                    position={[-0.01, 0.182, 0.152]}
                    rotation={[-1.509, -0.066, -2.334]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_78.geometry}
                    material={materials.Plants}
                    position={[-0.011, 0.174, 0.161]}
                    rotation={[2.739, -0.943, 0.566]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_79.geometry}
                    material={materials.Plants}
                    position={[-0.008, 0.174, 0.154]}
                    rotation={[2.785, -0.137, -2.845]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_80.geometry}
                    material={materials.Plants}
                    position={[-0.008, 0.177, 0.148]}
                    rotation={[-1.75, 0.768, -1.888]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_81.geometry}
                    material={materials.Plants}
                    position={[-0.017, 0.166, 0.153]}
                    rotation={[1.707, -0.048, -1.173]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_82.geometry}
                    material={materials.Plants}
                    position={[-0.01, 0.19, 0.143]}
                    rotation={[-1.919, -0.167, -1.456]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_83.geometry}
                    material={materials.Plants}
                    position={[-0.008, 0.193, 0.137]}
                    rotation={[2.031, 0.147, -1.841]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_84.geometry}
                    material={materials.Plants}
                    position={[-0.007, 0.181, 0.143]}
                    rotation={[-1.514, 0.133, -1.299]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_85.geometry}
                    material={materials.Plants}
                    position={[-0.003, 0.197, 0.111]}
                    rotation={[1.501, -0.4, -1.998]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_86.geometry}
                    material={materials.Plants}
                    position={[-0.009, 0.19, 0.09]}
                    rotation={[-2.411, 0.081, -2.713]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_87.geometry}
                    material={materials.Plants}
                    position={[-0.012, 0.197, 0.083]}
                    rotation={[-3.107, 0.425, 0.775]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_88.geometry}
                    material={materials.Plants}
                    position={[-0.011, 0.196, 0.077]}
                    rotation={[1.716, -0.318, -2.705]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_89.geometry}
                    material={materials.Plants}
                    position={[-0.006, 0.196, 0.07]}
                    rotation={[-1.908, -0.103, -2.662]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_90.geometry}
                    material={materials.Plants}
                    position={[-0.002, 0.191, 0.086]}
                    rotation={[1.751, 0.06, -0.242]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_91.geometry}
                    material={materials.Plants}
                    position={[-0.003, 0.187, 0.082]}
                    rotation={[3.11, 0.103, -1.856]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_92.geometry}
                    material={materials.Plants}
                    position={[0.003, 0.178, 0.059]}
                    rotation={[-2.111, -0.029, -0.596]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_93.geometry}
                    material={materials.Plants}
                    position={[0.002, 0.186, 0.07]}
                    rotation={[1.656, -0.968, -2.833]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_94.geometry}
                    material={materials.Plants}
                    position={[0.003, 0.167, 0.05]}
                    rotation={[-0.484, -0.674, -0.895]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_95.geometry}
                    material={materials.Plants}
                    position={[-0.003, 0.138, 0.029]}
                    rotation={[-0.636, -0.041, -2.464]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_96.geometry}
                    material={materials.Plants}
                    position={[-0.006, 0.131, 0.021]}
                    rotation={[-2.246, -1.049, 2.361]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_97.geometry}
                    material={materials.Plants}
                    position={[-0.007, 0.123, 0.014]}
                    rotation={[1.538, -0.914, 1.499]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_98.geometry}
                    material={materials.Plants}
                    position={[0.005, 0.116, 0.002]}
                    rotation={[1.844, 0.803, -1.803]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_99.geometry}
                    material={materials.Plants}
                    position={[0.006, 0.134, 0.017]}
                    rotation={[-2.263, 0.846, -2.177]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_100.geometry}
                    material={materials.Plants}
                    position={[0.007, 0.124, 0.013]}
                    rotation={[2.189, 0.513, -1.284]}
                    scale={0.175}
                />
            </mesh>
















            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath002.geometry}
                material={materials.Plants}
                position={[0.273, 3.29, -1.793]}
                rotation={[0, 1.178, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_101.geometry}
                    material={materials.Plants}
                    position={[-0.089, -0.871, 0.494]}
                    rotation={[-0.812, -0.374, 0.763]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_102.geometry}
                    material={materials.Plants}
                    position={[-0.089, -0.87, 0.492]}
                    rotation={[1.587, -0.11, 1.631]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_103.geometry}
                    material={materials.Plants}
                    position={[-0.029, -0.785, 0.462]}
                    rotation={[-1.677, 0.175, 1.741]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_104.geometry}
                    material={materials.Plants}
                    position={[-0.028, -0.772, 0.456]}
                    rotation={[0.807, 0.421, 0.738]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_105.geometry}
                    material={materials.Plants}
                    position={[-0.01, -0.72, 0.438]}
                    rotation={[-2.108, 0.432, 0.699]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_106.geometry}
                    material={materials.Plants}
                    position={[-0.002, -0.706, 0.438]}
                    rotation={[1.447, -0.027, 2.929]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_107.geometry}
                    material={materials.Plants}
                    position={[-0.003, -0.695, 0.428]}
                    rotation={[-1.477, -0.367, -3.106]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_108.geometry}
                    material={materials.Plants}
                    position={[0.001, -0.694, 0.428]}
                    rotation={[1.375, -0.383, 0.214]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_109.geometry}
                    material={materials.Plants}
                    position={[0.003, -0.651, 0.416]}
                    rotation={[3.072, 0.077, -1.88]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_110.geometry}
                    material={materials.Plants}
                    position={[0.001, -0.665, 0.425]}
                    rotation={[-1.987, 0.017, -0.549]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_111.geometry}
                    material={materials.Plants}
                    position={[0.006, -0.664, 0.427]}
                    rotation={[-0.464, -0.544, 1.377]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_112.geometry}
                    material={materials.Plants}
                    position={[0.005, -0.622, 0.41]}
                    rotation={[2.771, -0.071, 2.208]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_113.geometry}
                    material={materials.Plants}
                    position={[0.013, -0.608, 0.411]}
                    rotation={[0.832, 0.156, 2.886]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_114.geometry}
                    material={materials.Plants}
                    position={[0.014, -0.608, 0.404]}
                    rotation={[0.521, -0.391, -1.208]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_115.geometry}
                    material={materials.Plants}
                    position={[0.007, -0.561, 0.397]}
                    rotation={[-1.552, -0.26, -2.092]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_116.geometry}
                    material={materials.Plants}
                    position={[0.016, -0.578, 0.402]}
                    rotation={[1.534, -0.435, -0.779]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_117.geometry}
                    material={materials.Plants}
                    position={[0.008, -0.545, 0.395]}
                    rotation={[-2.967, 0.365, -2.514]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_118.geometry}
                    material={materials.Plants}
                    position={[0.007, -0.5, 0.376]}
                    rotation={[2.927, 0.886, -1.353]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_119.geometry}
                    material={materials.Plants}
                    position={[0.017, -0.516, 0.383]}
                    rotation={[-2.201, -0.016, -0.025]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_120.geometry}
                    material={materials.Plants}
                    position={[0.013, -0.516, 0.379]}
                    rotation={[-0.011, -0.646, 1.472]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_121.geometry}
                    material={materials.Plants}
                    position={[0.009, -0.5, 0.375]}
                    rotation={[1.975, -0.694, 1.109]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_122.geometry}
                    material={materials.Plants}
                    position={[0.005, -0.485, 0.374]}
                    rotation={[-0.83, -0.545, 0.757]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_123.geometry}
                    material={materials.Plants}
                    position={[0.006, -0.482, 0.379]}
                    rotation={[1.862, -0.25, 1.915]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_124.geometry}
                    material={materials.Plants}
                    position={[0.009, -0.465, 0.377]}
                    rotation={[1.182, 0.376, -1.627]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_125.geometry}
                    material={materials.Plants}
                    position={[0.014, -0.483, 0.38]}
                    rotation={[-2.257, 0.677, -2.805]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_126.geometry}
                    material={materials.Plants}
                    position={[0.016, -0.483, 0.374]}
                    rotation={[3.105, 0.338, 0.639]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_127.geometry}
                    material={materials.Plants}
                    position={[0.015, -0.466, 0.369]}
                    rotation={[1.743, -0.612, -2.724]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_128.geometry}
                    material={materials.Plants}
                    position={[0.006, -0.453, 0.364]}
                    rotation={[-0.29, -0.043, -0.85]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_129.geometry}
                    material={materials.Plants}
                    position={[0.005, -0.451, 0.364]}
                    rotation={[-0.104, 0.374, -2.065]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_130.geometry}
                    material={materials.Plants}
                    position={[0.002, -0.434, 0.363]}
                    rotation={[0.288, -0.344, -1.593]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_131.geometry}
                    material={materials.Plants}
                    position={[0.004, -0.452, 0.366]}
                    rotation={[-0.779, -0.472, -1.696]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_132.geometry}
                    material={materials.Plants}
                    position={[0.005, -0.449, 0.371]}
                    rotation={[-2.004, -0.066, 2.57]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_133.geometry}
                    material={materials.Plants}
                    position={[0.002, -0.399, 0.36]}
                    rotation={[0.922, 0.513, 0.331]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_134.geometry}
                    material={materials.Plants}
                    position={[0.012, -0.417, 0.362]}
                    rotation={[-2.484, 0.279, -0.122]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_135.geometry}
                    material={materials.Plants}
                    position={[0.011, -0.417, 0.356]}
                    rotation={[-0.633, -0.15, 1.131]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_136.geometry}
                    material={materials.Plants}
                    position={[0.006, -0.401, 0.35]}
                    rotation={[2.12, 0.011, 1.624]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_137.geometry}
                    material={materials.Plants}
                    position={[-0.002, -0.385, 0.352]}
                    rotation={[1.224, -0.679, -2.554]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_138.geometry}
                    material={materials.Plants}
                    position={[0.01, -0.382, 0.353]}
                    rotation={[-2.315, -0.366, -2.88]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_139.geometry}
                    material={materials.Plants}
                    position={[-0.006, -0.332, 0.339]}
                    rotation={[2.254, 0.208, 0.593]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_140.geometry}
                    material={materials.Plants}
                    position={[-0.003, -0.35, 0.347]}
                    rotation={[-1.228, -0.67, 0.716]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_141.geometry}
                    material={materials.Plants}
                    position={[0, -0.35, 0.338]}
                    rotation={[0.444, -0.053, 0.717]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_142.geometry}
                    material={materials.Plants}
                    position={[-0.008, -0.299, 0.327]}
                    rotation={[1.653, 0.86, -0.585]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_143.geometry}
                    material={materials.Plants}
                    position={[0.002, -0.315, 0.34]}
                    rotation={[-2.194, 0.317, -0.391]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_144.geometry}
                    material={materials.Plants}
                    position={[-0.008, -0.281, 0.322]}
                    rotation={[1.628, -0.695, -2.692]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_145.geometry}
                    material={materials.Plants}
                    position={[-0.011, -0.264, 0.319]}
                    rotation={[-1.966, -0.554, -2.491]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_146.geometry}
                    material={materials.Plants}
                    position={[-0.009, -0.281, 0.33]}
                    rotation={[-2.62, 0.419, 1.787]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_147.geometry}
                    material={materials.Plants}
                    position={[-0.006, -0.282, 0.321]}
                    rotation={[0.655, 0.289, 1.852]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_148.geometry}
                    material={materials.Plants}
                    position={[-0.012, -0.227, 0.319]}
                    rotation={[1.541, -0.4, -0.633]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_149.geometry}
                    material={materials.Plants}
                    position={[-0.009, -0.246, 0.324]}
                    rotation={[-2.698, -0.121, -2.108]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_150.geometry}
                    material={materials.Plants}
                    position={[-0.003, -0.244, 0.322]}
                    rotation={[-1.62, 0.46, 0.393]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_151.geometry}
                    material={materials.Plants}
                    position={[-0.008, -0.23, 0.307]}
                    rotation={[0.378, 0.08, 1.915]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_152.geometry}
                    material={materials.Plants}
                    position={[-0.016, -0.213, 0.31]}
                    rotation={[-2.643, -0.087, 1.856]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_153.geometry}
                    material={materials.Plants}
                    position={[-0.014, -0.21, 0.313]}
                    rotation={[0.636, 0.069, 1.419]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_154.geometry}
                    material={materials.Plants}
                    position={[-0.015, -0.193, 0.31]}
                    rotation={[1.942, -0.314, -0.27]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_155.geometry}
                    material={materials.Plants}
                    position={[-0.007, -0.214, 0.304]}
                    rotation={[-1.159, -0.313, -0.141]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_156.geometry}
                    material={materials.Plants}
                    position={[-0.008, -0.212, 0.303]}
                    rotation={[1.839, 0.311, -3.109]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_157.geometry}
                    material={materials.Plants}
                    position={[-0.009, -0.161, 0.29]}
                    rotation={[-0.22, 0.149, -1.915]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_158.geometry}
                    material={materials.Plants}
                    position={[-0.009, -0.18, 0.295]}
                    rotation={[-1.484, -0.479, 3.035]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_159.geometry}
                    material={materials.Plants}
                    position={[-0.01, -0.141, 0.295]}
                    rotation={[1.924, -0.69, 0.972]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_160.geometry}
                    material={materials.Plants}
                    position={[-0.009, -0.127, 0.283]}
                    rotation={[-0.814, 0.056, 0.657]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_161.geometry}
                    material={materials.Plants}
                    position={[-0.022, -0.112, 0.279]}
                    rotation={[2.36, 0.696, 2.571]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_162.geometry}
                    material={materials.Plants}
                    position={[-0.018, -0.108, 0.287]}
                    rotation={[-0.804, 0.379, 2.75]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_163.geometry}
                    material={materials.Plants}
                    position={[-0.024, -0.062, 0.262]}
                    rotation={[1.572, -0.275, -0.105]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_164.geometry}
                    material={materials.Plants}
                    position={[-0.021, -0.077, 0.277]}
                    rotation={[-2.158, -0.5, -1.031]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_165.geometry}
                    material={materials.Plants}
                    position={[-0.014, -0.075, 0.276]}
                    rotation={[-0.812, -0.374, 0.763]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_166.geometry}
                    material={materials.Plants}
                    position={[-0.025, -0.031, 0.252]}
                    rotation={[1.587, -0.11, 1.631]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_167.geometry}
                    material={materials.Plants}
                    position={[-0.025, -0.047, 0.259]}
                    rotation={[-1.677, 0.175, 1.741]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_168.geometry}
                    material={materials.Plants}
                    position={[-0.021, -0.043, 0.267]}
                    rotation={[0.807, 0.421, 0.738]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_169.geometry}
                    material={materials.Plants}
                    position={[-0.016, -0.031, 0.251]}
                    rotation={[-2.108, 0.432, 0.699]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_170.geometry}
                    material={materials.Plants}
                    position={[-0.02, -0.013, 0.258]}
                    rotation={[1.447, -0.027, 2.929]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_171.geometry}
                    material={materials.Plants}
                    position={[-0.014, -0.013, 0.252]}
                    rotation={[-1.477, -0.367, -3.106]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_172.geometry}
                    material={materials.Plants}
                    position={[-0.017, -0.001, 0.24]}
                    rotation={[1.375, -0.383, 0.214]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_173.geometry}
                    material={materials.Plants}
                    position={[-0.021, -0.017, 0.245]}
                    rotation={[3.072, 0.077, -1.88]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_174.geometry}
                    material={materials.Plants}
                    position={[-0.02, 0.047, 0.235]}
                    rotation={[-1.987, 0.017, -0.549]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_175.geometry}
                    material={materials.Plants}
                    position={[-0.016, 0.059, 0.227]}
                    rotation={[-0.464, -0.544, 1.377]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_176.geometry}
                    material={materials.Plants}
                    position={[-0.015, 0.043, 0.229]}
                    rotation={[2.771, -0.071, 2.208]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_177.geometry}
                    material={materials.Plants}
                    position={[-0.026, 0.073, 0.222]}
                    rotation={[0.832, 0.156, 2.886]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_178.geometry}
                    material={materials.Plants}
                    position={[-0.016, 0.085, 0.215]}
                    rotation={[0.521, -0.391, -1.208]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_179.geometry}
                    material={materials.Plants}
                    position={[-0.015, 0.069, 0.218]}
                    rotation={[-1.552, -0.26, -2.092]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_180.geometry}
                    material={materials.Plants}
                    position={[-0.015, 0.096, 0.208]}
                    rotation={[1.534, -0.435, -0.779]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_181.geometry}
                    material={materials.Plants}
                    position={[-0.017, 0.105, 0.195]}
                    rotation={[-2.967, 0.365, -2.514]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_182.geometry}
                    material={materials.Plants}
                    position={[-0.018, 0.092, 0.201]}
                    rotation={[2.927, 0.886, -1.353]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_183.geometry}
                    material={materials.Plants}
                    position={[-0.027, 0.12, 0.195]}
                    rotation={[-2.201, -0.016, -0.025]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_184.geometry}
                    material={materials.Plants}
                    position={[-0.019, 0.152, 0.18]}
                    rotation={[-0.011, -0.646, 1.472]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_185.geometry}
                    material={materials.Plants}
                    position={[-0.012, 0.158, 0.172]}
                    rotation={[1.975, -0.694, 1.109]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_186.geometry}
                    material={materials.Plants}
                    position={[-0.021, 0.183, 0.14]}
                    rotation={[-0.83, -0.545, 0.757]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_187.geometry}
                    material={materials.Plants}
                    position={[-0.007, 0.191, 0.137]}
                    rotation={[1.862, -0.25, 1.915]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_188.geometry}
                    material={materials.Plants}
                    position={[-0.016, 0.187, 0.125]}
                    rotation={[1.182, 0.376, -1.627]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_189.geometry}
                    material={materials.Plants}
                    position={[-0.019, 0.191, 0.126]}
                    rotation={[-2.257, 0.677, -2.805]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_190.geometry}
                    material={materials.Plants}
                    position={[-0.005, 0.198, 0.122]}
                    rotation={[3.105, 0.338, 0.639]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_191.geometry}
                    material={materials.Plants}
                    position={[-0.006, 0.194, 0.13]}
                    rotation={[1.743, -0.612, -2.724]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_192.geometry}
                    material={materials.Plants}
                    position={[-0.017, 0.196, 0.112]}
                    rotation={[-0.29, -0.043, -0.85]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_193.geometry}
                    material={materials.Plants}
                    position={[-0.01, 0.18, 0.058]}
                    rotation={[-0.104, 0.374, -2.065]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_194.geometry}
                    material={materials.Plants}
                    position={[-0.009, 0.191, 0.064]}
                    rotation={[0.288, -0.344, -1.593]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_195.geometry}
                    material={materials.Plants}
                    position={[-0.003, 0.181, 0.07]}
                    rotation={[-0.779, -0.472, -1.696]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_196.geometry}
                    material={materials.Plants}
                    position={[0.005, 0.167, 0.04]}
                    rotation={[-2.004, -0.066, 2.57]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_197.geometry}
                    material={materials.Plants}
                    position={[-0.003, 0.16, 0.029]}
                    rotation={[0.922, 0.513, 0.331]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_198.geometry}
                    material={materials.Plants}
                    position={[-0.006, 0.133, 0.014]}
                    rotation={[-2.484, 0.279, -0.122]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_199.geometry}
                    material={materials.Plants}
                    position={[-0.003, 0.12, 0.002]}
                    rotation={[-0.633, -0.15, 1.131]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_200.geometry}
                    material={materials.Plants}
                    position={[-0.002, 0.129, 0.022]}
                    rotation={[2.12, 0.011, 1.624]}
                    scale={0.175}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath003.geometry}
                material={materials.Plants}
                position={[0.273, 3.29, -1.793]}
                rotation={[0, 0.222, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_201.geometry}
                    material={materials.Plants}
                    position={[0.048, -0.782, 0.497]}
                    rotation={[-1.176, -0.748, -2.469]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_202.geometry}
                    material={materials.Plants}
                    position={[0.048, -0.767, 0.489]}
                    rotation={[-2.739, -0.19, 2.401]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_203.geometry}
                    material={materials.Plants}
                    position={[0.037, -0.704, 0.463]}
                    rotation={[0.828, 0.401, 1.28]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_204.geometry}
                    material={materials.Plants}
                    position={[0.039, -0.714, 0.462]}
                    rotation={[2.833, -0.561, 0.182]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_205.geometry}
                    material={materials.Plants}
                    position={[0.036, -0.696, 0.459]}
                    rotation={[2.692, -0.016, -2.633]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_206.geometry}
                    material={materials.Plants}
                    position={[0.035, -0.678, 0.455]}
                    rotation={[-2.361, 0.786, -2.255]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_207.geometry}
                    material={materials.Plants}
                    position={[0.03, -0.662, 0.447]}
                    rotation={[2.92, -0.042, -0.483]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_208.geometry}
                    material={materials.Plants}
                    position={[0.032, -0.643, 0.442]}
                    rotation={[-1.867, -1.066, -0.465]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_209.geometry}
                    material={materials.Plants}
                    position={[0.029, -0.625, 0.435]}
                    rotation={[2.615, -0.331, -3.007]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_210.geometry}
                    material={materials.Plants}
                    position={[0.021, -0.607, 0.43]}
                    rotation={[-1.18, 0.539, -1.895]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_211.geometry}
                    material={materials.Plants}
                    position={[0.029, -0.616, 0.429]}
                    rotation={[-1.828, -0.014, 1.893]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_212.geometry}
                    material={materials.Plants}
                    position={[0.023, -0.6, 0.418]}
                    rotation={[2.428, 0.314, 2.369]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_213.geometry}
                    material={materials.Plants}
                    position={[0.019, -0.609, 0.424]}
                    rotation={[0.78, 0.28, -2.668]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_214.geometry}
                    material={materials.Plants}
                    position={[0.005, -0.53, 0.405]}
                    rotation={[0.236, -0.008, -1.3]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_215.geometry}
                    material={materials.Plants}
                    position={[0.007, -0.511, 0.39]}
                    rotation={[-0.619, 0.001, -1.78]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_216.geometry}
                    material={materials.Plants}
                    position={[0.001, -0.488, 0.393]}
                    rotation={[-1.1, -0.855, -3.073]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_217.geometry}
                    material={materials.Plants}
                    position={[0.007, -0.5, 0.389]}
                    rotation={[2.767, -0.998, 2.06]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_218.geometry}
                    material={materials.Plants}
                    position={[-0.004, -0.481, 0.381]}
                    rotation={[-0.182, 0.571, 0.726]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_219.geometry}
                    material={materials.Plants}
                    position={[-0.01, -0.459, 0.38]}
                    rotation={[3.032, 0.96, 1.679]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_220.geometry}
                    material={materials.Plants}
                    position={[-0.008, -0.47, 0.382]}
                    rotation={[1.146, 0.253, -2.75]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_221.geometry}
                    material={materials.Plants}
                    position={[-0.002, -0.446, 0.378]}
                    rotation={[-1.504, -0.193, -2.971]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_222.geometry}
                    material={materials.Plants}
                    position={[0, -0.457, 0.378]}
                    rotation={[3.101, -0.28, 1.66]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_223.geometry}
                    material={materials.Plants}
                    position={[-0.005, -0.47, 0.377]}
                    rotation={[1.722, -0.156, 2.966]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_224.geometry}
                    material={materials.Plants}
                    position={[-0.01, -0.449, 0.372]}
                    rotation={[0.118, 0.12, -1.374]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_225.geometry}
                    material={materials.Plants}
                    position={[-0.013, -0.425, 0.375]}
                    rotation={[-0.037, 0.274, -1.447]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_226.geometry}
                    material={materials.Plants}
                    position={[-0.003, -0.437, 0.371]}
                    rotation={[-1.492, 0.164, 3.057]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_227.geometry}
                    material={materials.Plants}
                    position={[-0.013, -0.417, 0.361]}
                    rotation={[2.05, -0.299, 0.496]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_228.geometry}
                    material={materials.Plants}
                    position={[-0.016, -0.427, 0.368]}
                    rotation={[-2.17, -1.154, -0.669]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_229.geometry}
                    material={materials.Plants}
                    position={[-0.019, -0.405, 0.366]}
                    rotation={[2.587, -1.256, -3.13]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_230.geometry}
                    material={materials.Plants}
                    position={[-0.022, -0.382, 0.361]}
                    rotation={[-2.202, -0.336, -2.486]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_231.geometry}
                    material={materials.Plants}
                    position={[-0.01, -0.392, 0.36]}
                    rotation={[-2.458, 0.634, 1.521]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_232.geometry}
                    material={materials.Plants}
                    position={[-0.013, -0.37, 0.356]}
                    rotation={[-0.119, 0.767, 1.2]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_233.geometry}
                    material={materials.Plants}
                    position={[-0.023, -0.351, 0.343]}
                    rotation={[2.16, 0.41, 0.165]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_234.geometry}
                    material={materials.Plants}
                    position={[-0.019, -0.326, 0.342]}
                    rotation={[-1.678, -0.561, 0.269]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_235.geometry}
                    material={materials.Plants}
                    position={[-0.038, -0.271, 0.326]}
                    rotation={[0.932, -0.711, 1.705]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_236.geometry}
                    material={materials.Plants}
                    position={[-0.035, -0.249, 0.314]}
                    rotation={[0.992, -0.007, -0.616]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_237.geometry}
                    material={materials.Plants}
                    position={[-0.039, -0.223, 0.32]}
                    rotation={[-0.955, 0.527, -0.509]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_238.geometry}
                    material={materials.Plants}
                    position={[-0.037, -0.235, 0.323]}
                    rotation={[-0.715, 0.708, 1.718]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_239.geometry}
                    material={materials.Plants}
                    position={[-0.035, -0.215, 0.305]}
                    rotation={[2.44, 0.239, 0.906]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_240.geometry}
                    material={materials.Plants}
                    position={[-0.037, -0.226, 0.308]}
                    rotation={[2.061, -0.014, -2.235]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_241.geometry}
                    material={materials.Plants}
                    position={[-0.038, -0.238, 0.312]}
                    rotation={[-1.513, 0.073, -1.702]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_242.geometry}
                    material={materials.Plants}
                    position={[-0.037, -0.178, 0.306]}
                    rotation={[1.422, -0.026, -1.348]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_243.geometry}
                    material={materials.Plants}
                    position={[-0.039, -0.158, 0.289]}
                    rotation={[-2.071, 0.024, -2.003]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_244.geometry}
                    material={materials.Plants}
                    position={[-0.04, -0.17, 0.292]}
                    rotation={[-1.861, 0.157, 0.982]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_245.geometry}
                    material={materials.Plants}
                    position={[-0.043, -0.148, 0.285]}
                    rotation={[1.774, 0.094, 2.633]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_246.geometry}
                    material={materials.Plants}
                    position={[-0.041, -0.125, 0.279]}
                    rotation={[0.411, 0.066, -1.685]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_247.geometry}
                    material={materials.Plants}
                    position={[-0.045, -0.137, 0.282]}
                    rotation={[-0.822, -0.266, -2.007]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_248.geometry}
                    material={materials.Plants}
                    position={[-0.039, -0.081, 0.268]}
                    rotation={[0.356, -1.099, -1.421]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_249.geometry}
                    material={materials.Plants}
                    position={[-0.048, -0.092, 0.27]}
                    rotation={[-2.626, -0.369, -2.918]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_250.geometry}
                    material={materials.Plants}
                    position={[-0.051, -0.07, 0.267]}
                    rotation={[1.444, 0.987, -0.221]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_251.geometry}
                    material={materials.Plants}
                    position={[-0.048, -0.046, 0.267]}
                    rotation={[-1.816, 0.577, 0.325]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_252.geometry}
                    material={materials.Plants}
                    position={[-0.039, -0.058, 0.267]}
                    rotation={[-0.053, 0.125, 1.716]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_253.geometry}
                    material={materials.Plants}
                    position={[-0.047, -0.071, 0.262]}
                    rotation={[2.058, -0.396, 0.506]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_254.geometry}
                    material={materials.Plants}
                    position={[-0.044, -0.015, 0.257]}
                    rotation={[-1.012, -0.47, 0.381]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_255.geometry}
                    material={materials.Plants}
                    position={[-0.039, -0.026, 0.257]}
                    rotation={[1.085, -0.18, 1.624]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_256.geometry}
                    material={materials.Plants}
                    position={[-0.039, -0.037, 0.259]}
                    rotation={[-2.207, -0.156, 1.728]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_257.geometry}
                    material={materials.Plants}
                    position={[-0.041, 0.071, 0.223]}
                    rotation={[2.319, 0.304, 2.711]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_258.geometry}
                    material={materials.Plants}
                    position={[-0.045, 0.087, 0.213]}
                    rotation={[-0.791, 0.35, 3.06]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_259.geometry}
                    material={materials.Plants}
                    position={[-0.042, 0.079, 0.219]}
                    rotation={[-2.828, -0.396, 1.678]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_260.geometry}
                    material={materials.Plants}
                    position={[-0.033, 0.118, 0.199]}
                    rotation={[0.892, -0.433, 1.713]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_261.geometry}
                    material={materials.Plants}
                    position={[-0.031, 0.109, 0.2]}
                    rotation={[1.651, -0.907, -0.241]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_262.geometry}
                    material={materials.Plants}
                    position={[-0.032, 0.1, 0.203]}
                    rotation={[-1.338, -0.923, -0.828]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_263.geometry}
                    material={materials.Plants}
                    position={[-0.026, 0.158, 0.173]}
                    rotation={[2.229, 0.719, -2.558]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_264.geometry}
                    material={materials.Plants}
                    position={[-0.025, 0.15, 0.175]}
                    rotation={[-1.567, 0.832, -2.378]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_265.geometry}
                    material={materials.Plants}
                    position={[-0.036, 0.16, 0.163]}
                    rotation={[-2.552, -0.471, 1.075]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_266.geometry}
                    material={materials.Plants}
                    position={[-0.034, 0.172, 0.155]}
                    rotation={[1.165, -0.795, 1.926]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_267.geometry}
                    material={materials.Plants}
                    position={[-0.035, 0.167, 0.16]}
                    rotation={[-2.403, 0.41, 2.38]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_268.geometry}
                    material={materials.Plants}
                    position={[-0.036, 0.162, 0.166]}
                    rotation={[0.819, 0.81, 0.861]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_269.geometry}
                    material={materials.Plants}
                    position={[-0.021, 0.171, 0.158]}
                    rotation={[-3.062, -0.097, 0.3]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_270.geometry}
                    material={materials.Plants}
                    position={[-0.024, 0.183, 0.151]}
                    rotation={[1.519, -1.266, 2.91]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_271.geometry}
                    material={materials.Plants}
                    position={[-0.027, 0.179, 0.156]}
                    rotation={[-2.601, -0.845, -2.96]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_272.geometry}
                    material={materials.Plants}
                    position={[-0.021, 0.177, 0.139]}
                    rotation={[-2.981, 1.067, 2.34]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_273.geometry}
                    material={materials.Plants}
                    position={[-0.026, 0.193, 0.134]}
                    rotation={[-0.032, 0.942, 1.965]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_274.geometry}
                    material={materials.Plants}
                    position={[-0.019, 0.19, 0.142]}
                    rotation={[-2.497, 0.266, 1.493]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_275.geometry}
                    material={materials.Plants}
                    position={[-0.015, 0.187, 0.127]}
                    rotation={[0.58, 0.062, 1.697]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_276.geometry}
                    material={materials.Plants}
                    position={[-0.019, 0.183, 0.13]}
                    rotation={[1.629, -0.392, -0.383]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_277.geometry}
                    material={materials.Plants}
                    position={[-0.018, 0.187, 0.121]}
                    rotation={[-2.105, -0.554, -1.289]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_278.geometry}
                    material={materials.Plants}
                    position={[-0.006, 0.196, 0.101]}
                    rotation={[2.362, -0.034, -2.159]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_279.geometry}
                    material={materials.Plants}
                    position={[-0.012, 0.191, 0.104]}
                    rotation={[-2.386, 0.369, -2.158]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_280.geometry}
                    material={materials.Plants}
                    position={[-0.015, 0.191, 0.108]}
                    rotation={[-2.874, -0.184, -0.118]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_281.geometry}
                    material={materials.Plants}
                    position={[-0.014, 0.2, 0.082]}
                    rotation={[-0.025, -1.417, 1.312]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_282.geometry}
                    material={materials.Plants}
                    position={[-0.013, 0.19, 0.09]}
                    rotation={[0.225, -0.478, 0.084]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_283.geometry}
                    material={materials.Plants}
                    position={[-0.008, 0.199, 0.077]}
                    rotation={[-1.012, 1.28, 0.035]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_284.geometry}
                    material={materials.Plants}
                    position={[-0.001, 0.192, 0.067]}
                    rotation={[0.224, 0.558, 2.768]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_285.geometry}
                    material={materials.Plants}
                    position={[-0.01, 0.185, 0.076]}
                    rotation={[1.142, -0.581, -0.904]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_286.geometry}
                    material={materials.Plants}
                    position={[-0.009, 0.187, 0.081]}
                    rotation={[-2.073, -0.42, -1.932]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_287.geometry}
                    material={materials.Plants}
                    position={[0.003, 0.176, 0.052]}
                    rotation={[2.188, 0.164, -1.408]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_288.geometry}
                    material={materials.Plants}
                    position={[-0.004, 0.174, 0.062]}
                    rotation={[-0.965, 0.486, -0.197]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_289.geometry}
                    material={materials.Plants}
                    position={[-0.012, 0.182, 0.064]}
                    rotation={[0.796, 0.333, 2.95]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_290.geometry}
                    material={materials.Plants}
                    position={[-0.002, 0.162, 0.03]}
                    rotation={[0.205, -0.852, -1.673]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_291.geometry}
                    material={materials.Plants}
                    position={[-0.008, 0.161, 0.044]}
                    rotation={[-1.912, -0.831, -2.486]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_292.geometry}
                    material={materials.Plants}
                    position={[-0.007, 0.153, 0.026]}
                    rotation={[1.068, 0.449, -0.435]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_293.geometry}
                    material={materials.Plants}
                    position={[0.006, 0.133, 0.021]}
                    rotation={[-2.866, 0.702, -1.784]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_294.geometry}
                    material={materials.Plants}
                    position={[-0.001, 0.139, 0.03]}
                    rotation={[-1.732, 0.409, 0.544]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_295.geometry}
                    material={materials.Plants}
                    position={[-0.003, 0.146, 0.035]}
                    rotation={[0.54, 0.007, 1.938]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_296.geometry}
                    material={materials.Plants}
                    position={[-0.006, 0.107, -0.002]}
                    rotation={[1.976, -0.955, 0.12]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_297.geometry}
                    material={materials.Plants}
                    position={[-0.004, 0.118, 0.002]}
                    rotation={[-0.677, -0.643, -0.05]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_298.geometry}
                    material={materials.Plants}
                    position={[0.004, 0.128, 0.008]}
                    rotation={[0.132, 0.676, 1.037]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_299.geometry}
                    material={materials.Plants}
                    position={[0.006, 0.107, -0.003]}
                    rotation={[-2.788, 0.654, 1.366]}
                    scale={0.175}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Leave_300.geometry}
                    material={materials.Plants}
                    position={[-0.007, 0.115, 0.007]}
                    rotation={[0.044, 0.117, 1.865]}
                    scale={0.175}
                />
            </mesh>
            <group
                position={[-0.666, 1.867, -1.578]}
                rotation={[-0.054, 0.271, 0.014]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle011.geometry}
                    material={materials.Metallic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle011_1.geometry}
                    material={materials.Wood}
                />
            </group>
            <group
                position={[-0.67, 2.242, -1.714]}
                rotation={[-1.745, -0.092, 0.48]}
                scale={0.208}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials.Aluminum}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials.DarkFabric}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_2.geometry}
                    material={materials.DarkPlastic}
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
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.PenJug.geometry}
                material={materials.Jug}
                position={[-1.69, 1.864, -0.317]}
            />
            <group
                position={[-1.688, 1.904, -0.321]}
                rotation={[0.385, 0.083, -0.049]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials.PenColor2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_1.geometry}
                    material={materials.WoodLight}
                />
            </group>
            <group
                position={[-1.687, 1.904, -0.314]}
                rotation={[-0.292, 0.121, 0.144]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials.PenColor2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_1.geometry}
                    material={materials.WoodLight}
                />
            </group>
            <group
                position={[-1.265, 1.837, -0.301]}
                rotation={[-1.578, -0.021, -1.909]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    material={materials.PenColor1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_1.geometry}
                    material={materials.Metallic}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_2.geometry}
                    material={materials.DarkPlastic}
                />
            </group>
        </group>
    )
}

export default Room