import type { QuizPageTest } from "../../../types/quizPage/QuizPageTest"

export default function handleQuizSubmission(data: QuizPageTest | undefined, userInput: string[]) {
  let resultsArray: boolean[] | null = []

  data?.questions.forEach((question, index) => {
    if (!userInput[index]) {
      resultsArray = null
    }

    if (question.correctAnswer === userInput[index]) {
      resultsArray?.push(true)
    } else {
      resultsArray?.push(false)
    }
  })

  return resultsArray
}