import { MeshStandardMaterial, RepeatWrapping } from "three";
import { TLoader } from "../utils/loaders";

const normalTexture = TLoader.load('/textures/carpet/normal.jpg')

normalTexture.wrapS = normalTexture.wrapT = RepeatWrapping
normalTexture.offset.set(0, 0)
normalTexture.repeat.set(2, 2)

const CarpetMaterial = new MeshStandardMaterial({
    color: '#4d4d4d',
    roughness: 1,
    normalMap: normalTexture
})

export default CarpetMaterial