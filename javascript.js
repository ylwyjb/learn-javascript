'use strict';
/* var height = parseFloat(prompt('please enter your height(m):'));
var weight = parseFloat(prompt('please enter your weight(kg):')); */
var height = 1.8
var weight = 60
var bmi = weight/(height*height); /*Math.pow(height,2)*/
if (bmi<18.5) {
    console.log('过轻');
}
else if(bmi<25){
    console.log('normal');
}
else if(bmi<28){
    console.log("过重");
}
else if(bmi<32){
    console.log('heavy');
}
else if(bmi>=32){
    console.log('too heavy');
};

 