'use strict';

/* 
*
* Create a console application that calculates the area of a circle based on the radius entered by the user. Use the 'prompt-sync' module to request -
* the radius from the user and 'math' to perform the calculation.
* -----------------------------------
* Crea una aplicación de consola que calcule el área de un círculo a partir del radio ingresado por el usuario. Utiliza el módulo 'prompt-sync' para -
* pedir el radio al usuario y 'math' para realizar el cálculo.
*
* Módulos
* https://www.npmjs.com/package/prompt-sync
* ### npm instal math ###
*
*/

const prompt = require("prompt-sync")(process.argv.slice(2));
const math = require('math');

while (true){
  let rad = parseFloat(prompt("Give me the radius of your circle and I'll calculate its area for you: "));
  
  if (isNaN(rad)){
    console.log("Please, put a number");
  }else{
    const area = math.PI * math.pow(rad, 2);
    console.log(`The area of your circle it's: ${area.toFixed(2)}cm²`);
    break;
  }
}

// SOLUTION 2
const prompt = require('prompt-sync')();
const math = require('mathjs');

function calculateArea(){
  const radius = prompt('Ingresa el radio: ');
  const area = math.pi * math.pow(radius, 2);
  
  console.log(`El área del círculo es: ${area}`);
}

calculateArea()
