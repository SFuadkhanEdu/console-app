// let a;
// a>0 ? console.log("positive") : console.log("negative or 0");

// let age;
// a>=18 ? console.log("uygundu") : console.log("uygun deyil");

// let x,y;
// x>y ? console.log(x) : console.log(y);

// let x1 = 6,x2 = 6 ,x3= 6;

// if (x1>x2) {
//     if (x1>x3) {
//         console.log(x1);
//     }
//     else{
//         console.log(x3);
//     }
// }
// else {
//     if(x2>x3) {
//         console.log(x2);
//     }
//     else{
//         console.log(x3);
//     }
// }
// // or
// console.log(Math.max(x1, x2, x3));
// let num;
// num%2===0 ? console.log("cut"): console.log("tek");

// ----------------------------------------------------------------
let symbol;
symbol = parseInt(symbol);
if ((symbol >= 65 && symbol <= 90) || (symbol >= 97 && symbol <= 122)) {
  console.log("is letter");
} else if (symbol >= 48 && symbol <= 57) {
  console.log("is digit");
} else {
  console.log("other");
}

// ----------------------------------------------------------------
let num1;

num1 >= 1 && num1 <= 100 ? console.log("yes") : console.log("no");

// ----------------------------------------------------------------
let price;

if (price >= 300) {
  console.log(price / 2);
} else if (price === 100) {
  console.log(price / 4);
} else {
  console.log(price / 10);
}

// ----------------------------------------------------------------
let dividing;

if (dividing % 3 === 0) {
  if (dividing % 5 === 0) {
    console.log("Divisible by both 3 and 5");
  } else {
    console.log("Divisible by 3 but not by 5");
  }
} else if (dividing % 5 === 0) {
  console.log("Divisible by 5 but not by 3");
} else {
  console.log("Not divisible by either 3 or 5");
}
