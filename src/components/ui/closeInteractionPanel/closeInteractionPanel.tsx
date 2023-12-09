'use client'

import { useAppDispatch } from '../../../hooks/storeHooks'
import { setGameDefaultState } from '../../../utils/game'
import Button from '../button/button'
import styles from './closeInteractionPanel.module.scss'
import { MdArrowCircleLeft } from 'react-icons/md'

const CloseInteractionPanel = () => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        setGameDefaultState(dispatch)
    }

    return (
        <div className={styles.wrapper} onClick={onClick}>
            <Button icon={<MdArrowCircleLeft />} text='Go back' />
        </div>
    )
}

export default CloseInteractionPanel