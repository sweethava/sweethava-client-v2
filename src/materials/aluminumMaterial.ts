import { MeshStandardMaterial } from "three";
import { GameEnvIntensity } from "../config/gameConfig";

export const AluminumMaterial = new MeshStandardMaterial({
    color: '#e6e6e6',
    roughness: 0.4,
    metalness: 1,
    envMapIntensity: GameEnvIntensity
})