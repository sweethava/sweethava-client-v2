'use client'

import { useAppSelector } from '../../../hooks/storeHooks'
import CameraShotScreen from '../cameraShotScreen/cameraShotScreen'
import CloseInteractionPanel from '../closeInteractionPanel/closeInteractionPanel'
import DonationScreen from '../donationScreen/donationScreen'
import styles from './gameUI.module.scss'

const GameUI = () => {
    const { showGoBack } = useAppSelector(store => store.game)

    return (
        <div className={styles.ui}>
            {showGoBack ? <CloseInteractionPanel /> : null}
            <CameraShotScreen />
            <DonationScreen />
        </div>
    )
}

export default GameUI