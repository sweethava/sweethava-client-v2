import { MeshPhysicalMaterial } from "three";
import { GameEnvIntensity } from "../config/gameConfig";

export const PlantMaterial = new MeshPhysicalMaterial({
    color: '#00C612',
    roughness: 1,
    sheen: 1,
    sheenRoughness: 0.25,
    sheenColor: '#87faad',
    envMapIntensity: GameEnvIntensity
})