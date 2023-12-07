'use client'

import { GameCameraZoom, GameCameraZoomSpeed, GameInitialPosition, GameInitialTargetPosition } from '../../../config/gameConfig'
import { useAppDispatch } from '../../../hooks/storeHooks'
import { setCameraPosition, setCameraTargetPosition, setInteractiveMode, setIsOnDesktop, setLockCamera, setShowGoBack, setZoom } from '../../../store/gameStore'
import Button from '../button/button'
import styles from './closeInteractionPanel.module.scss'
import { MdArrowCircleLeft } from 'react-icons/md'

const CloseInteractionPanel = () => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(setShowGoBack(false))
        dispatch(setIsOnDesktop(false))

        dispatch(setZoom(GameCameraZoom))
        dispatch(setCameraTargetPosition(GameInitialTargetPosition))
        dispatch(setCameraPosition(GameInitialPosition))

        setTimeout(() => {
            dispatch(setLockCamera(false))
            dispatch(setInteractiveMode(false))
        }, 1000 * GameCameraZoomSpeed)
    }

    return (
        <div className={styles.wrapper} onClick={onClick}>
            <Button icon={<MdArrowCircleLeft />} text='Go back' />
        </div>
    )
}

export default CloseInteractionPanel