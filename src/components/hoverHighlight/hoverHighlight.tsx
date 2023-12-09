'use client'

import { Select } from "@react-three/postprocessing"
import { PropsWithChildren, useEffect, useState } from "react"
import { useAppSelector } from "../../hooks/storeHooks"

interface HoverHighlightProps {
    onClick?: () => any,
    disabled?: boolean
}

const HoverHighlight = ({ children, onClick, disabled = false }: PropsWithChildren<HoverHighlightProps>) => {
    const [hovered, setHovered] = useState(false)
    const { isMobile } = useAppSelector(store => store.loading)
    const { interactiveMode } = useAppSelector(store => store.game)

    useEffect(() => {
        if (disabled) {
            setHovered(false)
        }
    }, [disabled])

    return (
        <Select
            enabled={hovered || isMobile && !interactiveMode}
            onPointerEnter={(e) => {
                e.stopPropagation()
                !disabled ? setHovered(true) : null
            }}
            onPointerOut={() => setHovered(false)}
            onClick={(e) => {
                e.stopPropagation()
                onClick ? onClick() : null
            }}
        >
            {children}
        </Select>
    )
}

export default HoverHighlight