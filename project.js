// alert('project')

// DIGITAL CLOCK

window.onload = function () {
    let hourCon = document.querySelector('.hour')
    let minCon = document.querySelector('.minutes')
    let secCon = document.querySelector('.seconds')

    setInterval(() => {
        const date = new Date()

        hour = date.getHours()
        min = date.getMinutes()
        sec = date.getSeconds()

        hourCon.textContent = (hour < 10) ? "0" + hour : hour;
        minCon.textContent = (min < 10) ? "0" + min : min;
        secCon.textContent = (sec < 10) ? "0" + sec : sec;
        // if(date.getHours() < 10){
        //     hour.textContent = "0" + date.getHours()
        // }else{
        //     hour.textContent = date.getHours()
        // }


        // if(date.getMinutes() < 10){
        //     min.textContent = "0" + date.getMinutes()
        // }else{
        //     min.textContent = date.getMinutes()
        // }
        // if(date.getSeconds() < 10){
        //     sec.textContent = "0" + date.getSeconds()
        // }else{
        //     sec.textContent = date.getSeconds()
        // }
    })
}


// Form Validation

// const form = document.querySelector('.myform')
// const username = document.querySelector('#username')
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const ConPass = document.querySelector('#conPass')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()

//     checkInputs()
//     console.log('submitted');
// })



// function checkInputs() {
//     const usernameVal = username.value.trim()
//     const emailVal = email.value.trim()
//     const passwordVal = password.value.trim()
//     const ConPassVal = ConPass.value.trim()

//     if (usernameVal === '') {
//         setError(username, "Fill out this field")
//     }else if(usernameVal < 2){
//         setError(username, "Enter a valid name")
//     }else{
//         setSuccess(username)
//     }

//     if(emailVal === ''){
//         setError(email, "Fill out this field")
//     }else{
//         setSuccess(email)
//     }
//     if(passwordVal === ''){
//         setError(password, "Fill out this field")
//     }else{
//         setSuccess(password)
//     }
//     if(ConPassVal === ''){
//         setError(ConPass, "Fill out this field")
//     }else if(ConPassVal !== passwordVal){
//         setError(ConPass, "Password mismatch")
//     }else{
//         setSuccess(ConPass)
//     }

// }

// function setError(input, message){
//     const formControl = input.parentElement
//     const errorMsg = formControl.lastElementChild
//     formControl.classList = "form-control error"
//     console.log(formControl);
//     errorMsg.innerText = message
// }

// function setSuccess(input){
//     const formControl = input.parentElement
//     const errorMsg = formControl.lastElementChild
//     formControl.classList = "form-control success"
//     console.log(formControl);
//     errorMsg.innerText = ""

// }


// Validate

// FORM VALIDATION

const formEl = document.querySelector('.myform')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const conPass = document.querySelector('#con-pass')

console.log(formEl);
formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const conPassVal = conPass.value.trim()

    if (usernameVal === '') {
        setError(username, "Fill out this field")
    }
    else if (usernameVal.length < 3) {
        setError(username, "Enter a valid name")
    }
    else {
        setSuccess(username)
    }

    if (emailVal === '') {
        setError(email, "Fill out this field")
    }
    else {
        setSuccess(email)
    }
    if (passwordVal === '') {
        setError(password, "Fill out this field")
    }
    else if (passwordVal.length < 5) {
        setError(password, "Must be 5 characters length")
    }
    else {
        setSuccess(password)
    }
    if (conPassVal === '') {
        setError(conPass, "Fill out this field")
    } else if (conPassVal !== passwordVal) {
        setError(conPass, "Password mismatch")
    }
    else {
        setSuccess(conPass)
    }
}


function setError(input, message) {
    const formControl = input.parentElement
    formControl.classList = "form-control error"
    console.log(formControl);
    const errorMsg = formControl.lastElementChild
    errorMsg.innerText = message

}

function setSuccess(input) {
    const formControl = input.parentElement
    formControl.classList = "form-control success"
    console.log(formControl);
    const errorMsg = formControl.lastElementChild
    errorMsg.innerText = ""
}

// setSuccess(username)


// CALCULATOR

const displayScreen = document.querySelector('.display-screen')
const ansScreen = document.querySelector('.ans-screen')
const keyPad = document.querySelector('.key-pad')

displayScreen.innerText = ""
keyPad.addEventListener('click', (e)=>{
    if(e.target.classList.contains('num')){
        btn = e.target.innerText;
        displayScreen.innerText = displayScreen.innerText + btn

        console.log(displayScreen);
    }

    if(e.target.classList.contains("operator")){
        btn = e.target.innerText;
        displayScreen.innerText = " " + displayScreen.innerText + " " + btn + " "
        console.log(displayScreen);
    }

    if(e.target.classList.contains('clear')){
        displayScreen.innerText = ""
        ansScreen.innerText = 0
    }

    // if(e.target.classList.contains('power')){
    //     btn = e.target.innerText;
    //     displayScreen.innerText = " " + 

    // }

    if (e.target.classList.contains("equal")) {
        ansScreen.textContent = eval(displayScreen.innerText)
        console.log(ansScreen);
    }
})