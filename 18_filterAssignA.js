const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

const numberGreaterThan50 = arrayNumbers.filter((element)=>{
    return element>50;
});
console.log('---------- Array Number Greater Than 50 -------------');
console.log(numberGreaterThan50);

console.log('');
const evenNumber = arrayNumbers.filter((element)=>{
    return element%2==0;
});
console.log('---------- Even Number -------------');
console.log(evenNumber);

console.log('');
const oddNumber = arrayNumbers.filter((element)=>{
    return element%2!=0;
});
console.log('---------- Odd Number -------------');
console.log(oddNumber);

console.log('');
const muliplierBy5 = arrayNumbers.filter((element)=>{
    return element%5==0;
});
console.log('---------- Muliplier By 5 Number -------------');
console.log(muliplierBy5);

console.log('');
const numberBetween20To50 = arrayNumbers.filter((element)=>{
    return element>20&&element<50;
});
console.log('---------- Number Between 20 To 50 -------------');
console.log(numberBetween20To50);




