//functions

function printMessage(message){
    console.log(message);
}

//sum
function sum(x,y){
    let sumofNum= x+y;
    return sumofNum;
}

let result = sum(5,3);

//substraction
function sub(x,y){
    let subofNum = x-y;
    return subofNum;
}

let result1 = sub(9,8);

//multiplication
function mul(x,y){
    let mulofNum = x*y;
    return mulofNum;
}

let result2 = mul(5,5);

//division
function division(x,y){
    let division0fNum = x/y;
    return division0fNum;
}

let result3 = division(8,4);

//modulo
function modulo(x,y){
    let moduloofNum = x%y;
    return moduloofNum;
}

let result4 = modulo(10,6);
//printMessages
printMessage(result);
printMessage(result1);
printMessage(result2);
printMessage(result3);
printMessage(result4);


function greeting(user){
    return `hello ${user}!!`
}

 let user = "Avanika Boppudi";
 let string = greeting(user);
 console.log(string);

 function greeting1(firstName,Lastname){
    console.log(`Welcome ${firstName} ${Lastname}`);
 }

 greeting1("Avanika","Boppudi");


// function printMessage(message){
//     console.log(message);
// }

 function add(x,y){
    return  x+y;
 }

//  let sum=add1;
 let result5 = add(8,20);

printMessage(result5);