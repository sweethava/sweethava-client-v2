'use client'

const RoomLight = () => {

    return (
        <group position-y={2.2}>
            <pointLight
                castShadow
                decay={1.5}
                intensity={2.5}
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
            />
        </group>
    )
}

export default RoomLight