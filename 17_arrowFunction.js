let show = () => {
    console.log('Good Morning, Today is Monday');
}
show();
let multiplication = (n1,n2,n3=1) =>{
    console.log(`Multiplication of ${n1}, ${n2}, ${n3}: ${n1*n2*n3}`);
}
multiplication(5,5,2);
multiplication(10,4)
let addition = (n1,n2,n3,n4,n5) =>{
    console.log(`Addition of ${n1}, ${n2},, ${n3}, ${n4} ${n5}: ${n1+n2+n3+n4+n5}`);
}
addition(100,100,200,349,756);
addition("I am ", "learning ", "ES6 ", "features ","in deapth")

