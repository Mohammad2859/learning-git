let displayInput = document.querySelector(".input");
let displayOutput = document.querySelector(".output");

let keys = document.querySelectorAll(".key")
let input = "";

for (let key of keys){
    let value = key.dataset.key;
    key.addEventListener("click",() => {
        if (value === "clear"){
            input = "";
            displayInput.innerHTML = "";
            displayOutput.innerHTML = "";
        }else if (value === "backspace"){
            input = input.slice(0, -1);
            displayInput.innerHTML = CleanInput(input);
        }else if (value === "="){
            let result = eval(Prepration(input));
            displayOutput.innerHTML = CleanOutput(result);
        }else if (value === "brakets"){
            if (input.indexOf("(") == -1 || input.indexOf("(") != -1 && input.indexOf(")") != -1 && input.lastIndexOf("(") < input.lastIndexOf(")")){
                input += "(";
            }else if(input.indexOf("(") != -1 && input.indexOf(")" == -1) || input.indexOf("(") != -1 && input.indexOf(")") != -1 && input.lastIndexOf("(") > input.lastIndexOf(")")){
                input += ")"
            }
            displayInput.innerHTML = CleanInput(input);
        }else{
            if(Validation(value)){
                input += value;
                displayInput.innerHTML = CleanInput(input)
            }
            
            
        }
        
    })
}

function CleanInput(input) {
    let inputArray = input.split("");
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i] === "*"){
            inputArray[i] = `<span class= "operator">x</span>`
        }else if (inputArray[i] === "/"){
            inputArray[i] = `<span class= "operator">÷</span>`
        }else if (inputArray[i] === "%"){
            inputArray[i] = `<span class= "percent">%</span>`
        }else if (inputArray[i] === "-"){
            inputArray[i] = `<span class= "operator"> - </span>`
        }else if (inputArray[i] === "+"){
            inputArray[i] = `<span class= "operator">+</span>`
        }else if (inputArray[i] === "("){
            inputArray[i] = `<span class= "brakets">(</span>`
        }else if (inputArray[i] === ")"){
            inputArray[i] = `<span class= "brakets">)</span>`
        }
    }
    return inputArray.join("");
}

function CleanOutput(output){
    let outputString = output.toString();
    let outputArray = outputString.split("");

    if (outputArray.length > 3){
        for (let i = outputArray.length - 3; i > 0; i -= 3){
            outputArray.splice(i, 0, ",");
        }
    }
    return outputArray.join("");
}

function Validation(value){
    let oeprators = ["+", "-", "*", "÷"]
    let lastInput = input.slice(-1);
    if (value === "." && lastInput === "."){
        return false
    }else if (oeprators.includes(value) && oeprators.includes(lastInput)){
        return false
    }
    return true;
}

function Prepration(input){
    inputArray = input.split("");
    for (let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === "%"){
            inputArray[i] = "/100"
        }
    }
    return inputArray.join("")
}
