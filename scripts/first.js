// mathmetical operators
let x = 5;
let y = 8;
let addition = x+y
let substraction = x-y
let multiplcation = x*y
let division = x/y
let modulos  = x%y
console.log(addition,substraction,multiplcation,division,modulos)
// comparision operators
let a = 8;
let b = 10;
console.log(a>b,a<b,a==b,a>=b,a<=b,a!=b)
//logical operators
//logical  And operator
let age = 21;
if(age>13 && age<=19){
    console.log(`you are a "teenager".`)
} else if(age>=20 && age<27){
    console.log(`"you are an "adult"`)
}else{console.log("you are not a teenager or adult")}
// logical OR operator
let num=8;
let num1=10;
console.log(num>num1 || num<num1)
//logical not operator
let three=3;
let seven=7;
console.log(!(three>seven && three<seven))
//Ternary
let result = (8<5) ?"True":"False";
console.log(result)
// incriment and decriment
let N = 3;
console.log(N++)//3
console.log(++N)//5
console.log(N--)//5
console.log(++N)//5
console.log(--N)//4
console.log(N)//4