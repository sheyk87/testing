var loginText = document.querySelector(".title_text .login"),
    loginForm = document.querySelector("form.login"),
    loginBtn = document.querySelector("label.login"),
    signupBtn = document.querySelector("label.signup"),
    signupLink = document.querySelector("form .signup_link a"),
    passwordField = document.querySelectorAll(".input_field.pass input"),
    eyeBtns = document.querySelectorAll(".fa-solid")


signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%"
    loginText.style.marginLeft = "-50%"
}


loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%"
    loginText.style.marginLeft = "0%"
}

 
signupLink.onclick = ()=> {
    signupBtn.click()
    return false;
}


passwordField.forEach((pass, index) => {
    pass.onkeyup = () => {
        let userData = pass.value
        if(userData.trim() != ''){
            eyeBtns[index].style.opacity = 1
            eyeBtns[index].style.pointerEvents = "auto"
        }
        else{
            eyeBtns[index].style.opacity = 0.5
            eyeBtns[index].style.pointerEvents = "none"
            pass.type = "password"
            eyeBtns[index].classList.remove("fa-eye-slash")
            eyeBtns[index].classList.add("fa-eye")
        }
    }


    eyeBtns[index].addEventListener('click', ()=>{
        if(pass.type == "password"){
            pass.type = "text"
            eyeBtns[index].classList.remove("fa-eye")
            eyeBtns[index].classList.add("fa-eye-slash")
        }
        else{
            pass.type = "password"
            eyeBtns[index].classList.remove("fa-eye-slash")
            eyeBtns[index].classList.add("fa-eye")
        }
    })
})