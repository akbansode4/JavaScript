const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601]

arrayNumbers.forEach((currentValue,index) =>{
    console.log(`Index: ${index}, Current Value: ${currentValue}`);
});
console.log('');
console.log('----------- Positive number in array ----------------');
arrayNumbers.forEach((currentValue,index)=>{
    if(currentValue>0){
        console.log(`Positive number: ${currentValue}`);
    }
});
console.log('');
negativeNumber =[];
console.log('----------- Negative number in array ----------------');
arrayNumbers.forEach((currentValue,index)=>{
    if(currentValue<0){
        negativeNumber.push(currentValue);   
    }
});
console.log('Negative number: ',negativeNumber);
console.log('');
console.log('----------- Even number in array ----------------');
arrayNumbers.forEach((currentValue,index)=>{
    if(currentValue%2==0){
        console.log(`Even number: ${currentValue}`);
    }
});
console.log('');
let result=0;
console.log('----------- Sum of all number in array ----------------');
arrayNumbers.forEach((currentValue)=>{
    result= result+currentValue;
});
console.log('Sum of all number in array: ', result);
console.log('');
console.log('----------- Even Index number in array ----------------');
arrayNumbers.forEach((currentValue,index)=>{
    if(index%2==0){
        console.log(`Even Index number ${index}: ${currentValue}`);
    }
});
