'use client'

import { MeshStandardMaterial } from "three"

const MirrorMaterial = new MeshStandardMaterial({
    roughness: 0.15,
    color: "#fff",
    metalness: 1
})

export default MirrorMaterial