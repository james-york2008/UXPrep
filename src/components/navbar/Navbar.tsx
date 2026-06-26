import logo from '../../assets/logo.png'
import styles from '../../css/Navbar.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => setDropdownMenuOpen(!dropdownMenuOpen)
  const closeMenu = () => setDropdownMenuOpen(false)

  return(
    <header className={styles.home} id='home'>
      <a href='#mainContent' className={styles.skipToMain}>Skip to main content</a>
      <nav>
          <div className={styles.desktopNavWrapper}>
              <div className={styles.mobileNavWrapper}>
                  <Link to="/UXPrep/"><img src={logo} alt="U.X. Prep Link to home page" loading="lazy" className={styles.uxprepLogo} /></Link>
                  <button 
                    className={styles.dropdownButton} 
                    type="button" 
                    aria-expanded={dropdownMenuOpen} 
                    aria-controls="navList" 
                    onClick={toggleMenu} 
                    aria-label='Toggle menu'
                  > 
                    <span aria-hidden="true">&#9776;</span></button>
              </div>
              
              <ul className={`${styles.navList} ${dropdownMenuOpen ? styles.displayShow : styles.displayNone}`} id='navList'>
                  <li><Link to="/UXPrep/" onClick={closeMenu}>Home</Link></li>
                  <li><a href="#tests" onClick={closeMenu}>Tests</a></li>
                  <li><a href="#legal" onClick={closeMenu}>Legal</a></li>
              </ul>
          </div>
      </nav>
    </header>
  )
}