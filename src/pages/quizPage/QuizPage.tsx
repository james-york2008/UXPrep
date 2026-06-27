import Navbar from "../../components/navbar/Navbar"
import Quiz from "./quiz/Quiz"
import Legal from "../../components/legal/Legal"
import { useParams } from "react-router-dom"
import ErrorPage from "../errorPage/ErrorPage"

export default function QuizPage() {
  let { quizId } = useParams<{ quizId: string }>()
  const quizzes = ['htmlCss', 'javascript', 'react', 'accessibility']

  if (!quizId || !quizzes.includes(quizId) && quizId !== 'random') {
    return(
      <ErrorPage>Quiz not found</ErrorPage>
    )
  }
  
  return (
    <>
      <Navbar mainLink="quiz" skipToMainLink="quizSection" />

      <main id="quizSection">
        <Quiz quizId={quizId} quizzes={quizzes}/>
      </main>
      
      <Legal />
    </>
  )
}