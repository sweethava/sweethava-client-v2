'use client'

import Image from 'next/image'
import styles from './contactsList.module.scss'
import myImage from '/public/images/avatar.jpg'
import { AppSocial } from '../../../../config/appConfig'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ContactsList = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.header}>
                <div className={styles.image}>
                    <Image
                        alt='Zhan Ilyas'
                        src={myImage.src}
                        fill
                    />
                </div>
                <div className={styles.name}>Zhan Ilyas</div>
                <div className={styles.position}>Full Stack Web Developer</div>
            </div>
            <div className={styles.body}>
                <div className={styles.list}>
                    {AppSocial.map(({ title, link, icon }, index) => {
                        return (
                            <Link href={link} target='_blank' key={index} className={styles.link}>
                                <div className={styles.icon}>{icon}</div>
                                <div className={styles.text}>{title}</div>
                                <div className={styles.arrow}>
                                    <MdKeyboardArrowRight />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ContactsList