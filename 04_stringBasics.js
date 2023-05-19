console.log('********** Assignment 01 **********');
console.log('');
function stringBasics(){
    console.log('My dream company Name: FirstCry');
};
stringBasics();
console.log('');
console.log('---------------------------------------------');
console.log('');
var hobby1 = 'Reading';
var hobby2 = 'Swimming';
var hobby3 = 'Travelling';
console.log('Hobby1: ',hobby1,' Hobby2: ',hobby2,' Hobby3: ',hobby3);
console.log('');
console.log('---------------------------------------------');
console.log('');
console.log('hobby1Char: ',hobby1.length);
console.log('');
console.log('hobby2Char: ', hobby2.length);
console.log('');
console.log('hobby3Char: ', hobby3.length);
console.log('');
console.log('Total Number of Charaters of: ', hobby1.length+hobby2.length+hobby3.length);
// function addition(v1,v2,v3){
//     var result = v1+v2+v3
//     return result
// };
// additionaData = addition(hobby1.length, hobby2.length, hobby3.length);
// console.log(additionaData);

var great = "Hi Hi good morning, how are you"
var resultSplit = great.split(" ");
console.log("Split words length: ",resultSplit.length);
console.log(great.indexOf('Hi'));
console.log(great.lastIndexOf('Hi'));