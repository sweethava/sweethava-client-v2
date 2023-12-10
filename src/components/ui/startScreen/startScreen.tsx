'use client'

import { useState } from 'react'
import styles from './startScreen.module.scss'
import clsx from 'clsx'

const StartScreen = () => {
    const [started, setStarted] = useState(false)

    const click = () => {
        // const ambientAudio = new Audio('/sounds/ambient.mp3')
        // ambientAudio.loop = true
        // ambientAudio.play()

        setStarted(true)
    }

    return (
        <div className={clsx(styles.wrapper, started ? styles.hide : null)} onClick={click}>
            <div className={styles.title}>Click to start</div>
        </div>
    )
}

export default StartScreen