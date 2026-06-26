import { Link } from 'react-router-dom'
import styles from '../../../css/landingPage/Tests.module.css'
import { landingPageTests } from '../../../data/landingPageTests'

const testIcons: Record<string, string> = import.meta.glob(
  '../../../assets/testIcons/*',
  {
    eager: true,
    import: 'default'
  }
)

export default function Tests () {
  return(
    <section className={styles.tests} id="tests">
      <h2>Choose a quiz topic</h2>

      <ul className={styles.testsList}>
        {landingPageTests.map((test) => {
          let testIcon = testIcons[`../../../assets/testIcons/${test.imageLink}`]

          return(
            <li key={test.id}>
              <article className={styles.test}>
                <Link to={`/UXPrep/quiz/${test.id}`}>
                  <img src={testIcon} alt='' aria-hidden="true" loading="lazy" className={styles.testImage} />
                  <h3 className={styles.testTitle} >{test.name}</h3>
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}