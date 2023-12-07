'use client'

import { useAppSelector } from '../../../hooks/storeHooks'
import CloseInteractionPanel from '../closeInteractionPanel/closeInteractionPanel'
import styles from './gameUI.module.scss'

const GameUI = () => {
    const { showGoBack } = useAppSelector(store => store.game)

    return (
        <div className={styles.ui}>
            {showGoBack ? <CloseInteractionPanel /> : null}
        </div>
    )
}

export default GameUI