import React from 'react'
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
    <ul>
        <li>
        <a href="#"> boton 1</a>
        </li>
        <li>
        <a href="#"> boton 2</a>
        </li>
        <li>
        <a href="#">boton 3</a>
        </li>
        <li>
        <a href="#">boton 4</a>
        </li>
    </ul>
    </nav> 
  )
}
