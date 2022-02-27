// const coffeStock = require("./state");

// const makeCoffe = (type, miligrams) => {
//   if (coffeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// };

// makeCoffe("arabica", 80);

const { coffeStock, isCoffeeMachineReady } = require("./state");

console.log(coffeStock);
console.log(isCoffeeMachineReady);
