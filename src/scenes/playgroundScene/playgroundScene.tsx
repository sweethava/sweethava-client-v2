'use client'

import { Suspense, useEffect } from "react"
import styles from './playgroundScene.module.scss'
import { useAppDispatch } from "../../hooks/storeHooks"
import { hideLoading } from "../../store/loadingStore"
import { Canvas } from "@react-three/fiber"
import { GameCameraZoom, GameInitialPosition } from "../../config/gameConfig"
import { Html, OrbitControls } from "@react-three/drei"
import { Vector3 } from "three"

const PlaygroundScene = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(hideLoading())
    }, [])

    return (
        <div className={styles.scene}>
            <Suspense>
                <Canvas
                    shadows
                    dpr={[1, 1.5]}
                    // camera={{
                    //     position: new Vector3(...GameInitialPosition),
                    //     zoom: GameCameraZoom,
                    // }}
                    eventPrefix="offset"
                >
                    <ambientLight />
                    <mesh position={[0, 0, -8]}>
                        <Html
                            className={styles.wrapper}
                            transform
                        // rotation-y={Math.PI / 2}
                        >
                            <div className={styles.content}>
                                <h1>Title1</h1>
                                <h1>Title2</h1>
                                <h1>Title3</h1>
                                <h1>Title4</h1>
                                <h1>Title5</h1>
                                <h1>Title6</h1>
                                <h1>Title7</h1>
                                <h1>Title8</h1>
                                <h1>Title9</h1>
                                <h1>Title10</h1>
                                <h1>Title11</h1>
                                <h1>Title12</h1>
                                <h1>Title13</h1>
                                <h1>Title14</h1>
                                <h1>Title15</h1>
                                <h1>Title16</h1>
                                <h1>Title17</h1>
                                <h1>Title18</h1>
                                <h1>Title19</h1>
                                <h1>Title20</h1>
                                <h1>Title21</h1>
                                <h1>Title22</h1>
                                <h1>Title23</h1>
                                <h1>Title24</h1>
                                <h1>Title25</h1>
                                <h1>Title26</h1>
                                <h1>Title27</h1>
                            </div>
                        </Html>
                    </mesh>

                    <OrbitControls enabled={false} enableRotate={false} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} makeDefault />
                </Canvas>
            </Suspense>
        </div>
    )
}

export default PlaygroundScene