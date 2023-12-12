'use client'

import { DesktopAboutMeText } from '../../../config/desktopConfig'
import ContactsList from './contactsList/contactsList'
import styles from './desktopScreen.module.scss'
import ExperienceList from './experienceList/experienceList'
import FirstSlide from './firstSlide/firstSlide'
import GamesList from './gamesList/gamesList'
import SectionLine from './sectionLine/sectionLine'
import SkillsList from './skillsList/skillsList'

const DesktopScreen = () => {
    return (
        <div className={styles.wrapper}>
            <FirstSlide />
            <SectionLine
                title='About me'
            >
                <p>{DesktopAboutMeText}</p>
            </SectionLine>
            <SectionLine
                title='My skills'
            >
                <SkillsList />
            </SectionLine>
            <SectionLine
                title='Experience'
            >
                <ExperienceList />
            </SectionLine>
            <SectionLine
                title='Contacts'
            >
                <ContactsList />
            </SectionLine>
            <SectionLine
                title='Games I play'
            >
                <GamesList />
            </SectionLine>
        </div>
    )
}

export default DesktopScreen