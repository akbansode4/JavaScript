

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

console.log('------TCS Workrer ------------');
arrayEmployess.forEach(function(currentValue,index){
    if (currentValue.empComapny=="TCS") {
        console.log(currentValue.empName,": ", currentValue.empComapny);
    }; 
});
console.log('');
console.log('------Salary Greater than 50000  ------------');
arrayEmployess.forEach(function(currentValue,index){
    if (currentValue.empSalary >= 50000) {
        console.log(currentValue);
    }; 
});
console.log('');
let sumSalary=0;
console.log('------Salary SUM of All Employees  ------------');
arrayEmployess.forEach((currentValue,index)=>{
    sumSalary= sumSalary+currentValue.empSalary;

});
console.log('Salary SUM of All Employees: ', sumSalary);

console.log('');
let avarageSalary;
console.log('------Average of Salary of All Employees  ------------');
avarageSalary = sumSalary/arrayEmployess.length+1
console.log('Salary SUM of All Employees: ', avarageSalary);
console.log('');
console.log('--------IT or HR dept Whose salary Greater than or equal to 75000 ----------');
arrayEmployess.forEach((element, index) => {
    if (element.empDept=="HR" ||element.empDept=="IT"&&element.empSalary>=75000) {
        console.log(element);
    }
    
});



