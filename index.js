const email = document.querySelector('#email')
const emailRegex = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/

// becky@gmail.com

email.addEventListener('keyup', (e) => {
    console.log(e.target.value)

    if (emailRegex.test(e.target.value)) {
        email.parentElement.classList.add('valid')
    } else {
        email.parentElement.classList.remove('valid')
    }
})