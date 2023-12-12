'use client'

import Image from 'next/image'
import { LaptopLatestProjects } from '../../../../config/laptopConfig'
import styles from './projectsGrid.module.scss'
import { IoIosArrowDropdownCircle, IoMdArrowForward } from "react-icons/io"
import Link from 'next/link'
import { PiHeartDuotone } from 'react-icons/pi'

const ProjectsGrid = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>Some of my projects</div>
                <div className={styles.icon}>
                    <PiHeartDuotone />
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.grid}>
                    {
                        LaptopLatestProjects.map(({ link, text, title, image, width }, index) => {
                            return (
                                <Link
                                    href={link}
                                    target='_blank'
                                    className={styles.item}
                                    key={index}
                                    style={{
                                        gridColumnEnd: `span ${width}`
                                    }}
                                >
                                    <div className={styles.image}>
                                        <Image
                                            src={image.src}
                                            alt={title}
                                            fill
                                            loading='eager'
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.title}>{title}</div>
                                        <div className={styles.description}>{text}</div>
                                        <div className={styles.arrow}>
                                            <div className={styles.text}>Open</div>
                                            <div className={styles.icon}>
                                                <IoMdArrowForward />
                                            </div>
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