var str = 'I am very good IT developer'
var vowels =['a','o', 'i','u','e']
var count = 0;

for (let index = 0; index < str.length; index++) {
    check = str[index];
    // console.log(str[index]);
    for (let i = 0; i < vowels.length; i++) {
        if (check == vowels[i]){
            count += 1;            
        } else if( check == vowels[i].toUpperCase()){
            count += 1;
        }
        
    }
    
};


console.log(`Given String: `, str);
console.log('Total Number of vowels Available in string: ',count);
console.log('---------------------------------------------------------------');

var sum = 0;
function sumOfcube(){
    for (let index = 1; index < 6; index++) {
        sum = sum + index * index * index;
    }
}
sumOfcube();
console.log('Sum of cube no 1 to 5 : ',sum);
console.log('---------------------------------------------------------------');
var string1 = 'Hard work always pays back';
var string2 = 'Soon I wiil be Angular IT champ';
var concateStr = '';
function oddPositionedChar(str){
    concateStr = '';
    for (let index = 0; index < str.length; index++) {
        mod = index%2;
        if (mod == 1 && str[index]!=' '){
            concateStr = concateStr.concat(str[index]);
        }
    };
    
}

oddPositionedChar(string1);
console.log('Given String is: ', string1);
console.log('Odd Positioned Char : ',concateStr);
console.log('---------------------------------------------------------------');
console.log('Given String is: ', string2);
oddPositionedChar(string2);
console.log('Odd Positioned Char : ',concateStr);
