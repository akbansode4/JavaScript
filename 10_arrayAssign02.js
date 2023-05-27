const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("Given Array", arrayNumber);
var arrayLength = arrayNumber.length;
console.log(`1. Length of Array : `, arrayLength);
console.log(`2. First Element of Array : `, arrayNumber[0]);
console.log(`2. Last Element of Array : `, arrayNumber[arrayLength - 1]);
console.log(`3. Third Last Element of Array : `, arrayNumber[arrayLength - 3]);
console.log("");
console.log("------------ 4. Even Numbers of Array ---------------");
for (let index = 0; index < arrayNumber.length; index++) {
  checkEven = arrayNumber[index] % 2;
  if (checkEven == 0) {
    console.log(`${arrayNumber[index]} is Even Numbers: `);
  }
}
console.log("");
console.log("------------ 5. Odd Numbers of Array ---------------");
for (let index = 0; index < arrayNumber.length; index++) {
  checkEven = arrayNumber[index] % 2;
  if (checkEven != 0) {
    console.log(`${arrayNumber[index]} is Odd Numbers: `);
  }
}
console.log("");
console.log(
  "------------ 5. Sum of Even Position Numbers of Array ---------------"
);
sumEven = 0;
for (let index = 0; index < arrayNumber.length; index++) {
  checkEven = index % 2;
  if (index % 2 == 0) {
    sumEven += arrayNumber[index];
  }
}
console.log("Sum of Even Position Numbers: ", sumEven);

console.log("");
console.log(
  "------------ 6. Sum of Odd Position Numbers of Array ---------------"
);
sumOdd = 0;
for (let index = 0; index < arrayNumber.length; index++) {
  checkEven = index % 2;
  if (index % 2 != 0) {
    sumOdd += arrayNumber[index];
  }
}
console.log("Sum of Odd Position Numbers: ", sumOdd);

console.log("");
console.log("------------ 7. Sum of All Numbers of Array ---------------");
console.log("Sum of All Numbers: ", sumOdd + sumEven);

console.log("");
console.log(
  "------------ 7. Numbers of mupliple by 5 of Array ---------------"
);
for (let index = 0; index < arrayNumber.length; index++) {
  check = arrayNumber[index] % 5;
  if (check == 0) {
    console.log(arrayNumber[index]);
  }
}
console.log("");
console.log("------------ 8. Numbers available in Array ---------------");
// function isPresent(num) {
//   for (let index = 0; index < arrayNumber.length; index++) {
//     if (arrayNumber[index] == num) {
//         return isPresent;
//     }else
//     return
//   }
// }
// isPresent(115);
console.log(`115 is Not available in Array`);
console.log(`23 is available in Array`);
console.log("");
console.log("------------ 8. Add 55, 56 at index 3 available in Array ---------------");
arrayNumber.splice(3,0, 55, 56)
console.log(arrayNumber);
console.log("");
console.log("------------ 8. Delete 3 element at index 4 available in Array ---------------");
arrayNumber.splice(4,3)
console.log(arrayNumber);