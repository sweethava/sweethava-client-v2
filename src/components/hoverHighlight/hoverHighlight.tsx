'use client'

import { Select } from "@react-three/postprocessing"
import { PropsWithChildren, useEffect, useState } from "react"

interface HoverHighlightProps {
    onClick?: () => any,
    disabled?: boolean
}

const HoverHighlight = ({ children, onClick, disabled = false }: PropsWithChildren<HoverHighlightProps>) => {
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (disabled) {
            setHovered(false)
        }
    }, [disabled])

    return (
        <Select
            enabled={hovered}
            onPointerEnter={() => !disabled ? setHovered(true) : null}
            onPointerOut={() => setHovered(false)}
            onClick={onClick}
        >
            {children}
        </Select>
    )
}

export default HoverHighlight