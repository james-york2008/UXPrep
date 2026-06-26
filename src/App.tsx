import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage/LandingPage"
import QuizPage from "./pages/quizPage/QuizPage"
import { useEffect } from "react"
import ErrorPage from "./pages/errorPage/ErrorPage"

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

          <Route path="*" element={<ErrorPage>Page not found</ErrorPage>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

