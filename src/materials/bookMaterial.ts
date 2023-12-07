import { MeshStandardMaterial } from "three"
import { GameEnvIntensity } from "../config/gameConfig"

const BookMaterialBasic = {
    roughness: 1,
    envMapIntensity: GameEnvIntensity
}

export const BookMaterial1 = new MeshStandardMaterial({
    ...BookMaterialBasic,
    color: '#7aa45f'
})

export const BookMaterial2 = new MeshStandardMaterial({
    ...BookMaterialBasic,
    color: '#3c6175'
})

export const BookMaterial3 = new MeshStandardMaterial({
    ...BookMaterialBasic,
    color: '#cf534d'
})

export const BookMaterial4 = new MeshStandardMaterial({
    ...BookMaterialBasic,
    color: '#b4b665'
})

export const BookMaterial5 = new MeshStandardMaterial({
    ...BookMaterialBasic,
    color: '#60544a'
})

const RandMaterials = [BookMaterial1, BookMaterial2, BookMaterial3, BookMaterial4, BookMaterial5]

export const GetBookMaterial = () => {
    return RandMaterials[Math.floor(Math.random() * RandMaterials.length)]
}