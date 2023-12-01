import { MeshStandardMaterial, RepeatWrapping } from "three";
import { TLoader } from "../utils/loaders";

const normalTexture = TLoader.load('/textures/wall/normal.jpg')

normalTexture.wrapS = normalTexture.wrapT = RepeatWrapping
normalTexture.offset.set(0, 0)
normalTexture.repeat.set(6, 6)

const WallMaterial = new MeshStandardMaterial({
    color: '#b3b3b3',
    roughness: 1,
    normalMap: normalTexture
})

export default WallMaterial