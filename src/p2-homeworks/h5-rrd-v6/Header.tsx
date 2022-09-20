import React from 'react'
import {NavLink} from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
    return (
        <div className={styles.sideBar}>
            <div>
            {/*// add NavLinks*/}
            <NavLink className={styles.preJunior} to={'/pre-junior'}>PreJunior</NavLink>
            <NavLink className={styles.Junior} to={'/junior'}>Junior</NavLink>
            <NavLink className={styles.juniorPlus} to={'/junior-plus'}>Junior Plus</NavLink>
            </div>
            <div className={styles.btn}></div>
        </div>
    )
}

export default Header
