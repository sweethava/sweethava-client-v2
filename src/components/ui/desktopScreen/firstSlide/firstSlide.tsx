'use client'

import Image from 'next/image'
import styles from './firstSlide.module.scss'
import myImage from '/public/images/avatar.jpg'

const FirstSlide = () => {
    return (
        <div className={styles.firstSlide}>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Image
                        alt='Zhan Ilyas'
                        src={myImage.src}
                        fill
                        loading='eager'
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.subtitle}>My name is</div>
                <div className={styles.title}>Zhan Ilyas</div>
                <div className={styles.text}>I'm a <span>Full Stack Web Developer</span></div>
            </div>
        </div>
    )
}

export default FirstSlide