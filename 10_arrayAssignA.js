const fruitArray = ['Banana', 'Orange','Apple','Mango', 'Water Melon']
console.log('fruitArray :', fruitArray);
var arrayLength = fruitArray.length
console.log(`First Element of Array : ${fruitArray[0]}`);
console.log(`Last Element of Array : ${fruitArray[arrayLength-1]}`);
fruitArray.unshift('Papaya');
// fruitArray.splice(0,0,'Papaya')
console.log(`-----------------------------------------------------------`);
console.log(`******** 2. Adding  'Papaya' element before Banana **********`);
console.log('fruitArray :', fruitArray);

fruitArray.splice(4,1);
console.log(`-----------------------------------------------------------`);
console.log(`******** 3. Remove 'Mango' Form Array **********`);
console.log('fruitArray :', fruitArray);

fruitArray.push('Pineaple');
console.log(`-----------------------------------------------------------`);
console.log(`******** 4. Adding  'Pineaple' element At last **********`);
console.log('fruitArray :', fruitArray);

fruitArray.splice(arrayLength-1,0,'Dragon Fruit')
console.log(`-----------------------------------------------------------`);
console.log(`******** 5. Insert 'Dragon Fruit' Befor Water Melon  **********`);
console.log('fruitArray :', fruitArray);

fruitArray.splice(2,1, 'Kiwi');
console.log(`-----------------------------------------------------------`);
console.log(`******** 6 Replace 'Orange' With 'Kiwi **********`);
console.log('fruitArray :', fruitArray);
console.log(`-----------------------------------------------------------`);
console.log(`******** 7 Log elelment Starting index 1 to 4 **********`);
for (const key in fruitArray) {
    if ( key>0 && key<5) {
        console.log(fruitArray[key])
    }
}
console.log(`-----------------------------------------------------------`);
console.log(`******** 7 Display Last 3 element Using lenghth Property **********`);
var arrayLength = fruitArray.length
for (const key in fruitArray) {
    if (key>arrayLength-4) {
        console.log(fruitArray[key])
    }
}


