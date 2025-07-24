const history = [];

function add(a,b){

    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){ //checks if inputs are numbers

        solution = a + b;

        historyPush("add", a, b, solution) //calls history function

            console.log(history)
        console.log(solution);
        }
    else{

        console.log("Please input two numbers to be calculated.")
    }    
}


function subtract(a,b){

    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){ //checks if inputs are numbers

        solution = a - b;

        historyPush("subtract", a, b, solution) //calls history function

            console.log(history)
        console.log(solution);
        }
    else{

        console.log("Please input two numbers to be calculated.")
    }    
}

function multiply(a,b){

    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){ //checks if inputs are numbers

        solution = a * b;

        historyPush("multiply", a, b, solution) //calls history function

            console.log(history)
        console.log(solution);
        }
    else{

        console.log("Please input two numbers to be calculated.")
    }    
}

function divide(a,b){

    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){ //checks if inputs are numbers
 
        if(b === 0){ 

            console.log(`${a} cannot be divided by Zero.`)
        }
        else{solution = a / b;

        historyPush("divide", a, b, solution) //calls history function

        console.log(history)
        console.log(solution);}
        }
    else{

        console.log("Please input two numbers to be calculated.")
    }    
}

function historyPush(operator, a, b, solution){

    history.push({
            operation: operator,
            
            operands: [a, b],

            result: solution
                
            })


}


function userInput(){

    const prompt = require('prompt-sync')();

    const a = prompt("Input first number...");

    const operator = prompt("+, -, * or / ?");

    const b = prompt("Input second number...");

    if (operator === "+")
        {
            add(a, b)

        }
    else if (operator === "-")
        {
            subtract(a, b)

        }
    else if (operator === "*")
        {
            multiply(a, b)

        }
    else if (operator === "/")
        {
            divide(a, b)

        }
        else{

            console.log("Please input a valid operator.")

            userInput()
        }
}

userInput()
