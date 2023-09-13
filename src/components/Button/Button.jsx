import React from 'react'
import Link from "next/link"
import styles from "./Button.module.css"

const Button = ({text,url}) => {
  return (
    <Link href={url} className={styles.link}>
        <button className={styles.container}>{text}</button>
    </Link>
  )
}

export default Button
