function isPalindrome(str){
    const strLength = str.length;
    var ind= 0, isvalid=true;
    for (let index = 0; index < strLength; index++) {
        const element = str[index];
        let indexDescend = strLength-1-ind
        let elementIndexDescend= str[indexDescend]
        if (element==elementIndexDescend) {
        }else{
            isvalid=false;
            console.log(`Given String:'${str}' Is Not Palindrome`);
            break
        }
        ind = ++ind
        
        
    }
    if (isvalid) {
        console.log(`Given String:'${str}' Is Palindrome`);
    }
}
isPalindrome('madam')
isPalindrome('141')
isPalindrome('Sunday')
isPalindrome('mom')
isPalindrome('listen')
isPalindrome('dad')
