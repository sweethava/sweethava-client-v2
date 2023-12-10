'use client'

import { useEffect, useMemo } from "react"
import useModel from "../../hooks/modelHooks"
import { useAppDispatch } from "../../hooks/storeHooks"
import { GetBookMaterial } from "../../materials/bookMaterial"
import { propsLoaded } from "../../store/loadingStore"
import { Material } from "three"

const Props = () => {
    // @ts-ignore
    const { nodes, materials } = useModel('/gltf/props.glb')
    const dispatch = useAppDispatch()
    const bookMaterials = useMemo(() => {
        let materials: Material[] = []

        for (let i = 0; i < 20; i++) {
            materials.push(GetBookMaterial())
        }

        return materials
    }, [])

    useEffect(() => {
        dispatch(propsLoaded())
    })

    return (
        <group dispose={null}>
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
                    material={bookMaterials[0]}
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
                    material={bookMaterials[1]}
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
                    material={bookMaterials[2]}
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
                    material={bookMaterials[3]}
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
                    material={bookMaterials[4]}
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
                    material={bookMaterials[5]}
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
                    material={bookMaterials[6]}
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
                    material={bookMaterials[7]}
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
                    material={bookMaterials[8]}
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
                    material={bookMaterials[9]}
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
                    material={bookMaterials[10]}
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
                    material={bookMaterials[11]}
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
                    material={bookMaterials[12]}
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
                    material={bookMaterials[13]}
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
                    material={bookMaterials[14]}
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
                    material={bookMaterials[15]}
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
                    material={bookMaterials[16]}
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
                    material={bookMaterials[17]}
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
                    material={bookMaterials[18]}
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
                    material={bookMaterials[19]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.BookPaper}
                />
            </group>
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

export default Props