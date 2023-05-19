console.log('************* Greater Number *************');
var greaterNumber = function(valueOne, valueTwo){
    console.log('Given Numbers are: ',valueOne,' , ', valueTwo);
   console.log('   Result: ',valueOne > valueTwo ? `${valueOne} is Greater than ${valueTwo}` : `${valueTwo} is Greater than ${valueOne}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log('');
console.log('************* Even Or Odd *************');
var isEvenOrOddNum = function(value){
    var result = value %= 2;
    return result;
};

console.log(`29 is ${isEvenOrOddNum(29) ? 'Odd':'Even' } Number`);
console.log(`44 is ${isEvenOrOddNum(44) ? 'Odd':'Even' } Number`);
console.log(`0  is ${isEvenOrOddNum(0) ? 'Odd':'Even' } Number`);
console.log(`101 is ${isEvenOrOddNum(101) ? 'Odd':'Even' } Number`);

console.log('');
console.log('************* Even Or Odd *************');
var wordLength = function(value){
    var valuelength = value.split("").length;
    var result = valuelength %= 2;    
    result = result ? 'Odd':'Even';
    return result;
};
// console.log(wordLength('Javascript'));
console.log(`Javascript is ${wordLength('Javascript')} word length`);
console.log(`Developer is ${wordLength('Developer')} word length`);
console.log(`Google is ${wordLength('Google')} word length`);




