import logo from '../../assets/logo.png'
import styles from '../../css/Navbar.module.css'

export default function Navbar () {
  return(
    <header className={styles.home} id='home'>
      <nav>
          <div className={styles.desktopNavWrapper}>
              <div className={styles.mobileNavWrapper}>
                  <a href="/"><img src={logo} alt="U.X. Prep Link to home page" loading="lazy" className={styles.uxprepLogo} /></a>
                  <button className={styles.dropdownButton} type="button" aria-expanded="false" aria-controls="navList">&#9776;</button>
              </div>
              
              <ul className={`${styles.navList} ${styles.displayNone}`}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#tests">Tests</a></li>
                  <li><a href="#legal">Legal</a></li>
              </ul>
          </div>
      </nav>
    </header>
  )
}