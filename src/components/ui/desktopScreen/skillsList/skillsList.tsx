'use client'

import { DesktopSkillsList } from '../../../../config/desktopConfig'
import styles from './skillsList.module.scss'

const SkillsList = () => {
    return (
        <div className={styles.list}>
            {
                DesktopSkillsList.map((text, index) => {
                    return <div className={styles.item} key={index}>{text}</div>
                })
            }
        </div>
    )
}

export default SkillsList