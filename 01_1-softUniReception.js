function softUniReception(arr){
    let firstEmployee = Number(arr.shift());
    let secondEmployee = Number(arr.shift());
    let thirdEmployee = Number(arr.shift());

    let totalStudentsHandle = firstEmployee + secondEmployee + thirdEmployee;
    let hour = 1;
    let studentCount = Number(arr);

    while (studentCount > 0) {
        if(hour % 4 !== 0) {
            studentCount -= totalStudentsHandle;
            
        }
        hour++
        
    }
    console.log(`Time needed: ${hour - 1}h.`);

}
softUniReception(['5','6','4','20'])
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40'])