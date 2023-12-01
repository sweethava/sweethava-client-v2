import { MeshStandardMaterial, RepeatWrapping } from "three";
import { TLoader } from "../utils/loaders";

const normalTexture = TLoader.load('/textures/wall/normal.jpg')

normalTexture.wrapS = normalTexture.wrapT = RepeatWrapping
normalTexture.offset.set(0, 0)
normalTexture.repeat.set(10, 10)

const WallMaterial = new MeshStandardMaterial({
    color: '#C2C2C2',
    roughness: 1,
    normalMap: normalTexture
})

export default WallMaterial