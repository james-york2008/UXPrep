import type { QuizPageTest } from '../../../types/quizPage/QuizPageTest'
import styles from '../../../css/quizPage/QuizPage.module.css'

type Props = {
  data: QuizPageTest
  results: boolean[] | null
}

export default function Questions ({ data, results }: Props)  {
  let letter

  return(
    <div className={styles.questionsContainer}>
      {data.questions.map((question, questionIndex) => (
        <fieldset className={styles.question} key={question.id}>
          <legend>{question.question}</legend>
          {results && <p>{results[questionIndex] ? 'Correct' : 'Incorrect'}</p>}

          <div className={`${results === null ? '' : results[questionIndex] ? styles.correct : styles.incorrect}`}>
            {question.options.map((answer, index) => (
              <div key={index}>
                {(() => {
                  letter = String.fromCharCode(65 + index)
                  return null
                })()}

                <label className={styles.answer}>  
                  <input type="radio" name={question.id} value={answer} required />  
                  <span className={styles.answerLetter} aria-hidden="true">{letter}.</span>  
                  <span className={styles.answerText}>{answer}</span>  
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}  
    </div>
  )
}
