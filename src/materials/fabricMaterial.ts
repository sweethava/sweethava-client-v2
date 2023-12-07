import { MeshPhysicalMaterial } from "three";
import { GameEnvIntensity } from "../config/gameConfig";

export const FabricMaterial = new MeshPhysicalMaterial({
    color: '#d0dbad',
    roughness: 1,
    sheen: 1,
    sheenRoughness: 0.25,
    sheenColor: '#f5fcde',
    envMapIntensity: GameEnvIntensity
})