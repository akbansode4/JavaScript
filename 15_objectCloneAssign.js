
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        june_month: "650,0000INR",
    },
    address:{
        locality: {
            colony: "OM Vrindavan Society",
            street: "kanch pokali, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        county: "India"
    },
    mobiles: ["+91 7866 5687 66", "1800-  4766 32", "+91- 7657 5368 77"]
};

const arrayNums = [20, 3, 4, 56, 90, 400, 49];

const shallowArray = arrayNums;
arrayNums.push(55,56);
console.log('---------------- Shallow Coning -------------------');
console.log('arrayNums: ', arrayNums);
console.log('shallowArray: ', shallowArray);
console.log('');
console.log('---------------- Deep Coning -------------------');
const deepCloneArray = [...arrayNums];
arrayNums.push(10,25);
console.log('arrayNums: ', arrayNums);
console.log('deepCloneArray: ', deepCloneArray);

console.log('');
console.log('---------------- Merge Array -------------------');
const arrayEven = [2, 30, 14, 8];
console.log([...arrayNums,...arrayEven]);
console.log('')
console.log('---------------- Emp_Info -------------------');
console.log(employee_info.address.locality);
console.log(employee_info.address.city);
console.log(employee_info.address.state);
console.log(employee_info.address.county);
console.log(employee_info.mobiles);
console.log('');
console.log('---------------- Deep Coning -------------------');
const deepCloneEmpInfo = JSON.parse(JSON.stringify(employee_info));
deepCloneEmpInfo.salary.july_month = "80,000INR";
employee_info.address.county = "United Kingdom";
console.log('employee_info Salary: ',employee_info.salary.july_month);
console.log('deepCloneEmpInfo Salary: ',deepCloneEmpInfo.salary.july_month);












