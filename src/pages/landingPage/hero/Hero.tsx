import heroImage from '../../../assets/heroImage.png'
import styles from '../../../css/landingPage/Hero.module.css'

export default function Hero () {
  return(
    <section className={styles.instructions}>
      <div className={styles.heroTitle}>
        <div className={styles.heroStackedContent}>
          <h1>Sharpen Your Frontend Skills</h1>
          <p>Practice frontend development interview questions to ace your next interview</p>
        </div>
        <img src={heroImage} className={styles.desktopHeroImage} alt="" aria-hidden="true" /> 
      </div>

      <p className={styles.mobileHeroDescription}>Practice frontend development interview questions to ace your next interview</p>
      <img src={heroImage} className={styles.mobileHeroImage} alt="" aria-hidden="true" />
      <a className="button" href="#tests">Start Practicing</a>
    </section>
  )
}