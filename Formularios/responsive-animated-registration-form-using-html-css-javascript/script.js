var body = document.querySelector('body')
var btnOpen = document.querySelector('.toggle_btn')

btnOpen.addEventListener('click', ()=>{
    body.classList.toggle('open-login')
})