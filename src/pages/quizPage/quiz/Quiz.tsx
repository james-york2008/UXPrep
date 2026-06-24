import styles from '../../../css/quizPage/QuizPage.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { QuizPageTest } from '../../../types/quizPage/QuizPageTest'
import Questions from './Questions'
import handleQuizSubmission from './handleQuizSubmission'

export default function Quiz() {
  let { quizId } = useParams<{ quizId: string }>()
  const [quizData, setQuizData] = useState<QuizPageTest>()
  const [loading, setLoading] = useState<boolean>(true)
  const quizzes = ['htmlCss', 'javascript', 'react', 'accessibility']
  const [quizResults, setQuizResults] = useState<boolean[] | null>(null)

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const answersArray: string[] = []

    quizData?.questions.forEach(question => {
      const answer = formData.get(question.id) as string
      answersArray.push(answer || '')
    })

    const results = handleQuizSubmission(quizData, answersArray)
    setQuizResults(results)
  }

  let correctAnswers = 0
  quizResults?.forEach((result) => {
    if (result) correctAnswers++
  })

  return(
    <section className={styles.testSection}>
      <form className={styles.test} id="tests" onSubmit={handleSubmit}>
        <p className={styles.testType}>{quizData?.title}</p>

        {quizData && <Questions data={quizData} results={quizResults} />}

        <p className={styles.errorText}>{quizResults === null && `Please answer all questions before submitting`}</p>
        <button type="submit" className={`button ${styles.button}`}>Submit</button>
        <p className={styles.result}>{quizResults && `You got ${correctAnswers} out of ${quizData?.questions.length} correct`}</p>
      </form>
    </section>    
  )
}