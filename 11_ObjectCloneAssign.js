


const sbiBank = {
    bankName:'SBI',
    accountNo: "5645975456",
    ifscCode:'SBI0000113',
    Branch:'Vishrantwadi'
}
console.log('-------------------SBI Bank Object----------------');
console.log(sbiBank);
const bankLocation ={
    street:'Dhanori road',
    city:'Pune',
    pin:'411015'
}
console.log('');
console.log('-------------------SBI Bank Location Object----------------');
console.log(bankLocation);
console.log('');
console.log('-------------------CLoning Object----------------');
console.table(Object.assign(sbiBank,bankLocation));

const rate_of_interest={
    home_loan_interest:'9%',
    personal_loan_interest:'12%',
    due_interest:'15%'
}
const sbiDetails = Object.assign({},sbiBank,bankLocation, rate_of_interest)
console.log('');
console.log('-------------------Merge to sbiDetails Object----------------');
console.table(sbiDetails);
console.log('');
console.log('-------------------Traverse sbiDetails Object----------------');
for (const key in sbiDetails) {
    console.log(`${key} - ${sbiDetails[key]}`);
}