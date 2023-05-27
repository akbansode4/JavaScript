var checkLeapYear = function(leapyear){
    checkValidData = isNaN(leapyear);
    checkYear = leapyear%4;
    if(!checkValidData && leapyear != null){
        if(checkYear == 0){
        console.log(`Year : ${leapyear} is Leap Year`);
        }else{
            console.log(`Year : ${leapyear} is not Leap Year`);
        }
    }else{
        console.log(`Year : ${leapyear} is Invalid Data OR Not Valid Year`);
    }
}

checkLeapYear(2000);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear('twenty twenty');
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);