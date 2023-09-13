import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.items}>
        <h1 className={styles.title}>Join Our Mission to Make a Difference</h1>
        <p className={styles.desc}>
        We envision a world where compassion, kindness, and social responsibility drive positive change and create a brighter future for all.
        </p>
        <Button text="See Our Works" url="/portfolio"/>
      </div>

      <div className={styles.items}>
        <Image src={Hero} alt='homeimage' className={styles.img}/>
      </div>

    </div>
  )
}
