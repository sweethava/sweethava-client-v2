'use client'

import Link from 'next/link'
import { DesktopGamesList } from '../../../../config/desktopConfig'
import styles from './gamesList.module.scss'
import Image from 'next/image'

const GamesList = () => {
    return (
        <div className={styles.list}>
            {
                DesktopGamesList.map(({ image, title, link }, index) => {
                    return (
                        <Link href={link} target='_blank' className={styles.item} key={index}>
                            <div className={styles.image}>
                                <Image
                                    src={image.src}
                                    alt={title}
                                    fill
                                />
                            </div>
                            <div className={styles.title}>{title}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default GamesList