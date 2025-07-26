const history = []; //Instantiates operation history array

const prompt = require('prompt-sync')(); // Sets up User Interaction variable

function add(a,b){

    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){ //checks if inputs are numbers

        solution = a + b;

        historyPush("add", a, b, solution) //calls history function

        console.log(history)
        console.log(`The answer is ${solution}`);
        userInput()
        }
    else{

        console.log("Please input two numbers to be calculated.")

        userInput()
    }    
}


function subtract(a,b){

    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){ //checks if inputs are numbers

        solution = a - b;

        historyPush("subtract", a, b, solution) //calls history function

        console.log(history)
        console.log(`The answer is ${solution}`);
        userInput()
        }
    else{

        console.log("Please input two numbers to be calculated.")

        userInput()
    }    
}

function multiply(a,b){

    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){ //checks if inputs are numbers

        solution = a * b;

        historyPush("multiply", a, b, solution) //calls history function

        console.log(history)
        console.log(`The answer is ${solution}`);
        userInput()
        }
    else{

        console.log("Please input two numbers to be calculated.")

        userInput()
    }    
}

function divide(a,b){

    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){ //checks if inputs are numbers
 
        if(b === 0){ 

            console.log(`${a} cannot be divided by Zero.`)

            userInput()


        }
        else{solution = a / b;

        historyPush("divide", a, b, solution) //calls history function

        console.log(history)
        console.log(`The answer is ${solution}`);
        userInput()}
        }
    else{

        console.log("Please input two numbers to be calculated.")

        userInput()
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

    const string_a = prompt("Input first number... ");

    const a = Number(string_a);

    const operator = prompt("+ , - , * or / ?... ");

    const string_b = prompt("Input second number... ");

    const b = Number(string_b)

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
