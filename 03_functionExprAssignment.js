var square = function (a){
    console.log(`Square of ${a} is: `, a*a);
};
square(5);
square(6);
square(25);
square(100);
console.log(`Type of sqaureFunction : ${typeof square}`)
var area = function(a, b){
    console.log(`Area of rectangular: ${a*b}`);
};
area(499, 917)
console.log('');
var swapFunction = function(valueOne, valueTwo){
    console.log(`Before Swap -> First Name: ${valueOne}, Last Name :${valueTwo}`);
    var  temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log(`After Swap -> First Name: ${valueOne}, Last Name :${valueTwo}`);
}
swapFunction('Virat', 'Anushka');
swapFunction(1000,2000)
console.log('');

var stringFunction = function(txt){
    console.log('1. Total character available in string: ',txt.length);
    console.log(`2. Character At index 6 : ${txt.charAt(0)}`);
    console.log(`3. Character At index 10 : ${txt.charAt(10)}`);
    wordNumber = txt.split(" ").length
    console.log(`4. Total number of words in given string: ${wordNumber}`);
    console.log(`5. Square of total Number of words: ${wordNumber*wordNumber}`);
};
txt = "JS the most popular language on internet";
stringFunction(txt)

