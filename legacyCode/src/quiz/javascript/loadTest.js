export async function loadQuestions() {
    const response = await fetch('./test.json')
    const data = await response.json()
    return data
}