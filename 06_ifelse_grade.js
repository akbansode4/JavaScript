function voteEligibility(age){
    if (age>18 && age<=120) {
        console.log(`Your age : ${age} -> you are eligible for voting`);        
    }else if(age>0 && age<=18) {
        console.log(`Your age : ${age} -> you are not eligible for voting`);
    }else if(age<=0 || age>120 || age == undefined){
        console.log(`Your age : ${age} -> InValid Data`);
    } else {
        console.log(`Your age : ${age} -> you are not eligible for voting`);
    }
}
voteEligibility(47);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);


