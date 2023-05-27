function factorialOfNum(num) {
    if(num==0){
        return 1
    }
    if (num == undefined) {
        return 'Invalid Data'
    }
    factorial = 1;
    for (let index = 1; index <= num; index++) {
        
        factorial *= 1*index; 
}   
return factorial;
}
console.log('Factorial of 5: ',factorialOfNum(5));
console.log('Factorial of 3: ',factorialOfNum(3));
console.log('Factorial of null: ',factorialOfNum(null));
console.log('Factorial of 8: ',factorialOfNum(8));
console.log('Factorial of undefined: ',factorialOfNum(undefined));
console.log('Factorial of 9: ',factorialOfNum(9));
console.log('Factorial of 0: ',factorialOfNum(0));




