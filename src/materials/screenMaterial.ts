import { Color, MeshStandardMaterial } from "three";
import { GameEnvIntensity } from "../config/gameConfig";

const ScreenMaterialBase = {
    envMapIntensity: GameEnvIntensity
}

export const ScreenDisabledMaterial = new MeshStandardMaterial({
    ...ScreenMaterialBase,
    color: "#000"
})
export const ScreenEnabledMaterial = new MeshStandardMaterial({
    ...ScreenMaterialBase,
    color: "#000"
})