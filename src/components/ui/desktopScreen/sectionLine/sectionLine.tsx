'use client'

import { PropsWithChildren } from 'react'
import styles from './sectionLine.module.scss'

interface SectionLineProps {
    title: string,
}

const SectionLine = ({ title, children }: PropsWithChildren<SectionLineProps>) => {
    return (
        <div className={styles.item}>
            <div className={styles.sticky}>
                <div className={styles.number}></div>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default SectionLine