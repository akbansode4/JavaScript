const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log('---- Add 10 into array element ---------');
const addArray = arrayNumbers.map((currentValue)=>{
        return currentValue+10
    });
console.log(addArray);
console.log('');
console.log('---- Square array element ---------');
const squareElement = arrayNumbers.map(function(currentValue){
    return currentValue*currentValue;
});

console.log(squareElement);
console.log('');
console.log('---- Add Index value to array element ---------');
const addIndexToElement = arrayNumbers.map(function(currentValue,index){
    return currentValue+index;
});

console.log(addIndexToElement);

