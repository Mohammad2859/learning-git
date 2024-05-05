let input = document.querySelectorAll(".input")

let daysInput = document.querySelector("#days-input");
let monthsInput = document.querySelector("#months-input")
let yearsInput = document.querySelector("#years-input")

let arrowBtn = document.querySelector(".arrow");

let emptyField = document.querySelectorAll(".empty")

let unvalidDay = document.querySelector(".unvalid-day")
let unvalidMonth = document.querySelector(".unvalid-month")
let unvalidYear = document.querySelector(".unvalid-year")

let validDate = document.querySelector(".valid-date")
let validInputs = document.querySelectorAll(".valid-input")

let sections = document.querySelectorAll(".section")

let daysValue = document.querySelector(".days-output")
let monthsValue = document.querySelector(".months-output")
let yearsValue = document.querySelector(".years-output")

let values = document.querySelectorAll(".value")

let dayEqualToOne = document.querySelector(".day")
let monthyEqualToOne = document.querySelector(".month")
let yearEqualToOne = document.querySelector(".year")

let featureMonth = document.querySelector(".feature-month")
let featureDay = document.querySelector(".feature-day")


let curntDate = new Date().getDate();
let curntMonth = new Date().getMonth() + 1;
let curntYear = new Date().getFullYear();


let monthNow = new Date().getMonth() + 1;
let dateNow = new Date().getDate();


let monthsOutput , yearsOutput;

arrowBtn.addEventListener("click", Checking)
arrowBtn.addEventListener("click", calculation)

function calculation(){
    yearsOutput = curntYear - yearsInput.value;
    
    if(curntMonth > monthsInput.value){
        monthsOutput = curntMonth - monthsInput.value;
    }else{
        yearsOutput--;
        monthsOutput = 12 + curntMonth - monthsInput.value;
    }
    
    let daysOutput;
    
    if(curntDate > daysInput.value){
        daysOutput = curntDate - daysInput.value;
    }else{
        monthsOutput--;
        daysOutput = new Date(yearsOutput, monthsOutput,0).getDate() + curntDate - daysInput.value
    }

    if(yearsInput.value === new Date().getFullYear().toString() && monthsInput.value === monthNow.toString()){
        monthsOutput = 0;
        yearsOutput = 0;
    }
    if(yearsInput.value === new Date().getFullYear().toString() && monthsInput.value === monthNow.toString() && daysInput.value === new Date().getDate().toString()){
        daysOutput = 0;
        monthsOutput = 0;
        yearsOutput = 0;
    }
    if(daysOutput === 1){
        dayEqualToOne.innerHTML = "day"
       }else{
        dayEqualToOne.innerHTML = "days"
       }
       if(monthsOutput === 1){
        monthyEqualToOne.innerHTML = "month"
       }else{
        monthyEqualToOne.innerHTML = "months"
       }
       if(yearsOutput === 1){
        yearEqualToOne.innerHTML = "year"
       }else{
        yearEqualToOne.innerHTML = "years"
       }

    daysValue.innerHTML = daysOutput;
    monthsValue.innerHTML = monthsOutput;
    yearsValue.innerHTML = yearsOutput;
    
    
     
}

