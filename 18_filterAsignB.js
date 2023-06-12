

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

console.log("Name OF all Employees Working in TCS");
const empTCS = arrayEmployess.filter((element)=>{
    return element.empComapny=="TCS";
})
for (const emp of empTCS) {
    console.log(emp.empName,emp.empComapny);
}

console.log('');
console.log('--------Average Salay OF employees -----------');
const allSalary = arrayEmployess.filter((element)=>{
    return element.empSalary
}).map((element)=>{
    return element.empSalary;
})
let result=0;
for (const salary of allSalary) {
    result =result+salary/allSalary.length
}
console.log(result);

console.log('');
console.log('--------Average Salay OF employees Wipro ANd Infy -----------');
const allSalaryWI = arrayEmployess.filter((element)=>{
    return element.empComapny=="Wipro"||element.empComapny=="Infy";
}).map((element)=>{
    return element.empSalary;
})

let resultWI=0;
for (const salary of allSalaryWI) {
    resultWI =resultWI+salary
}
console.log(resultWI/4);



console.log('');
console.log("------------ Name OF all Employees Working in Wipro ---------");
let allEmpWipro = arrayEmployess.filter((element)=>{
    return element.empComapny=="Wipro"
}).map((element)=>{
    return element.empName
})
console.log(allEmpWipro);

console.log('');
console.log("------------ Name OF all Employees Working in IT or HR dept ---------");
let allEmpITAndHR = arrayEmployess.filter((element)=>{
    return element.empDept=="HR"||element.empDept=="IT"
}).map((element)=>{
    return element.empName
})
console.log(allEmpITAndHR);

console.log('');
console.log('--------- Employee id Greater than 50 ----------');
const empIDGreaterThan50 = arrayEmployess.filter((element)=>{
    return element.empId>50;
}).map((element)=>{
    return element.empName
})
console.log(empIDGreaterThan50);

console.log('');
console.log('--------- Employee Name Start with A, M, V ----------');
const empAMV = arrayEmployess.filter((element)=>{
    return element.empName.startsWith("A")||element.empName.startsWith("M")||element.empName.startsWith("V");
}).map((element)=>{
    return element.empName
})
console.log(empAMV);

console.log('');
console.log('--------Average Salay OF employees With IT Dept -----------');
let avgSalaryITfilter = arrayEmployess.filter((element)=>{
    return element.empDept=="IT"
}).map((element)=>{
    return element.empSalary;
})

let avgSalaryIT= avgSalaryITfilter.reduce((runningTotal, value)=>{

    return runningTotal+value
})
console.log(avgSalaryIT/avgSalaryITfilter.length);