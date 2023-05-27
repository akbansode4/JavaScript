function countCharA(str) {
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        if(str[index] =='a' || str[index] =='A'){
            count++;
        }
    }
    return count;    
}
str1='I AM learning JavaScript, The language of internet'
str2= 'My Favourite Movie is LAggAn'
console.log("----------- Count 'a' or 'A' in Given String ---------------");
console.log(`Given String is: ${str1} : Count => `,countCharA(str1));
console.log(`Given String is: ${str2} : Count => `,countCharA(str2));



