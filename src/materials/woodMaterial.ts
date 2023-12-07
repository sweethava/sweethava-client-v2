import { MeshStandardMaterial, RepeatWrapping } from "three";
import { TLoader } from "../utils/loaders";

const normalTexture = TLoader.load('/textures/wood/normal.png')
const roughnessTexture = TLoader.load('/textures/wood/roughness.png')

for (const texture of [normalTexture, roughnessTexture]) {
    texture.wrapS = normalTexture.wrapT = RepeatWrapping
    texture.offset.set(0, 0)
    texture.repeat.set(2, 2)
}

export const FloorWoordMaterial = new MeshStandardMaterial({
    color: "#E3BD6C",
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    metalness: 0
})