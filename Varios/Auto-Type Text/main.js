//-------------------- Java Script --------------------//
let textElement = document.getElementById("text");

let textArray = ["Programmer", "Graphic Designer", "Youtuber", "Web Developer"];

let textIndex = Math.floor(Math.random() * textArray.length);

let currentText = "";

let textPosition = 0;
let textColor = ["#ff0000", "#00ff00", "##009dff", "#ff00ff", "#00ffff"];
textElement.style.color = textColor[Math.floor(Math.random() * textColor.length )]


function textType(){
    if(textPosition < textArray[textIndex].length){
        currentText += textArray[textIndex].charAt(textPosition);
        textElement.innerHTML = currentText;
        textPosition++;
        setTimeout(textType, 100);

    }
    else{
        setTimeout(eraseText, 1500);
    }
}
function eraseText(){

    if(currentText.length > 0){
        currentText = currentText.slice(0, -1);
        textElement.innerHTML = currentText;
        setTimeout(eraseText, 100);
    }
    else{
        textIndex ++;
        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        textPosition = 0;
        currentText = "";


        textElement.style.color = textColor[Math.floor(Math.random() * textColor.length )]

        setTimeout(textType, 100)
    }
}

textType()   