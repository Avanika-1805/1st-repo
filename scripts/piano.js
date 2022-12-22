const whiteC= document.getElementById("C");
const whiteD=document.getElementById("D");
const whiteE=document.getElementById("E");
const whiteF=document.getElementById("F");
const whiteG=document.getElementById("G");
const whiteA=document.getElementById("A");
const whiteB= document.getElementById("B");

// const audioC= document.getElementById("playc");
// const audioD=document.getElementById("playd");
// const audioE=document.getElementById("playe");
// const audioF=document.getElementById("playf");
// const audioG=document.getElementById("playg");
// const audioA=document.getElementById("playa");
// const audioB= document.getElementById("playb");


// document.getElementById(`C`).innerHTML=audioC;


// function playC(){
//        const audioC=document.getElementById(whiteC);
//        audioA
// }
let audio =new Audio("./images/A.mp3");

const playMusic1=() => {
       audio.play();
}