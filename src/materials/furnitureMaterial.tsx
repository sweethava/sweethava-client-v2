import { MeshStandardMaterial, RepeatWrapping } from "three";
import { TLoader } from "../utils/loaders";

const normalTexture = TLoader.load('/textures/furniture/normal.jpg')

normalTexture.wrapS = normalTexture.wrapT = RepeatWrapping
normalTexture.offset.set(0, 0)
normalTexture.repeat.set(2, 2)

const FurnitureWhite = new MeshStandardMaterial({
    color: '#E7E7E7',
    roughness: 1,
    normalMap: normalTexture
})

const FurnitureBlack = new MeshStandardMaterial({
    color: '#3D3D3D',
    roughness: 1,
    normalMap: normalTexture
})

export { FurnitureWhite, FurnitureBlack }