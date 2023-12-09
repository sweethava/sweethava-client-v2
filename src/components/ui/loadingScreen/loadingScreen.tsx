'use client'

import { useAppSelector } from '../../../hooks/storeHooks'
import styles from './loadingScreen.module.scss'

const LoadingScreen = () => {
    const { isBookLoaded, isCameraLoaded, isChairLoaded, isDesktopLoaded, isLaptopLoaded, isPhoneLoaded, isRoomLoaded, isSafeLoaded } = useAppSelector(store => store.loading)

    if (isBookLoaded && isCameraLoaded && isChairLoaded && isDesktopLoaded && isLaptopLoaded && isPhoneLoaded && true && isSafeLoaded) {
        return null
    } else {
        return (
            <div className={styles.loading}>
                <div className={styles.title}>Loading</div>
                <div className={styles.text}>Please be patient</div>
            </div>
        )
    }
}

export default LoadingScreen