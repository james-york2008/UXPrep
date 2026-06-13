import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage/LandingPage"
import QuizPage from "./pages/quizPage/QuizPage"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/UXPrep/" element={<LandingPage />} />

          <Route path="/quiz/:quizId" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

