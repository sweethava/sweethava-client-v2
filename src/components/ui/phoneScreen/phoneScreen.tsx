'use client'

import ContactsList from './contactsList/contactsList'
import styles from './phoneScreen.module.scss'

const PhoneScreen = () => {
    return (
        <div className={styles.screen}>
            <ContactsList />
        </div>
    )
}

export default PhoneScreen