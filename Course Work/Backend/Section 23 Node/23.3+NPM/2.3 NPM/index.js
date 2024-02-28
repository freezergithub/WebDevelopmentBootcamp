//var generateName = require('sillyname');  //CMJS

import generateName from "sillyname";  //ECMA
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);


import superheroes from "superheroes"

var SuperHeroName = superheroes.random();
console.log(`I am really ${SuperHeroName}!`)
