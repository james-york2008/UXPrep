import type { QuizPageTest } from "../../types/quizPage/QuizPageTest"

export const test: QuizPageTest = {
  id: "react",
  title: "ReactJS",
  questions: [
    {
      id: "q1",
      question: "What is the primary purpose of React hooks?",
      options: [
        "To replace Redux entirely",
        "To allow state and lifecycle features in functional components",
        "To improve CSS styling in React apps",
        "To enforce class-based component usage"
      ],
      correctAnswer: "To allow state and lifecycle features in functional components"
    },
    {
      id: "q2",
      question: "What is the difference between useState and useReducer?",
      options: [
        "useState is for global state, useReducer is for local state",
        "useReducer is better suited for complex state logic, while useState is simpler",
        "useState is asynchronous while useReducer is synchronous",
        "There is no difference between them"
      ],
      correctAnswer: "useReducer is better suited for complex state logic, while useState is simpler"
    },
    {
      id: "q3",
      question: "What does the dependency array in useEffect control?",
      options: [
        "Which components can access the effect",
        "When the effect runs based on changes to specified values",
        "How many times the component re-renders",
        "Whether the component uses state or props"
      ],
      correctAnswer: "When the effect runs based on changes to specified values"
    },
    {
      id: "q4",
      question: "What is the virtual DOM in React?",
      options: [
        "A direct representation of the real DOM",
        "A lightweight copy of the real DOM used to optimize updates",
        "A browser API for DOM manipulation",
        "A replacement for HTML"
      ],
      correctAnswer: "A lightweight copy of the real DOM used to optimize updates"
    },
    {
      id: "q5",
      question: "Why are keys important when rendering lists in React?",
      options: [
        "They improve CSS styling",
        "They help React identify which elements have changed for efficient re-rendering",
        "They allow components to share state",
        "They are required for event handling"
      ],
      correctAnswer: "They help React identify which elements have changed for efficient re-rendering"
    },
    {
      id: "q6",
      question: "What is prop drilling in React?",
      options: [
        "Passing props deeply through multiple components unnecessarily",
        "Using props to manage global state",
        "A method of optimizing component rendering",
        "A way to fetch data from APIs"
      ],
      correctAnswer: "Passing props deeply through multiple components unnecessarily"
    },
    {
      id: "q7",
      question: "What is the purpose of React.memo?",
      options: [
        "To memoize values inside a component",
        "To prevent unnecessary re-renders of functional components based on props",
        "To manage side effects",
        "To handle asynchronous code"
      ],
      correctAnswer: "To prevent unnecessary re-renders of functional components based on props"
    },
    {
      id: "q8",
      question: "What is the difference between controlled and uncontrolled components?",
      options: [
        "Controlled components manage state internally, uncontrolled rely on Redux",
        "Controlled components use React state, uncontrolled components rely on the DOM",
        "Uncontrolled components are deprecated",
        "There is no difference"
      ],
      correctAnswer: "Controlled components use React state, uncontrolled components rely on the DOM"
    },
    {
      id: "q9",
      question: "What does useContext help avoid?",
      options: [
        "Using hooks in functional components",
        "Prop drilling by providing a way to share values across components",
        "Component re-renders entirely",
        "Using external libraries"
      ],
      correctAnswer: "Prop drilling by providing a way to share values across components"
    },
    {
      id: "q10",
      question: "What is the main benefit of code splitting in React?",
      options: [
        "It reduces the number of components",
        "It improves performance by loading code only when needed",
        "It eliminates the need for state management",
        "It simplifies JSX syntax"
      ],
      correctAnswer: "It improves performance by loading code only when needed"
    }
  ]
}