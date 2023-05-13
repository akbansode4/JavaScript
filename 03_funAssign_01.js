console.log('************ 01 ***********');
function noArgu(){
    console.log('Function with no arguments with no return type');
};
console.log('');
noArgu();
console.log('');
console.log('------------------------------------');
console.log('************ 02 ***********');
console.log('');
function personalDetails(firstName, lastName, collageName){ //Arguments
    console.log('First Name : ',firstName);
    console.log('Last Name : ',lastName);
    console.log('Collage Name : ',collageName);
};
personalDetails('Akshay', 'Bansode', 'SKNSCOE');
console.log('');
console.log('------------------------------------');
console.log('************ 03 ***********');
console.log('');
function swapValueDude(value1, value2){
    console.log('Before Swap : ', value1," : ", value2);
    temp = value1;
    value1 = value2;
    value2 = temp;
    console.log('After Swap : ', value1," : ", value2);

};
swapValueDude('Virat', 'Anushka')
console.log('');
swapValueDude(1000, 2000)
console.log('');
console.log('------------------------------------');
console.log('************ 04 ***********');
console.log('');
function addition(value1,value2,value3){
    console.log(value1+value2+value3);
};
addition(10.23,600,40);
console.log('');
addition('hello','Good','Morning')

