import { GameEnvIntensity } from "../config/gameConfig"
import { AluminumMaterial } from "../materials/aluminumMaterial"
import { FabricMaterial } from "../materials/fabricMaterial"
import { PlantMaterial } from "../materials/plantMaterial"
import { TeaMaterial } from "../materials/teaMaterial"

export const SetMaterials = (materials: any) => {
    for (const material of Object.values(materials)) {
        // @ts-ignore
        material.side = 0
        // @ts-ignore
        material.envMapIntensity = GameEnvIntensity
    }

    materials.Fabric = FabricMaterial
    materials.Aluminum = AluminumMaterial
    materials.Plants = PlantMaterial
    materials.Tea = TeaMaterial
}