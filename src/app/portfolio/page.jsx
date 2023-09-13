import React from 'react';
import styles from "./page.module.css"
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.selectTitle}>Choose a gallery</h1>
       <div className={styles.items}>
          <Link href="/portfolio/stories" className={styles.item}>
            <span className={styles.title}>Stories</span>
          </Link>
          <Link href="/portfolio/activities" className={styles.item}>
            <span className={styles.title}>Activities</span>
          </Link>
          <Link href="/portfolio/testimonials" className={styles.item}>
            <span className={styles.title}>Testimonials</span>
          </Link>
       </div>
    </div>
  )
}

export default Portfolio