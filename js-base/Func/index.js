// const power = (pow) => {
//   return function (num) {
//     return num ** pow;
//   };
// };

const power = (pow) => (num) => num ** pow;

console.log(power(2)(3));
