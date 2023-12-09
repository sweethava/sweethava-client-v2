'use client'

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";

interface FrameLimiterProps {
    limit: number
}

const FrameLimiter = ({ limit }: FrameLimiterProps) => {
    const { gl, invalidate } = useThree()
    const maxTicks = Math.round(60 / limit)
    const ticksCounter = useRef(0)

    const step = (): void => {
        // increases the tick counter
        ticksCounter.current += 1
        if (ticksCounter.current > maxTicks) {
            // call invalidate to render a new frame
            invalidate()
            ticksCounter.current = 0
        }
    }

    useEffect(() => {
        gl.setAnimationLoop(step)
        return (): void => {
            gl.setAnimationLoop(null)
        }
    }, [])

    return null
}

export default FrameLimiter