import { Link } from 'react-router-dom'
import styles from '../../../css/landingPage/Tests.module.css'
import { useEffect, useState } from 'react'
import type { LandingPageTest } from '../../../types/landingPage/LandingPageTest'

const testIcons: Record<string, string> = import.meta.glob(
  '../../../assets/testIcons/*',
  {
    eager: true,
    import: 'default'
  }
)

export default function Tests () {
  const [landingPageTests, setLandingPageTests] = useState<LandingPageTest[]>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch('/UXPrep/data/landingPageTests.json')
      
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
  
        let data = await res.json()
        setLandingPageTests(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) (
    <p>Loading quizzes</p>
  )
  
  return(
    <section className={styles.tests} id='tests'>
      <h2>Choose a quiz topic</h2>

      <ul className={styles.testsList}>
        {landingPageTests?.map((test) => {
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