

let array = [11, 3, 4, 11, 4,7,3]

let arr = [...new Set(array)]
console.log(arr);

let str = "how are you mate"
console.log(str.length);

str = str.split(" ")
let sentence = ""
for (let index = 0; index < str.length; index++) {
    let word = ""
    var element = str[index];
    length = element.length;
    element =element.split("")
    element[0] = element[0].toUpperCase()
    element[length-1] = element[length-1].toUpperCase()
    // console.log(element);
    for (let index = 0; index < element.length; index++) {
        word = word.concat(element[index])
        
    }
    sentence = sentence.concat(word)
    sentence = sentence.concat(" ")
  
    
}
console.log(sentence.trim());


