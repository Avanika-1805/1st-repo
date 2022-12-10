 var inch = document.getElementById('in');
 var centiMeter = document.getElementById('cm');

 inch.addEventListener('input',function(){
  let i = this.value;
  let c = i*2.54;
   centiMeter.value=c;
});

centiMeter.addEventListener('input',function(){
    let c = this.value;
     let i = c/2.54;
    inch.value=i;
  });


  // inches to centimeters
  function inToCm(x){
    return x*2.54;
  }
  let in2cm = inToCm(5);
  console.log(in2cm +'cm');

  // let inToCm= function(x){
  //   return x*2.54;
  // }

  // let inToCm = (x)=>{
  //   return x*2.54;
  // }
  
  // let inToCm = (x)=> x*2.54;

  // centimeters to inches
  function cmToIn(x){
    return x/2.54;
  }
  let cm2in = inToCm(3);
  console.log(cm2in +'in');

  // let cmToIn= function(x){
  //   return x/2.54;
  // }

  // let cmToIn = (x)=>{
  //   return x/2.54;
  // }

  // let cmToIn= (x)=>x/2.54;

  // kg to grams
  function kgToGrams(x){
    return x*1000;
  }
  let kg2grams = kgToGrams(2);
  console.log(kg2grams+'grams');

  // let kgToGrams= function(x){
  //   return x*1000;
  // }

  // let kgToGrams=(x)=>{
  //   return x*1000;
  // }

  // let kgToGrams=(x)=> x*1000;

  //grams to kg
  function gramsToKg(x){
    return x/1000;
  }

  let grams2kg = gramsToKg(500);
  console.log(grams2kg+'kg');

  // let gramsToKg= function(x){
  //   return x/1000;
  // }

  // let gramsToKg= (x)=>{
  //   return x/1000;
  // }

  // let gramsToKg=(x)=>x/1000;

  //centimeters to millimeters
  function cmToMm(x){
    return x*10;
  }

  let cm2Mm = cmToMm(100);
  console.log(cm2Mm+'mm');

  let cmToMm= function(x){
    return x*10;
  }

  let cmToMm=(x)=>{
    return x*10;
  }

  let cmToMm=(x)=> x*10;

  //millimeters to centimeters
  function mmToCm(x){
    return x/10;
  }

  let mm2Cm = mmToCm(100);
  console.log(mm2Cm+'cm');

  let mmToCm= function(x){
    return x/10;
  }

  let mmToCm= (x)=>{
    return x/10;
  }

  let mmToCm= (x)=>x/10;

