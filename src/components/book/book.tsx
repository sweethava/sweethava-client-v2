'use client'

import { useEffect, useMemo } from "react"
import useModel from "../../hooks/modelHooks"
import { GetBookMaterial } from "../../materials/bookMaterial"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { setCameraPosition, setCameraTargetPosition, setHideChair, setInteractiveMode, setIsOnBook, setLockCamera, setShowGoBack, setZoom } from "../../store/gameStore"
import { GameCameraZoomSpeed } from "../../config/gameConfig"
import HoverHighlight from "../hoverHighlight/hoverHighlight"
import { Decal } from "@react-three/drei"
import { firstPageImage, secondPageImage } from "../../materials/openedBookMaterial"
import { bookLoaded } from "../../store/loadingStore"

const Book = () => {
    const { nodes, materials } = useModel('/gltf/book.glb')
    const { interactiveMode, isOnBook, zoomMultiplier } = useAppSelector(store => store.game)
    const dispatch = useAppDispatch()
    const material = useMemo(() => {
        return GetBookMaterial()
    }, [])

    console.log(nodes);


    const onOpen = () => {
        if (!interactiveMode) {
            dispatch(setIsOnBook(true))
            dispatch(setHideChair(true))
            dispatch(setLockCamera(true))
            dispatch(setZoom(1200 * zoomMultiplier))
            dispatch(setCameraTargetPosition([-1.15, 1.854, 0.129]))
            dispatch(setCameraPosition([0, 18, 0]))
            dispatch(setInteractiveMode(true))

            setTimeout(() => {
                dispatch(setShowGoBack(true))
            }, 1000 * GameCameraZoomSpeed)
        }
    }

    useEffect(() => {
        dispatch(bookLoaded())
    }, [])

    return (
        <group dispose={null}>
            <HoverHighlight
                disabled={interactiveMode}
                onClick={onOpen}
            >
                <group
                    position={[-1.141, 1.854, 0.129]}
                    rotation={[-Math.PI, 1.406, -Math.PI]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane012.geometry}
                        material={material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane012_1.geometry}
                        material={materials.BookPaper}
                    >
                        {
                            isOnBook || interactiveMode ? (
                                <>
                                    <Decal
                                        position={[-0.15, 0, 0]}
                                        rotation={[Math.PI / 2, Math.PI, Math.PI]}
                                        scale={[0.26, 0.36, 0.15]}
                                        map={firstPageImage}
                                    />
                                    <Decal
                                        position={[0.15, 0, 0]}
                                        rotation={[Math.PI / 2, Math.PI, Math.PI]}
                                        scale={[0.26, 0.36, 0.15]}
                                        map={secondPageImage}
                                    />
                                </>
                            ) : null
                        }
                    </mesh>
                </group>
            </HoverHighlight>
        </group>
    )
}

export default Book