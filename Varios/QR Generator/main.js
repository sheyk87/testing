//-------------------- Java Script --------------------//
let input = document.querySelector(".input-text");
let buttonQR = document.querySelector(".generate-qr");
let areaQR = document.querySelector(".qr-area");
let imgQR = document.querySelector(".qr-img");
let errorText = document.querySelector(".error");

buttonQR.addEventListener("click", ()=>{
    if (input.value === "") {
        errorText.style.display = "block";
        areaQR.style.height = "0";
    }else {
        imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
        areaQR.style.height = "120px";
        errorText.style.display = "none";

        input.value = "";
    }
})