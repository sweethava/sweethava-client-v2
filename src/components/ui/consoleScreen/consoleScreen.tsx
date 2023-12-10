'use client'

import Link from 'next/link'
import styles from './consoleScreen.module.scss'
import { ConsoleSteamLink } from '../../../config/consoleConfig'
import Image from 'next/image'
import bgImage from '/public/images/csgo.jpg'
import { SiSteam } from "react-icons/si"

const ConsoleScreen = () => {
    return (
        <Link href={ConsoleSteamLink} target='_blank' className={styles.screen}>
            <div className={styles.bg}>
                <Image
                    src={bgImage.src}
                    fill
                    alt='CS:GO'
                />
            </div>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <SiSteam />
                </div>
                <div className={styles.title}>Let's play together</div>
                <div className={styles.text}>Leave a comment before<br /> you send a request</div>
            </div>
        </Link>
    )
}

export default ConsoleScreen