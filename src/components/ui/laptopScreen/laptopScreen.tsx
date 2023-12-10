'use client'

import styles from './laptopScreen.module.scss'
import ProjectsGrid from './projectsGrid/projectsGrid'

const LaptopScreen = () => {
    return (
        <div className={styles.screen}>
            <ProjectsGrid />
        </div>
    )
}

export default LaptopScreen