'use client'

import Link from 'next/link'
import { AppSocial } from '../../../../config/appConfig'
import styles from './contactsList.module.scss'
import { MdArrowOutward } from 'react-icons/md'

const ContactsList = () => {
    return (
        <div className={styles.list}>
            {
                AppSocial.map(({ icon, title, link }, index) => {
                    return (
                        <Link href={link} target='_blank' className={styles.link} key={index}>
                            <div className={styles.content}>
                                <div className={styles.icon}>{icon}</div>
                                <div className={styles.title}>{title}</div>
                            </div>
                            <div className={styles.externalIcon}>{<MdArrowOutward />}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ContactsList