import styles from '../../../css/quizPage/QuizPage.module.css'

export default function Quiz() {
  return(
    <section className={styles.testSection}>
      <form className={styles.test} id="tests">
        <p className={styles.testType}></p>

        <div className={styles.questionsContainer}>
        </div>

        <button type="submit" className={`button ${styles.button}`}>Submit</button>
      </form>
    </section>    
  )
}