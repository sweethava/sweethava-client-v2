import { MeshStandardMaterial, RepeatWrapping, Vector2 } from "three"
import { TLoader } from "../utils/loaders"
import { GameEnvIntensity } from "../config/gameConfig"

const reactImage = TLoader.load('/textures/images/react.jpg')
const tsImage = TLoader.load('/textures/images/ts.jpg')
const nodeImage = TLoader.load('/textures/images/node.jpg')
const jsImage = TLoader.load('/textures/images/js.jpg')
const csImage = TLoader.load('/textures/images/cs.jpg')

for (const texture of [reactImage, tsImage, nodeImage, jsImage, csImage]) {
    texture.wrapS = texture.wrapT = RepeatWrapping
    texture.offset.set(0.325, -0.25)
    texture.repeat.set(-3, 3)
}

const ImageMaterialBasic = {
    roughness: 1,
    envMapIntensity: GameEnvIntensity
}

export const ReactImageMaterial = new MeshStandardMaterial({
    ...ImageMaterialBasic,
    map: reactImage,
})

export const TSImageMaterial = new MeshStandardMaterial({
    ...ImageMaterialBasic,
    map: tsImage
})

export const NodeMaterial = new MeshStandardMaterial({
    ...ImageMaterialBasic,
    map: nodeImage
})

export const JSMaterial = new MeshStandardMaterial({
    ...ImageMaterialBasic,
    map: jsImage
})

export const CSMaterial = new MeshStandardMaterial({
    ...ImageMaterialBasic,
    map: csImage
})