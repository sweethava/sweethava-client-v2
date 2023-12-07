'use client'

import { clsx } from "clsx"
import styles from './button.module.scss'

interface ButtonProps {
    icon?: JSX.Element,
    text?: string,
    onClick?: () => any
}

const Button = ({ icon, text, onClick }: ButtonProps) => {
    const classes = clsx(styles.button, icon ? styles.icon : null, text ? styles.text : styles.text)

    return (
        <button className={classes} onClick={onClick}>
            <div className={styles.inner}>
                {icon ? <div className={styles.icon}>{icon}</div> : null}
                {text ? <div className={styles.text}>{text}</div> : null}
            </div>
        </button>
    )
}

export default Button