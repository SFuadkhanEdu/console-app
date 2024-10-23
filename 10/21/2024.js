// const arr = [1, 23, 5, 5, 4, 12, -5];

// function findMin(arr) {
//     let min = arr[0];
//     arr.forEach(element => {
//         if (element<min) {
//             min = element;
//         }
//     });
//     return min;
// }
// console.log(findMin(arr));

// function newArr(arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i+=2) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(newArr(arr));

// function swap(arr) {
//     let min=arr[0],max=arr[0],i=0,j=0;
//     let index =0;
//     arr.forEach(element => {
//         if (element>max) {
//             max = element;
//             j=index;
//         }
//         else if (element<min) {
//             min = element;
//             i = index;
//         }
//         index++;
//     });
//     let temp= arr[i];
//     arr[i] = arr[j];
//     arr[j] =temp;
//     return arr;
// }
// console.log(swap(arr));

// --------------------------------------------------------------------------------------
// let s = "kbikugwebkiug";
// function upper(s) {
//   const arr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
//       arr.push(String.fromCharCode(s.charCodeAt(i) - 32));
//     } else {
//       arr.push(s[i]);
//     }
//   }
//   return arr.join("");
// }

// console.log(upper(s));

// let s1 = "KBIKUGWEBKIUG";
// function lower(s) {
//     const arr = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
//             // Convert to lowercase
//             arr.push(String.fromCharCode(s.charCodeAt(i) + 32));
//         } else {
//             // If not uppercase, keep the original character
//             arr.push(s[i]);
//         }
//     }
//     return arr.join(''); // Join the array into a string
// }

// console.log(lower(s1)); // Outputs: kbikugwebkiug
// --------------------------------------------------------------------------------------

// function reverse(s) {
//     let reverse =[];
//     for (let i = s.length-1; i >=0 ; i--) {
//         reverse.push(s[i]);
//     }
//     return reverse.join("")
// }
// console.log(reverse("hello"));

// function noSpace(s) {
//     let arr = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !=" ") {
//             arr.push(s[i]);
//         }
//     }
//     return arr.join("")
// }
// console.log(noSpace("a a a a a"));

// function count(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = (i+1) + "" + arr[i];
//     }
//     return arr;
// }
// console.log(count(["s","s","s"]));

// function repeat(s,n) {
//     let start = s;
//     for (let i = 0; i < n-1; i++) {
//         s+=start;
//     }
//     return s;
// }
// console.log(repeat("abc",3));

// let text = "hello";

// function myIndexOf(string, symbol) {
//   let i = 0;
//   const arr = [...string];
//   let result = -1;
//   arr.forEach((element) => {
//     if (element === symbol) {
//       console.log("jgfj");
//       result = i;
//     }
//     i++;
//   });
//   return result;
// }
// text =  text.replace("ell" ,"")
// console.log(text);

const arr = [1, 2, 3, 4, 5, 6];

let result = myFindIndex(arr, (x) => x === 1);

function myFindIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
}
console.log(result);
