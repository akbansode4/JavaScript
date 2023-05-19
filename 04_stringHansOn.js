var givenString = '  Hey you are doing good, keep it up    '
console.log('1. Given String as it is:', givenString);
firstLen = givenString.length
console.log('2. Total lenght of given string is: ', firstLen);
givenString = givenString.trim();
secondLen = givenString.length
console.log('3. After remove Leading and Trailing Extra Sapces, Lenght is: ', secondLen);
console.log('4. Total Number of removed Extra spaces count are: ', firstLen-secondLen);
console.log('--------------------------');
console.log('5. First and Last character of string after trim are: ', 
givenString.charAt(0), " ",givenString.charAt(secondLen-1));
// console.log(secondLen-1);  --- index start from zero


