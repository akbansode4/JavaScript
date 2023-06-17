const arr= [18,4,'A',121,181,6,'as','ak'], stringArr =[];
let result = arr.filter((value)=>{
    if (typeof value== 'number') {
        return value
    }else{
        stringArr.push(value);
    }
});
console.log(result.sort((n1,n2)=>{
    return n1>n2 ? 1:-1
}));
console.log(stringArr.sort());

