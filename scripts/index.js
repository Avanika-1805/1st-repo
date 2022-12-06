// var x;
// x = prompt("what is your name");
// alert("hey "+x+" nice to meet you");

// let person = prompt("Enter Your Name Here");
// alert("Hi "+person+" Welcome!");

// let num1 = parseInt(prompt("Enter a number"));
// let num2 = parseInt(prompt("Enter another number"));
// let sum = num1+num2;
// let sub = num1-num2;
// let mul = num1*num2;
// let division = num1/num2;
// let mod = num1&num2;
// alert(`Sum of ${num1} and ${num2} is ${sum}`);
// alert( `substract of ${num1} and ${num2} is ${sub}`);
// alert( `multiplication of ${num1} and ${num2} is ${mul}`);
// alert(`division of ${num1} and ${num2} is ${division}` );
// alert(`modulos of ${num1} and ${num2} is ${mod}` );



// //for in loop
let person ={
    name: "bhargav",
    age: 23,
    position: "developer",

}
console.log(`name: ${person.name}`)
// for(let key in person)
// {
//     console.log(`${key}: ${person[key]}`);
//  }

//for of loop
let data=[9,8,7,5,4,2,1]

for(let n of data){
    console.log(n,data[1])
}

//for each loop
let mul=[34,60,50,69]

mul.forEach((n)=>{
    console.log(n*2)
});
console.log(Math.floor(Math.random()*1000));