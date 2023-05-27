console.log('Print Number 5 to 15 Increment');
i=5;
while (i<=15) {
    console.log(i);
    i++;    
}
console.log('');
console.log('Print Number 50 to 40 Decrement');
i=50;
while (i>=40) {
    console.log(i);
    i--;
    
}
console.log('');
console.log('Print First 15 odd Increment');
i=1;
count = 1;
while (count<=15) {
    if (i%2 !=0) {
        console.log(i);
        
        count++
    } 
    i++;   
}
console.log('');
console.log('Print First 10 even Increment');
i=0;
count = 1;
while (count<=10) {
    if (i%2 ==0) {
        console.log(i);
        
        count++
    } 
    i++;   
}
console.log('');
console.log('Table of 5');
i=1;
count = 1;
while (count<=10) {
    console.log(i*5);
    i++;
    count++;   
}

console.log('');
console.log('Table of 10');
i=1;
count = 1;
while (count<=10) {
    console.log(i*10);
    i++;
    count++;   
}
console.log('');
console.log('Table of 10 in reverse Order');
i=100;
count = 1;
while (count<=10) {
    console.log(i);
    i-=10;
    count++;   
}