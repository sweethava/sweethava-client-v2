'use client'

import Link from 'next/link'
import { DesktopWorkExperience } from '../../../../config/desktopConfig'
import styles from './experienceList.module.scss'
import { TbExternalLink } from "react-icons/tb"

const ExperienceList = () => {
    return (
        <div className={styles.list}>
            {DesktopWorkExperience.map((item, index) => {
                const { title, company, locatioin, start, end, content, links } = item

                return (
                    <div className={styles.item} key={index}>
                        <div className={styles.subtitle}>{company}, {locatioin}</div>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.period}>{start} - {end}</div>
                        <div className={styles.content}>{content}</div>
                        <div className={styles.links}>{
                            links.map(({ link, text }, index) => {
                                return (
                                    <Link href={link} target='_blank' key={index} className={styles.link}>
                                        <div className={styles.text}>{text}</div>
                                        <div className={styles.icon}><TbExternalLink /></div>
                                    </Link>
                                )
                            })
                        }</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceList