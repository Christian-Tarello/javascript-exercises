const sumAll = function(firstNum, secondNum) {
    if (typeof firstNum !== "number" || typeof secondNum !== "number"){
        return "ERROR";
    } else if (firstNum<0 || secondNum<0){
        return "ERROR";
    }
    
    let startNum;
    let endNum;

    let finalSum = 0;

    if (firstNum>secondNum){
        startNum = secondNum;
        endNum = firstNum;
    } else {
        startNum = firstNum;
        endNum = secondNum;
    }


    for (let i = startNum; i<=endNum; i++){
        finalSum+=i;
    }
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
