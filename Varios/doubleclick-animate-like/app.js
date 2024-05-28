const container = document.querySelector('.container');
const heart = document.querySelector('.heart');

// Agregamos el evento doble click al contenedor
container.addEventListener("dblclick", (e)=>{

    // Agregamos la clase ACTIVE al elemento heart para aplicarle la animacion
    heart.classList.add('active');

    // Removemos la clase ACTIVE despues de 1 segundo
    setTimeout(() =>{
        heart.classList.remove('active');
    }, 1000)

    // Calculamos posicion en X/Y del evento doble click
    let xValue = e.clientX - e.target.offsetLeft;
    let YValue = e.clientY - e.target.offsetTop;

    // Aplicamos valores XValue/YValue en elemento heart para darle posicion
    heart.style.left = `${xValue}px`;
    heart.style.top = `${YValue}px`;

});