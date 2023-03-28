const letterImg = document.getElementById('letter_img')
const homeDiv = document.getElementById('text_and_letter_div')
const authDiv = document.getElementById('auth_div')
const letterDiv = document.getElementById('letter_content_div')
const mainBody = document.getElementById('main_webpage_content')

let currentDiv = homeDiv

const switchDivVisibility = (newdiv, display)=> {
    const previousDiv = currentDiv
    const newDiv = newdiv
    
    if (newDiv == authDiv) {
        mainBody.style.backgroundColor = '#576daa'
    } else if (newDiv == letterDiv) {
        mainBody.style.backgroundColor = '#3f507e'
    } else if (newDiv == homeDiv) {
        mainBody.style.backgroundColor = '#6881c7'
    }
    
    previousDiv.style.display = 'none'
    newDiv.style.display = display

    currentDiv = newdiv
}

letterImg.addEventListener("click", (e)=> {
    e.preventDefault()
    switchDivVisibility(authDiv, 'flex')
})

const passwordSubmit = document.getElementById('password_submit')

const authenticateUser = ()=> {
    const passwordInput = document.getElementById('password_input').value
    const warningDiv = document.getElementById('password_error_div')
    if (passwordInput == '1302') {
        switchDivVisibility(letterDiv, 'flex')
        warningDiv.style.display = 'none'
    } else {
        warningDiv.style.display = 'flex'
        authDiv.style.paddingBottom = '1%'
    }
}

passwordSubmit.addEventListener("click", (e)=> {
    e.preventDefault()
    authenticateUser()
})

const closeIcon = document.getElementById('close_icon')

closeIcon.addEventListener("click", (e)=> {
    e.preventDefault()
    switchDivVisibility(homeDiv, 'flex')
})