import type { QuizPageTest } from "../../types/quizPage/QuizPageTest"

export const test: QuizPageTest = {
  id: "htmlCss",
  title: "HTML & CSS",
  questions: [
    {
      id: "q1",
      question: "What is the primary benefit of using semantic HTML elements instead of generic elements like div or span?",
      options: [
        "Improves accessibility, SEO, and code maintainability",
        "Reduces file size significantly",
        "Automatically applies better default styles",
        "Improves JavaScript execution speed"
      ],
      correctAnswer: "Improves accessibility, SEO, and code maintainability"
    },
    {
      id: "q2",
      question: "Which description best explains the difference between inline, block, and inline-block elements?",
      options: [
        "Inline elements can have width and height, while block elements cannot",
        "Block elements start on a new line, inline elements flow with text, and inline-block allows sizing while staying inline",
        "Inline-block elements are deprecated and should not be used",
        "There is no meaningful difference between them in modern CSS"
      ],
      correctAnswer: "Block elements start on a new line, inline elements flow with text, and inline-block allows sizing while staying inline"
    },
    {
      id: "q3",
      question: "Which statement accurately describes how CSS positioning works?",
      options: [
        "Relative positioning moves an element relative to its parent, while absolute is relative to the viewport",
        "Relative keeps normal flow, absolute positions relative to the nearest positioned ancestor, fixed stays relative to viewport, and sticky switches between relative and fixed",
        "Absolute positioning always places elements on top of others and fixed elements scroll normally",
        "Sticky positioning is no longer supported in modern browsers"
      ],
      correctAnswer: "Relative keeps normal flow, absolute positions relative to the nearest positioned ancestor, fixed stays relative to viewport, and sticky switches between relative and fixed"
    },
    {
      id: "q4",
      question: "When should ARIA attributes be used in a web application?",
      options: [
        "As a replacement for all semantic HTML elements",
        "Only when native HTML elements do not provide sufficient accessibility",
        "To improve CSS styling capabilities",
        "To define responsive breakpoints in HTML"
      ],
      correctAnswer: "Only when native HTML elements do not provide sufficient accessibility"
    },
    {
      id: "q5",
      question: "Why are relative units like rem, em, and percentages often preferred over pixels in CSS?",
      options: [
        "They scale based on context, improving responsiveness and accessibility",
        "They are processed faster by browsers",
        "They are required for flexbox layouts",
        "They prevent layout shifts entirely"
      ],
      correctAnswer: "They scale based on context, improving responsiveness and accessibility"
    },
    {
      id: "q6",
      question: "Which approach to applying CSS is generally preferred in production environments?",
      options: [
        "Inline styles for faster rendering",
        "Internal stylesheets for better organization",
        "External stylesheets for maintainability and caching",
        "Using only !important rules to enforce consistency"
      ],
      correctAnswer: "External stylesheets for maintainability and caching"
    },
    {
      id: "q7",
      question: "Why is overusing !important considered a bad practice in CSS?",
      options: [
        "It prevents CSS from loading properly",
        "It breaks the cascade and makes styles difficult to maintain and debug",
        "It reduces browser compatibility",
        "It disables media queries"
      ],
      correctAnswer: "It breaks the cascade and makes styles difficult to maintain and debug"
    },
    {
      id: "q8",
      question: "How do viewport units like vh and vw differ from percentages in CSS?",
      options: [
        "Viewport units are based on the browser window size, while percentages depend on the parent element",
        "Percentages are based on the viewport, while vh and vw are fixed values",
        "They behave identically in all layout contexts",
        "Viewport units only apply to font sizes"
      ],
      correctAnswer: "Viewport units are based on the browser window size, while percentages depend on the parent element"
    },
    {
      id: "q9",
      question: "What is the key difference between content-box and border-box in the CSS box model?",
      options: [
        "Content-box includes padding and border in the width, while border-box does not",
        "Border-box includes content, padding, and border within the declared width, while content-box does not",
        "Content-box is only used in flexbox layouts",
        "Border-box is deprecated in modern CSS"
      ],
      correctAnswer: "Border-box includes content, padding, and border within the declared width, while content-box does not"
    },
    {
      id: "q10",
      question: "Why is maintaining a proper heading hierarchy (h1 through h6) important in HTML?",
      options: [
        "It only affects visual styling of text",
        "It improves accessibility, SEO, and provides meaningful document structure",
        "It is required for CSS grid layouts to function",
        "It ensures JavaScript event listeners work correctly"
      ],
      correctAnswer: "It improves accessibility, SEO, and provides meaningful document structure"
    }
  ]
}