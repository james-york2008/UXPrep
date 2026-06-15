import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage/LandingPage"
import QuizPage from "./pages/quizPage/QuizPage"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/quiz/:quizId" element={<QuizPage />} />

          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

