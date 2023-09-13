import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}> 
        <div>@2023 Daan. All rights reserved.</div>
        <div className={styles.socials}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt='image'/>
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt='image'/>
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt='image'/>
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt='image'/>
        </div>
    </div>
  )
}

export default Footer
