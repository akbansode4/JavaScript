function gradeCalculation(mark){
    if(mark>=90 && mark <=100){
        console.log(`Funtastic Marks ${mark}, Your Grade is 'A`);
    } else if (mark>=75 && mark<90) {
        console.log(`Excellent Marks ${mark}, Your Grade is 'B`);        
    } else if (mark>=50 && mark<75) {
        console.log(`Good Marks ${mark}, Your Grade is 'B`);        
    } else if (mark>=35 && mark<50) {
        console.log(`Marks ${mark}, Your Grade is 'C', Need Improvement`);        
    }else if(mark<=0 || mark>100 || isNaN(mark)){
        console.log(`Marks ${mark}, Please provide the valid Marks`);
    } else if(0<mark && mark<35){
        console.log(`Marks ${mark}, Your are Failed`);
    }
};
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);