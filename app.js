var inputstring = document.querySelector("#inputstring")
var increasef = document.querySelector("#increasefsize")
var decreasef = document.querySelector("#decreasefsize")
var outputstring = document.querySelector("#outputstring")
var submit = document.querySelector("#submit")

var headinginput = document.querySelector("#inputheading")
var setheading = document.querySelector("#set-heading")
var outputheading = document.querySelector("#headingoutput")
var headerbutton = doucment.querySelector("#headbutton")

setheading.addEventListener("click",setheader);
//headerbutton.addEventListener("click",changeheadertype);

submit.addEventListener("click",printStatement);
increasef.addEventListener("click",increasesize);
decreasef.addEventListener("click",decreasesize);

var countincvar = 16;
var headcounter = 1;

function printStatement(){
    outputstring.innerText = inputstring.value
}
function increasesize(){
    countincvar+=2
    newsize = countincvar
    outputstring.style.fontSize = `${newsize}px`;
    console.log(newsize)
}

function decreasesize(){
    if(newsize > 16){
        newsize = newsize-2;
        outputstring.style.fontSize = `${newsize}px`
    }
    else{
        alert("Cannot Make the font smaller!!!")
    }
}

function setheader(){
    outputheading.innerText = headinginput.value
}

/**function changeheadertype(){
    headcounter++
    if(headcounter==1){
        outputheading.innerHTML = `<h1>${setheader}</h1>`
    }
    else if(headcounter==2){
        outputheading.innerHTML = `<h2>${headinginput.value}</h2>`
    }
    else{
        outputheading.innerHTML = `<h1>${headinginput.value}</h1>`
        headcounter = 0;
    }
}**/