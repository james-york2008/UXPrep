document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('dropdownButton')
    let navList = document.getElementById('navList')

    btn.addEventListener('click', function() {

        navList.classList.toggle('d-none')
        navList.classList.toggle('d-show')

        if (navList.classList.contains('d-show')) {
            navList.style.padding = '2rem'
        } else {
            navList.style.padding = '0'
        }

        const expanded = btn.getAttribute('aria-expanded') === 'true'
        btn.setAttribute('aria-expanded', (!expanded).toString())
    })
})