import { loadQuestions } from "./loadTest.js"

document.addEventListener('DOMContentLoaded', async() => {
    const parameters = new URLSearchParams(window.location.search)
    const type = parameters.get('type')

    const data = await loadQuestions()
    let test = data.quizzes.find(section => section.type === type)
    if (type === 'random') {
        let randomNumber = Math.floor(Math.random() * data.quizzes.length)
        test = data.quizzes[randomNumber]
    }

    if (!test) {
        document.body.innerHTML = `<h1>Test not found</h1>`
        return
    } else {
        let testLabel = document.getElementById('testType')
        testLabel.textContent = test.title
    }

    let questionsContainer = document.getElementById('questionsContainer')

    test.questions.forEach(question => {
        let answers = ``
        
        question.options.forEach((answer, index) => {
            const letter = String.fromCharCode(65 + index)

            let answerContent = `
                <label>  
                    <input type="radio" name="${question.id}" value="${answer}">  
                    <span class="answerLetter">${letter}.</span>  
                    <span class="answerText">${answer}</span>  
                </label><br>
            `
            answers = answers + answerContent
        })

        let fieldset = document.createElement('fieldset')    
        fieldset.classList.add('question')    
        fieldset.innerHTML = `
            <legend>${question.question}</legend>
            <div>${answers}</div>
        `    

        questionsContainer.append(fieldset)
    })

    const form = document.getElementById('test')

    let allAnswered = true
    let allQuestionsAnswered = () => {
        test.questions.forEach(question => {
            allAnswered = true
            let selectedAnswers = document.querySelector(`input[name="${question.id}"]:checked`)
            if (!selectedAnswers) {
                allAnswered = false
            }
        })
    }

    let selectedAnswerText = ''
    let checkAnswers = () => {
        document.querySelectorAll('.correct, .incorrect').forEach(answer => {
            answer.classList.remove('correct', 'incorrect')
        })
        
        if (allAnswered === true) {
            let correctAnswerCount = 0
            test.questions.forEach(question => {
                selectedAnswerText = document.querySelector(`input[name="${question.id}"]:checked`)
                
                if (!selectedAnswerText) {
                    return
                }

                let selectedAnswer = selectedAnswerText.closest('label')

                if (selectedAnswerText.value === question.correctAnswer) {
                    correctAnswerCount++
                    selectedAnswer.classList.add('correct')
                } else {
                    selectedAnswer.classList.add('incorrect')
                }
            })
            
            let resultTextbox = document.getElementById('result')
            resultTextbox.textContent = `You got ${correctAnswerCount} out of ${test.questions.length} correct!`
        } else {
            let resultTextbox = document.getElementById('result')
            resultTextbox.textContent = `Please answer all questions before submitting.`
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        allQuestionsAnswered()
        checkAnswers()
    })
    
})