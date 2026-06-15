import type { QuizPageTest } from '../../../types/quizPage/QuizPageTest'
import styles from '../../../css/quizPage/QuizPage.module.css'

type Props = {
  data: QuizPageTest
}

export default function Questions({ data }: Props) {
  let letter
  
  return(
    <div className={styles.questionsContainer}>
      {data.questions.map((question) => (
        <fieldset className={styles.question} key={question.id}>
          <legend>{question.question}</legend>

          {question.options.map((answer, index) => (
            <div key={index}>
              {(() => {
                letter = String.fromCharCode(65 + index)
                return null
              })()}

              <label>  
                <input type="radio" name={question.id} value={answer} />  
                <span className={styles.answerLetter}>{letter}.</span>  
                <span className={styles.answerText}>{answer}</span>  
              </label>
              <br />
            </div>
          ))}
        </fieldset>
      ))}  
    </div>
  )
}