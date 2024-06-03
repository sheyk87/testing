//-------------------- Java Script --------------------//
// java script 
let container = document.querySelector(".container");
let switch_btn = document.getElementById("switch_btn");
let dark_img = document.getElementById("dark_img");
let dark_text = document.getElementById("dark_text");

container.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        switch_btn.style.left = "calc(100% - 80px - 10px)";
        dark_img.style.filter = "invert(1)";
        dark_text.innerText = "Dark Theme";

        dark_text.style.left = "10px";
    }

    else{
        switch_btn.style.left = "";
        dark_img.style.filter = "";
        dark_text.innerText = "Light Theme";
        dark_text.style.left = "";
    }
});