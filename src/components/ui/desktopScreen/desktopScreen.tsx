'use client'

import { DesktopAboutMeText, DesktopBackEndSkillsList, DesktopFrontEndSkillsList, DesktopGeneralSkillsList } from '../../../config/desktopConfig'
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
                title='General skills'
            >
                <SkillsList skills={DesktopGeneralSkillsList} />
            </SectionLine>

            <SectionLine
                title='Front-end skills'
            >
                <SkillsList skills={DesktopFrontEndSkillsList} />
            </SectionLine>

            <SectionLine
                title='Back-end skills'
            >
                <SkillsList skills={DesktopBackEndSkillsList} />
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

            {/* <SectionLine
                title='Games I play'
            >
                <GamesList />
            </SectionLine> */}
        </div>
    )
}

export default DesktopScreen