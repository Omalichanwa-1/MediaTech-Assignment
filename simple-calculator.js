// SIMPLE CALCULATOR
const prompt = require('prompt-sync')({sigint: true});
const operator=prompt('Enter an operator either +,-,*, / :')
const number1=parseInt( prompt('Enter a number :')) 
const number2=parseInt( prompt('Enter a number :'))
let result;
switch(operator)
{
    case'+':
        console.log(result=number1+number2)
        break
    case'-':
         console.log(result=number1-number2)
         break
    case'*':
        console.log(result=number1*number2)
        break
     case'/':
    console.log(result=number1/number2)
    default:
    console.log("Operation in valid")
    break
}