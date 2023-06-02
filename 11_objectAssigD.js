const professor ={
    name:'Vikas Bhosale',
    city:'Solapur',
    collage:"Sknscoe",
    age:50,
    gender:'Male',
    degrees :{
        enginerring:"CSC",
        PHD:"Adv Computing",
        MBA:"Finance",
        diploma: "Web Designing"
    },
    certificates:['Hacker Rank Participation','Certicate in IFE Course','Certicate in Adv programming'],
    concatDegrees: function(){
        console.log(`Teachers Degrees are: ${this.degrees.enginerring}, ${this.degrees.PHD}, ${this.degrees.MBA}, ${this.degrees.diploma}`);
    },
};
console.log('------- Object With Properties Or Data member ----------');
console.log(professor);
console.log('');
console.log('------- Degree Object With Properties ----------');
console.log(professor.degrees);
console.log('');
console.log('------- Teachers Degree are:  ----------');
professor.concatDegrees();
console.log('');
console.log('------- Adding New Properties Experience ----------');
professor.experience = '14 Years';
console.log(`Experience : ${professor.experience}`);
console.log('');
console.log('------- Update City Properties ----------');
professor.city = 'Pune';
console.log(`City : ${professor.city}`);
console.log('');
console.log('------- Adding New Certificate in Object Property at End of Array ----------');
professor.certificates.push('Oracle Certified');
console.log(`Certificates : ${professor.certificates}`);
console.log(`Log Last Element of array : ${professor.certificates[professor.certificates.length-1]}`);