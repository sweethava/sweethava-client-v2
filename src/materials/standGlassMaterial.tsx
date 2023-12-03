import { MeshPhysicalMaterial } from "three";

const StandGlassMaterial = new MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    roughness: 0,
    transmission: 1,
    ior: 2,
    reflectivity: 1,
    thickness: 0,
    envMapIntensity: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0,
})

export default StandGlassMaterial