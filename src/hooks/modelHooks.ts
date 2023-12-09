import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import { SetMaterials } from "../utils/materials"

const useModel = (href: string) => {
    const data = useGLTF(href)

    useEffect(() => {
        // @ts-ignore
        if (data.materials) {
            // @ts-ignore
            SetMaterials(data.materials)
        }
    }, [])

    return data
}

export default useModel