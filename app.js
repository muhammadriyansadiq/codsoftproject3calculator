let calculatorOn = true;

let upperdisplay = document.querySelector(".upperdisplay")
let seven = document.querySelector("#seven").value
let eight = document.querySelector("#eight").value
let nine = document.querySelector("#nine").value
let devide = document.querySelector("#devide").value

let four = document.querySelector("#four").value
let five = document.querySelector("#five").value
let six = document.querySelector("#six").value
let multiply = document.querySelector("#multiply").value

let one = document.querySelector("#one").value
let two = document.querySelector("#two").value
let three = document.querySelector("#three").value
let minus = document.querySelector("#minus").value

let cee = document.querySelector("#cee").value
let zero = document.querySelector("#zero").value
let equalto = document.querySelector("#equalto").value
let plus = document.querySelector("#plus").value

function seve(){
    if (calculatorOn) {
        upperdisplay.textContent += seven
     
    }

}
function eigh(){
    if (calculatorOn) {
        upperdisplay.textContent += eight
     
    }
}

function nin(){
    if (calculatorOn) {
         upperdisplay.textContent += nine
     
    }
}

function devid(){
    if (calculatorOn) {
        upperdisplay.textContent += devide
     
    }
}


function fou(){
    if (calculatorOn) {
        upperdisplay.textContent += four
     
    }
}
function fiv(){
    if (calculatorOn) {
        upperdisplay.textContent += five
     
    }
}

function si(){
    
    if (calculatorOn) {
        upperdisplay.textContent += six
     
    }
}

function multipl(){
    
    if (calculatorOn) {
        upperdisplay.textContent += multiply
     
    }
}


function on(){

    if (calculatorOn) {
        upperdisplay.textContent += one
     
    }
}
function tw(){
    if (calculatorOn) {
        upperdisplay.textContent += two
     
    }
}

function thre(){
    if (calculatorOn) {
        upperdisplay.textContent += three
     
    }

}

function minu(){
    if (calculatorOn) {
     
        upperdisplay.textContent += minus
    }
    
}


function ce(){
    if (calculatorOn) {
        upperdisplay.textContent =""
     
    }
    
    
}
function zer(){
    if (calculatorOn) {
     
        upperdisplay.textContent += zero
    }
}

function equalt(){
    if (calculatorOn) {
        upperdisplay.textContent = eval(upperdisplay.textContent)
     
    }
    
}

function plu(){
    if (calculatorOn) {
        upperdisplay.textContent += plus
     
    }
}

function turnOff() {
    calculatorOn = false;
    upperdisplay.textContent = "";
    setTimeout(() => {
        upperdisplay.textContent ="CASIO"
    }, 100);
    setTimeout(() => {
        upperdisplay.textContent = "Calculator is off";
    }, 1000);
    // upperdisplay.textContent = "Calculato r is off";
   
}

function turnOn() {
    calculatorOn = true;
    setTimeout(() => {
        upperdisplay.textContent ="CASIO"
    }, 400);
    setTimeout(() => {
        upperdisplay.textContent ="Calculator Is On"
    }, 800);
    setTimeout(() => {
        upperdisplay.textContent = ""
    }, 1500);
    
}

