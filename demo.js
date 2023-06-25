// const array = [2, 4, 5, 8, 9, 10, 2, 8, 10]
// for (let index = 0; index < array.length; index++) {
//   for (let j = 0; j < array.length; j++) {
//     if (index != j) {
//       if (array[index] == array[j]) {
//         array.splice(j, 1);
//       }
//     }
//   }
// }
// console.log(array);





// const person = {
//     name: "John",
//     age: 25,
//     city: "New York",
//     certificates: ["Java", "JavaScript", "HTML"]
//   };

// let deepCloneObject = Object.assign({},person)
// console.log(deepCloneObject, typeof deepCloneObject);


const person = {
    name: "John",
    age: 25,
    city: "New York",
    certificates: ["Java", "JavaScript", "HTML"]
  };

  for (const key in person) {
        const element = person[key];
        console.log(key,element);
  }


// for (let index = 0; index < person.length; index++) {
//     const element = person[index];
    
// }
