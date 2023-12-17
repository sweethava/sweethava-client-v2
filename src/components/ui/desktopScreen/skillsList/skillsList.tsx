'use client'

import styles from './skillsList.module.scss'

interface SkillsListProps {
    skills: string[]
}

const SkillsList = ({ skills }: SkillsListProps) => {
    return (
        <div className={styles.list}>
            {
                skills.map((text, index) => {
                    return <div className={styles.item} key={index}>{text}</div>
                })
            }
        </div>
    )
}

export default SkillsList