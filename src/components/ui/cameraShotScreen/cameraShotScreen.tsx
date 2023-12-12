'use client'

import Image from 'next/image'
import styles from './cameraShotScreen.module.scss'
import myImage from '/public/images/me.jpg'
import { useAppSelector } from '../../../hooks/storeHooks'
import clsx from 'clsx'

const CameraShotScreen = () => {
    const { showPicture } = useAppSelector(store => store.game)
    const classes = clsx(styles.wrapper, showPicture ? styles.show : null)

    return (
        <div className={classes}>
            <div className={styles.image}>
                <Image
                    src={myImage.src}
                    alt='Literally me'
                    fill
                    loading='eager'
                />
            </div>
        </div>
    )
}

export default CameraShotScreen