

class Employee{
    constructor(empId, empName, empDept, empSalary,empComapny){
        this.empId =empId;
        this.empName=empName;
        this.empDept=empDept;
        this.empSalary=empSalary;
        this.empComapny=empComapny;
    }
}
const emp_anil = new Employee(22,'Anil','IT',50000,"TCS");
const emp_radha = new Employee(33,'Radha','HR',74000,"Wipro");
const emp_rishi = new Employee(55,'Rishi','Finance',47000,"TCS");
const emp_sonali = new Employee(66,'Sonali','Finance',45000,"Infy");
const emp_monika = new Employee(77,'Monika','IT',40000,"Wipro");
const emp_viny = new Employee(88,'Viny','IT',75000,"TCS");
const emp_mahi = new Employee(99,'Mahi','Hr',85000,"Infy");

const arrayEmployess = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

console.log("Name OF all Employees Name Array");
let empNameArray= arrayEmployess.map((element)=>{
    return element.empName;
});

console.log(empNameArray);

console.log('');
console.log("Name OF all Employees Dept Array");
let empDeptArray= arrayEmployess.map((element)=>{
    return element.empDept;
});

console.log(empDeptArray);


console.log('');
console.log("Name OF all Employees ID Array");
let empIDArray= arrayEmployess.map((element)=>{
    return element.empId;
});

console.log(empIDArray);


console.log('');
console.log("Name OF all Employees Working in TCS");
let empTCSArray= arrayEmployess.map((element,index)=>{
    if (element.empComapny=="TCS") {
        return element.empName
    }
});
let empAllTCSArray =[]
for (let index = 0; index < empTCSArray.length; index++) {

    if (empTCSArray[index]!=undefined) {
        empAllTCSArray.push(empTCSArray[index])
    }
    
}

console.log(empAllTCSArray);


