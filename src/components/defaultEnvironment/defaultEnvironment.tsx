'use client'

import { AccumulativeShadows, Backdrop, ContactShadows, Environment, RandomizedLight, Sky, SoftShadows } from "@react-three/drei"

const DefaultEnvironment = () => {
    return (
        <>
            <Environment preset="lobby" blur={1} />
            <color attach="background" args={['#f7ebd1']} />
            {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}

            <directionalLight position={[5, 5, 6]} castShadow intensity={1.5} shadow-mapSize={2048} shadow-bias={-0.001}>
                <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
            </directionalLight>

            <SoftShadows samples={20} />

            {/* <AccumulativeShadows temporal frames={100} scale={6}>
                <RandomizedLight amount={8} position={[0, 4, 0]} />
            </AccumulativeShadows> */}
        </>
    )
}

export default DefaultEnvironment