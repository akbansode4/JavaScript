var eligibility = function(gradScore,hscScore,sccScore,candidateName){
    if (gradScore >= 70 || hscScore >= 80 || sccScore > 90){
        console.log(`Congrate ${candidateName} you are eligible for TCS interview`);
    }else{
        console.log(`${candidateName} Unfortunately you are not eligible for TCS interview `);
    }
};  

eligibility(80,86,90,'Akshay');
eligibility(70,65,55,'Rohit');
eligibility(60,79,88,'Sham');

