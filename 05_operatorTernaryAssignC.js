console.log('************* Male Marriage Eligibility  *************');
console.log('');
function maleMarriageEligibility(gender, age,boyName){
    result = gender == 'Male' && age >=21 ? `Hey ${boyName}you are eligible for marriage`:`Hey ${boyName} you are not eligible for marriage`
    return result;
};
console.log(maleMarriageEligibility('Male', 25, 'Bill Gates'));
console.log(maleMarriageEligibility('Male', 17, 'Stew Jobs'));
console.log('');
console.log('************* Female Marriage Eligibility  *************');
console.log('');
function femaleMarriageEligibility(gender,age,girlName){
    result = gender == 'Female' && age >=21 ? `Hey ${girlName}you are eligible for marriage`:`Hey ${girlName} you are not eligible for marriage`
    return result;
};
console.log(femaleMarriageEligibility('Female', 16, 'Jennifer'));
console.log(femaleMarriageEligibility('Female', 25, 'Milinda Gates'));