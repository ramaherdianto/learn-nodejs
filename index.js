// const coffeStock = require("./state");

// const makeCoffe = (type, miligrams) => {
//   if (coffeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// };

// makeCoffe("arabica", 80);

// const { coffeeStock, isCoffeeMachineReady } = require("./state");

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// ES6 Eksport dan import satu nilai
// import coffeeStock from "./state.js";

// const displayStock = (stock) => {
//   for (const type in stock) {
//     console.log(type);
//   }
// };

// displayStock(coffeeStock);

// ES6 Eksport dan import dua atau lebih nilai
// import { coffeeStock, isCoffeeMachineReady } from "./state.js";

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// Eksport dan import dua atau lebih nilai dengan penamaan variable berbeda dari named import dengan menggunakan "as"

// import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

// console.log(stock);
// console.log(isCoffeeMachineReady);

// PEMBELAJARAN NPM

import _ from "lodash";

const myArray = [1, 2, 3, 4];
let sum = _.sum(myArray);

console.log(sum);
