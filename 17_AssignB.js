

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
for (let index = 0; index < arrayEmployess.length; index++) {
    
    if (arrayEmployess[index].empComapny=="TCS") {
        console.log('------TCS Workrer ------------');
        console.log(arrayEmployess[index].empName,": ", arrayEmployess[index].empComapny);
    };    
}
for (let index = 0; index < arrayEmployess.length; index++) {    
    if (arrayEmployess[index].empDept=="Finance") {
        console.log('------Finance Dept Workrer ------------');
        console.log(arrayEmployess[index].empName,": ", arrayEmployess[index].empDept);
    }
    
}
for (let index = 0; index < arrayEmployess.length; index++) {    
    if (arrayEmployess[index].empName.startsWith("R")) {
        console.log('------Start with R name Workrer ------------');
        console.log(arrayEmployess[index]);
    }
    
}
for (let index = 0; index < arrayEmployess.length; index++) {    
    if (arrayEmployess[index].empSalary >= 75000) {
        console.log('------Salary Greater than 75000 ------------');
        console.log(arrayEmployess[index].empName,": ", arrayEmployess[index].empComapny, arrayEmployess[index].empSalary);
    }
}
for (let index = 0; index < arrayEmployess.length; index++) {    
    if (arrayEmployess[index].empSalary >= 50000 && arrayEmployess[index].empDept=="IT") {
        console.log('------Salary Greater than 50000 and IT Dept ------------');
        console.log(arrayEmployess[index]);
    }
}

for (let index = 0; index < arrayEmployess.length; index++) {
    
    if (arrayEmployess[index].empComapny=="Infy") {
        console.log('------Infy Workrer ------------');
        console.log(arrayEmployess[index]);
    };    
}

