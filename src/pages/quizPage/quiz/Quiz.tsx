import styles from '../../../css/quizPage/QuizPage.module.css'
import { useEffect, useState } from 'react'
import type { QuizPageTest } from '../../../types/quizPage/QuizPageTest'
import Questions from './Questions'
import handleQuizSubmission from './handleQuizSubmission'

type Props = {
  quizId: string
  quizzes: string[]
}

export default function Quiz({ quizId, quizzes }: Props) {
  const [quizData, setQuizData] = useState<QuizPageTest>()
  const [loading, setLoading] = useState<boolean>(true)
  const [quizResults, setQuizResults] = useState<boolean[] | null>(null)

  useEffect(() => {
    const loadQuiz = async () => {
      try{
        if (quizId === 'random') {
          quizId = quizzes[Math.floor(Math.random() * quizzes.length)]
        }

        const res = await fetch(`/UXPrep/data/quizzes/${quizId}.json`)
        
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }

        let data = await res.json()
        setQuizData(data)      
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
      <p className={styles.loadingText} aria-live='polite'>Loading your quiz</p>
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
    <section className={styles.testSection} id='quiz'>
      <form className={styles.test} onSubmit={handleSubmit}>
        <p className={styles.testType}>{quizData?.title}</p>

        {quizData && <Questions data={quizData} results={quizResults} />}

        <p className={styles.errorText} role='alert'>{quizResults === null && `Please answer all questions before submitting`}</p>
        <button type="submit" className={`button ${styles.button}`}>Submit</button>
        <p className={styles.result} role='status'>{quizResults && `You got ${correctAnswers} out of ${quizData?.questions.length} correct`}</p>
      </form>
    </section>    
  )
}