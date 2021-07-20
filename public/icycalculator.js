// Icy Calculadora \\

function getInputValue(){
    let input = event.target.innerText;
    // console.log(input)
    printValue(input);
}

function printValue(value){
    let out = document.querySelector('#resultado');
    let current = out.innerHTML;

    if(out.innerHTML == "0") 
    {
        if(value !="C" && value != "CE"){
            out.innerHTML="";
        }

    }else
        if(value =="CE"){
            out.innerHTML = current.slice(0,-1);
            if(out.innerHTML.length == 0){
                out.innerHTML = "0";
            }
        }

        if(value != "C" && value != "CE" && value != "="){
            out.innerHTML += value;
        }
        if(value =="C"){
            out.innerHTML = "0";
        }
        if(value == "="){
            let resultado = out.innerHTML;
            out.innerHTML = eval(resultado);
        }
    }


let buttons = document.getElementsByTagName('button');
for (let i = 0; i<buttons.length; i++){
    buttons[i].setAttribute('onclick','getInputValue()');
}

