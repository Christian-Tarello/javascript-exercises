const sumAll = function(firstNum, secondNum) {
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
