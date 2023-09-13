import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from "@/components/Button/Button"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt='' 
          fill={true} 
          className={styles.img}
          />
          <div className={styles.imgText}>
              <h1 className={styles.imgTitle}>
              Empowering Humanity
              </h1>
              <h2 className={styles.imgDesc}>
                Award-Winning Excellence
              </h2>
          </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
              We are a compassionate NGO dedicated to global well-being, rooted in empathy and social responsibility. Our history reflects active humanitarian engagement and advocacy for human welfare. We address pressing issues like poverty, healthcare, education, sustainability, and disaster relief, aiming for lasting change and empowerment.
            <br />
            <br />
            Comprising passionate individuals, we believe in collective action, collaborating with communities and organizations globally. Our work transcends borders, aiming to provide every individual, regardless of background, with a dignified life. We are committed to fostering hope and progress, envisioning a world where compassion, equality, and opportunity thrive
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Our NGO empowers through education, providing quality schooling, scholarships, and vocational training. We build essential infrastructure, like schools and sanitation facilities, to enhance living conditions and facilitate learning. Through food donations and healthcare initiatives, we combat hunger and ensure access to quality care, striving to create resilient communities where everyone can thrive.
            <br />
            <br /> - Education Campaigns
            <br />
            <br /> - Healthcare
            <br />
            <br /> - Food & Shelter
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About
