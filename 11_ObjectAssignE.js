const sbiBank = {
    bankName:'SBI',
    location:'Karvenagar',
    accountNo: "5645975456",
    ifscCode:'SBI0000113',
    intrestRate:'7.5%'
}

const axisBank = {
    bankName:'Axis Bank',
    location:'Warje',
    accountNo: "5645975456",
    ifscCode:'SBI0000113',
    intrestRate:'7.5%'
}
const hdfc = {
    bankName:'HDFC',
    location:'Katraj',
    accountNo: "5645975456",
    ifscCode:'SBI0000113',
    intrestRate:'7.5%'
}
const yesBank = {
    bankName:'Yes Bank',
    location:'Swargate',
    accountNo: "5645975456",
    ifscCode:'SBI0000113',
    intrestRate:'7.5%'
}

let showDetails =function(bank){
    console.log(`Bank Details is=> Bank Name: ${bank.bankName}, Location: ${bank.location}, Account No: ${bank.accountNo}, IFSC Code:${bank.ifscCode}, Intrest Rate: ${bank.intrestRate}`)
} 
showDetails(sbiBank);
showDetails(axisBank);
showDetails(hdfc);
showDetails(yesBank);