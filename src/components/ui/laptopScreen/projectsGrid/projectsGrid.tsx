'use client'

import Image from 'next/image'
import { LaptopLatestProjects } from '../../../../config/laptopConfig'
import styles from './projectsGrid.module.scss'
import { IoIosArrowDropdownCircle, IoMdArrowForward } from "react-icons/io"
import Link from 'next/link'

const ProjectsGrid = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <div className={styles.title}>Some of <br />my projects</div>
                <div className={styles.content}>These are examples of several of my recent projects, in fact there were many more.</div>
                <div className={styles.scrollDown}>
                    <div className={styles.text}>Scroll to explore</div>
                    <div className={styles.icon}><IoIosArrowDropdownCircle /></div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.grid}>
                    {
                        LaptopLatestProjects.map(({ title, text, link, image }, index) => {
                            return (
                                <Link href={link} target='_blank' className={styles.item} key={index}>
                                    <div className={styles.image}>
                                        <Image
                                            src={image.src}
                                            alt={title}
                                            fill
                                        />
                                    </div>
                                    <div className={styles.contentWrapper}>
                                        <div className={styles.content}>
                                            <div className={styles.title}>{title}</div>
                                            <div className={styles.text}>{text}</div>
                                        </div>
                                        <div className={styles.arrow}>
                                            <IoMdArrowForward />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsGrid