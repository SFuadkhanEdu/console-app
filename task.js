// let n;
// let sum = 0;
// for (let i = 1; i < n; i++) {
//     sum += i;
// }
// console.log(sum);

// console.log(((1 + n) / 2) * n);

// let n;
// let product = 1;
// for (let i = 5; i <= n; i++) {
//     product *= i;
// }
// console.log(product);

// let n;
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log(factorial);

// let n;
// for (let i = 14; i <= n; i+=14) {
//     console.log(i);
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length-1]);

// const product= {
//     name : "tomato",
//     price : 2.5
// }
// console.log(product.name);
// console.log(product.price);

// let i = 100;
// while (i>=1) {
//     console.log(i--);
// }

// let running = true;
// while (running) {
//   let userInput = prompt("input one of the following numbers 1,2,3");
//   switch (userInput) {
//     case 1:
//       console.log("cloudy");
//       break;
//     case 2:
//       console.log("friday");
//       break;
//     case 3:
//       running = false;
//       break;
//     default:
//       console.log("Wrong value");
//       break;
//   }
// }

// const arr = [15,6,2,5,99,23,55];
// let input = prompt("input target");

// for (let index = 0; index < array.length; index++) {
//     if (arr[index] === parseInt(input)) {
//         console.log(i);
//     }
// }

// const arr = [];
// let isBigNumber = false;
// for (let index = 0; index < array.length; index++) {
//     if (arr[index] > 500) {
//         isBigNumber = true;;
//     }
// }
// console.log(isBigNumber);

// const arr = [1, 2, 3, 4, 5,100];
// const lessThanTwenty = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<20) {
//         lessThanTwenty.push(arr[i]);
//     }
// }
// console.log(lessThanTwenty);

// const arr = [

//         {
//           "id": 2,
//           "description": "Sweet and savory sauces relishes spreads and seasonings",
//           "name": "Condiments"
//         },
//         {
//           "id": 1,
//           "description": "Soft drinks coffees teas beers and ales",
//           "name": "Beverages"
//         },
//         {
//           "id": 3,
//           "description": "Desserts candies and sweet breads",
//           "name": "Confections"
//         },
//         {
//           "id": 4,
//           "description": "Cheeses",
//           "name": "Dairy Products"
//         },
//         {
//           "id": 5,
//           "description": "Breads crackers pasta and cereal",
//           "name": "Grains/Cereals"
//         },
//         {
//           "id": 6,
//           "description": "Prepared meats",
//           "name": "Meat/Poultry"
//         },
//         {
//           "id": 7,
//           "description": "Dried fruit and bean curd",
//           "name": "Produce"
//         },
//         {
//           "id": 8,
//           "description": "Seaweed and fish",
//           "name": "Seafood"
//         }

// ];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]["id"] > 5) {
//         console.log(arr[i]);
//     }
// }


function whatCentury(year)
{
  let century =  Math.ceil(year/100);
  if(century % 10 == 1) return "" + century +"st";
  if(century % 10 == 2) return "" + century +"nd";
  if(century % 10 == 3) return "" + century +"rd";
  return "" + century +"th";
}

console.log(whatCentury(1234)); // should return "21st"