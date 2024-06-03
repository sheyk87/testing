//-------------------- Java Script --------------------//
let password = document.getElementById("password");
let output = document.querySelector(".output");

let length = document.getElementById("length");
let lower = document.getElementById("lower");
let upper = document.getElementById("upper");
let number = document.getElementById("number");
let special = document.getElementById("special");

function check() {
    let passwordValue = password.value;
    // console.log(passwordValue)
    if (passwordValue.length > 0) {
        output.style.display = "block";
    }else {
        output.style.display = "";
    }


    if (passwordValue.length >= 8) {
        length.style.color = "green";
    }else {
        length.style.color = "";
    }

    if(passwordValue.search(/[a-z]/) != -1) {
        lower.style.color = "green";
    }else {
        lower.style.color = "";
    }
    
    if(passwordValue.search(/[A-Z]/) != -1) {
        upper.style.color = "green";
    }else {
        upper.style.color = "";
    }

    
    if(passwordValue.search(/[0-9]/) != -1) {
        number.style.color = "green";
    }else {
        number.style.color = "";
    }

    if(passwordValue.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) != -1) {
        special.style.color = "green";
    }else {
        special.style.color = "";
    }
}