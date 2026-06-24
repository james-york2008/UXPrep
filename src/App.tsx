import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage/LandingPage"
import QuizPage from "./pages/quizPage/QuizPage"
import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const navigationElement = document.querySelector(window.location.hash)
    
      if (navigationElement) {
        const timer = setTimeout(() => {
          navigationElement.scrollIntoView()
        }, 100)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/UXPrep" element={<LandingPage />} />

          <Route path="/UXPrep/quiz/:quizId" element={<QuizPage />} />

          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

