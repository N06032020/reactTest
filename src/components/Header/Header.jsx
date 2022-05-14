import React from 'react'
import logoImage from '../../assets/img/image.svg'
import { menu } from './menu'

import styles from '../Header/Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src={logoImage} alt="" />
        </div>
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {menu.map((item, idx) => (
                <li key={`menu item ${idx}`}>
                    <a href={item.link}>{item.title}</a>
                </li>                    
                ))}

            </ul>
            <div className={styles.buttons}>
                <button className={styles['login-button']}>Login</button>
                <button className={styles['sign-up-button']}>Sign up</button>
            </div>
        </div>   
    </div>
  )
}
 