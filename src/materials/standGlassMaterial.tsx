import { MeshPhysicalMaterial } from "three";

const StandGlassMaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    roughness: 0.1,
    transmission: 1,
    ior: 2,
    reflectivity: 0.5,
    thickness: 0.1,
    envMapIntensity: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0,
})

export default StandGlassMaterial