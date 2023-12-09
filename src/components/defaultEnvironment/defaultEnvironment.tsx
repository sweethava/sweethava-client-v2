'use client'

import { AccumulativeShadows, Backdrop, ContactShadows, Environment, RandomizedLight, Sky, SoftShadows } from "@react-three/drei"
import { useAppSelector } from "../../hooks/storeHooks"

const DefaultEnvironment = () => {
    const { isMobile } = useAppSelector(store => store.loading)

    return (
        <>
            <Environment preset="lobby" blur={1} />
            <color attach="background" args={['#f7ebd1']} />

            <directionalLight position={[5, 5, 6]} castShadow intensity={1.5} shadow-mapSize={2048} shadow-bias={-0.001}>
                <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
            </directionalLight>

            {!isMobile ? <SoftShadows samples={20} /> : null}
        </>
    )
}

export default DefaultEnvironment