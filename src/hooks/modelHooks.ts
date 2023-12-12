import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import { SetMaterials } from "../utils/materials"
import { BufferGeometry, Material, Object3D } from "three"

type ExtendedObject3D = Object3D & {
    geometry?: BufferGeometry
}
type ModelReturnType = {
    nodes: {
        [key: string]: ExtendedObject3D
    },
    materials: {
        [key: string]: Material
    }
}

const useModel = (href: string): ModelReturnType => {
    const data = useGLTF(href)

    useEffect(() => {
        if (data.materials) {
            SetMaterials(data.materials)
        }
    }, [])

    return {
        nodes: data.nodes,
        materials: data.materials
    }
}

export default useModel