'use client'

import { Bloom, EffectComposer, Outline, SMAA, Selection } from "@react-three/postprocessing"
import { BloomEffect } from 'postprocessing'
import { PropsWithChildren, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import gsap from 'gsap'
import { setCameraShot } from "../../store/gameStore"

const effectsData = {
    intensity: 0
}
const firstStageDuration = 0.2
const secondStageDuration = 1

const SelectionBound = ({ children }: PropsWithChildren) => {
    const bloom = useRef<typeof BloomEffect>(null!)
    const { cameraShot } = useAppSelector(store => store.game)
    const { isMobile } = useAppSelector(store => store.loading)
    const dispatch = useAppDispatch()

    const applyIntensity = () => {
        if (bloom.current) {
            // @ts-ignore
            bloom.current.setIntensity(effectsData.intensity)
        }
    }

    useEffect(() => {
        if (bloom.current && cameraShot) {
            gsap.to(effectsData, {
                intensity: 4,
                duration: firstStageDuration,
                onUpdate: applyIntensity,
                onComplete: () => {
                    gsap.to(effectsData, {
                        intensity: 0,
                        duration: secondStageDuration,
                        onUpdate: applyIntensity,
                        onComplete: () => {
                            dispatch(setCameraShot(false))
                        }
                    })
                }
            })
        }
    }, [cameraShot])

    return (
        <Selection>
            {
                isMobile ?
                    <EffectComposer multisampling={0} autoClear={false}>
                        <Outline visibleEdgeColor={0xffffff} hiddenEdgeColor={0xffffff} blur width={1000} edgeStrength={100} />
                        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={0} ref={bloom} />
                    </EffectComposer> :
                    <EffectComposer multisampling={0} autoClear={false}>
                        <SMAA />
                        <Outline visibleEdgeColor={0xffffff} hiddenEdgeColor={0xffffff} blur width={1000} edgeStrength={100} />
                        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={0} ref={bloom} />
                    </EffectComposer>
            }
            <group>
                {children}
            </group>
        </Selection>
    )
}

export default SelectionBound