function Checking(){
    function CheckingTwo(){
        if (yearsInput.value === new Date().getFullYear().toString() && monthsInput.value > monthNow){
            return 1;
        }
        if (yearsInput.value === new Date().getFullYear().toString() && monthsInput.value >= monthNow && daysInput.value > dateNow){
            return 1;
        }
        for (let i = 0; i < emptyField.length; i++){
            if(input[i].value === ""){
                emptyField[i].style.display = "block"
                sections[i].style.color = "hsl(0, 100%, 67%)"
                input[i].style.borderColor = "hsl(0, 100%, 67%)"
            }else{
                emptyField[i].style.display = "none"
                sections[i].style.color = "#6c6c6c"
                input[i].style.borderColor = "hsl(0, 0%, 86%)"
                
            }
        }
    
        if(daysInput.value > 31 ){
            unvalidDay.style.display = "block"
            sections[0].style.color = "hsl(0, 100%, 67%)"
            input[0].style.borderColor = "hsl(0, 100%, 67%)"
        }else{
            unvalidDay.style.display = "none"
        }
        if(monthsInput.value > 12){
            unvalidMonth.style.display = "block"
            sections[1].style.color = "hsl(0, 100%, 67%)"
            input[1].style.borderColor = "hsl(0, 100%, 67%)"
        }else{
            unvalidMonth.style.display = "none"
        }
        if(yearsInput.value > 2023){
            unvalidYear.style.display = "block"
            sections[2].style.color = "hsl(0, 100%, 67%)"
            input[2].style.borderColor = "hsl(0, 100%, 67%)"
        }else{
            unvalidYear.style.display = "none"
        }
        
        if(daysInput.value === "31" &&  monthsInput.value === "2"||
           daysInput.value === "31" && monthsInput.value === "4" || 
           daysInput.value === "31" && monthsInput.value === "6" || 
           daysInput.value === "31" && monthsInput.value === "9" || 
           daysInput.value === "31" && monthsInput.value === "11"){
            validDate.style.display = "block"
            sections[0].style.color = "hsl(0, 100%, 67%)"
            input[0].style.borderColor = "hsl(0, 100%, 67%)"
        }else{
            validDate.style.display = "none"
        }    
    }
    function CheckingThree(){
        if (yearsInput.value === new Date().getFullYear().toString() && monthsInput.value >= monthNow && daysInput.value > dateNow){
            featureDay.style.display = "block"
            sections[0].style.color = "hsl(0, 100%, 67%)"
            input[0].style.borderColor = "hsl(0, 100%, 67%)"
        }else{
            featureDay.style.display = "none"
        }
        if (yearsInput.value === new Date().getFullYear().toString() && monthsInput.value > monthNow){
            featureMonth.style.display = "block"
            sections[1].style.color = "hsl(0, 100%, 67%)"
            input[1].style.borderColor = "hsl(0, 100%, 67%)"
        }else{
            featureMonth.style.display = "none"
        }
    
        for(let i = 0; i < validInputs.length; i++){
            if(validInputs[i].style.display === "block"){
                arrowBtn.removeEventListener("click", calculation)
            }else{
                arrowBtn.addEventListener("click", calculation)
            }
        }
    }
    let tes = [CheckingTwo(), CheckingThree()]
   return tes;
    
}

function test(){
    yearsOutput = curntYear - yearsInput.value;
    
    if(curntMonth > monthsInput.value){
        monthsOutput = curntMonth - monthsInput.value;
    }else{
        yearsOutput--;
        monthsOutput = 12 + curntMonth - monthsInput.value;
    }
    
    let daysOutput;
    
    if(curntDate > daysInput.value){
        daysOutput = curntDate - daysInput.value;
    }else{
        monthsOutput--;
        daysOutput = new Date(yearsOutput, monthsOutput,0).getDate() + curntDate - daysInput.value
    }

    if(yearsInput.value === new Date().getFullYear().toString() && monthsInput.value === monthNow.toString()){
        monthsOutput = 0;
        yearsOutput = 0;
    }
    if(yearsInput.value === new Date().getFullYear().toString() && monthsInput.value === monthNow.toString() && daysInput.value === new Date().getDate().toString()){
        daysOutput = 0;
        monthsOutput = 0;
        yearsOutput = 0;
    }


    daysValue.innerHTML = daysOutput;
    monthsValue.innerHTML = monthsOutput;
    yearsValue.innerHTML = yearsOutput;
    
    if(daysOutput === 1){
        dayEqualToOne.innerHTML = "day"
       }else{
        dayEqualToOne.innerHTML = "days"
       }
       if(monthsOutput === 1){
        monthyEqualToOne.innerHTML = "month"
       }else{
        monthyEqualToOne.innerHTML = "months"
       }
       if(yearsOutput === 1){
        yearEqualToOne.innerHTML = "year"
       }else{
        yearEqualToOne.innerHTML = "years"
       }
     
}