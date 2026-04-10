document.addEventListener('DOMContentLoaded', async() => {
    const form = document.getElementById('test')

    const handleClick = (event) => {
        const answer = event.target.closest('.answer')
        if (!answer) {
            return
        }

        const input = answer.querySelector('input[type="radio"]')
        if (input) {
            input.checked = true
        }
    }

    form.addEventListener('click', handleClick)
})