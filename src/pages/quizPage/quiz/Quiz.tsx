import styles from '../../../css/quizPage/QuizPage.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { QuizPageTest } from '../../../types/quizPage/QuizPageTest'
import Questions from './Questions'

export default function Quiz() {
  let { quizId } = useParams<{ quizId: string }>()
  const [quizData, setQuizData] = useState<QuizPageTest>()
  const [loading, setLoading] = useState<boolean>(true)
  const quizzes = ['htmlCss', 'javascript', 'react', 'accessibility']
  
  if (!quizId || !quizzes.includes(quizId) && quizId !== 'random') {
    return(
      <p className={styles.errorText}>Quiz not found</p>
    )
  }

  useEffect(() => {
    const loadQuiz = async () => {
      try{
        if (quizId === 'random') {
          quizId = quizzes[Math.floor(Math.random() * quizzes.length)]
        }

        const data = await import(`../../../data/quizzes/${quizId}.ts`)
                
        setQuizData(data.test)      
      } catch(err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (quizId) {
      loadQuiz()
    }
    
  }, [quizId])

  if (loading) {
    return(
      <p className={styles.loadingText}>Loading your quiz</p>
    )
  }

  return(
    <section className={styles.testSection}>
      <form className={styles.test} id="tests">
        <p className={styles.testType}>{quizData?.title}</p>

        {quizData && <Questions data={quizData} />}

        <button type="submit" className={`button ${styles.button}`}>Submit</button>
      </form>
    </section>    
  )
}