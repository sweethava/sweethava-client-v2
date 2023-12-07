import { MeshPhysicalMaterial } from "three";
import { GameEnvIntensity } from "../config/gameConfig";

export const TeaMaterial = new MeshPhysicalMaterial({
    color: '#bd6c2e',
    roughness: 0.5,
    sheen: 1,
    sheenRoughness: 0.25,
    sheenColor: '#fff',
    transmission: 1,
    ior: 1.5,
    thickness: 0.1,
    opacity: 0.3,
    envMapIntensity: GameEnvIntensity
    // iridescence: 1,
    // iridescenceIOR: 1,
    // iridescenceThicknessRange: [100, 800]
})