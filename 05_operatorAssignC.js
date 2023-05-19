var eligibility = function(gradScore,hscScore,sccScore,candidateName){
    console.log(gradScore >= 70 || hscScore >= 80 || sccScore > 90 ? `Congrate ${candidateName} you are eligible for TCS interview`: `${candidateName} Unfortunately you are not eligible for TCS interview `);
};  

eligibility(80,86,90,'Akshay');
eligibility(70,65,55,'Rohit');
eligibility(60,79,88,'Sham');



console.log(`${0==''}`);
console.log(`${0=='0'}`);
console.log(`${0==false}`);
console.log(`${null==undefined}`);
console.log(`${1==[1]}`);
console.log(`${1==true}`);
console.log(`${1=='1'}`);