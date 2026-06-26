import Navbar from "../../components/navbar/Navbar"
import Quiz from "./quiz/Quiz"
import Legal from "../../components/legal/Legal"


export default function QuizPage() {
  return (
    <>
      <Navbar />

      <main id="mainContent">
        <Quiz />
      </main>
      
      <Legal />
    </>
  )
}