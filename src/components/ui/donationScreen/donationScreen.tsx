'use client'

import Link from 'next/link'
import { DonationLinks } from '../../../config/appConfig'
import styles from './donationScreen.module.scss'
import { useAppSelector } from '../../../hooks/storeHooks'
import clsx from 'clsx'

const DonationScreen = () => {
    const { isOnSafe, showGoBack } = useAppSelector(store => store.game)

    return (
        <div className={clsx(styles.donationScreen, isOnSafe && showGoBack ? styles.show : null)}>
            <div className={styles.items}>
                {
                    DonationLinks.map(({ icon, title, link }, index) => {
                        return (
                            <Link
                                href={link}
                                target='_blank'
                                key={index}
                                className={styles.item}
                            >
                                <div className={styles.icon}>{icon}</div>
                                <div className={styles.title}>{title}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DonationScreen