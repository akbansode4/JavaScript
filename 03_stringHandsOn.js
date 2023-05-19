var givenString = '  Hey you are doing good, keep it up    '
console.log('1. Given String as it is:', givenString);
firstLen = givenString.length
console.log('2. Total lenght of given string is: ', firstLen);
givenString = givenString.trim();
secondLen = givenString.length
console.log('3. After remove Leading and Trailing Extra Sapces, Lenght is: ', secondLen);
console.log('4. Total Number of removed Extra spaces count are: ', firstLen-secondLen);
// console.log('--------------------------');
console.log('5. First and Last character of string after trim are: ', 
givenString.charAt(0), " ",givenString.charAt(secondLen-1));
// console.log(secondLen-1);  --- index start from zero
var resultSplit = givenString.split(" ");
console.log("6. Count of total words available in string: ", resultSplit.length);
console.log("7. Index of word 'good': ", givenString.indexOf('good'));
console.log('8a. SubString Method:: Substring starting from index 22: ', givenString.substring(22));
console.log('8b. Slice Method:: Substring starting from index 22: ', givenString.slice(22));
console.log("9. String is Ends with word 'up' :", givenString.endsWith('up'));
console.log("10a. String is Start with word 'Hey' :", givenString.startsWith('Hey'));
console.log("10b. String is Start with word 'Hi' :", givenString.startsWith('Hi'));



