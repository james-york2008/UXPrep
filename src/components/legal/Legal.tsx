import styles from '../../css/Legal.module.css'

export default function Legal () {
  function handleBackToTop () {
    window.scrollTo({ top: 0 })

    document.body.setAttribute('tabindex', '-1')
    document.body.focus()
    document.body.removeAttribute('tabindex')
  }

  return(
    <footer className={styles.legal} id='legal'>
      <ul className={styles.footerLinks}>
        <li><button id='backToTop' aria-label='Back to top' onClick={handleBackToTop} className={styles.backToTop}>Back To Top</button></li>
        <li><a href="https://github.com/james-york2008/UXPrep" target="_blank" rel="noopener noreferrer">View Source Code</a></li>
      </ul>

      <p className={styles.pageDescription}>UXPrep is a frontend web development interview practice tool. It focuses on important concepts like accessibility, semantics, and performance.</p>

      <p className={styles.copyrightTag}>&copy; 2026 UXPrep. All rights reserved</p>
    </footer>
  )
}