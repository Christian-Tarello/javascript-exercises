const repeatString = function(string, num) {
    if (num<0){
        return "ERROR";
    }

    let newString = "";

    for (;num>0;num--){
        newString += string;
    }
    return newString;


};

// Do not edit below this line
module.exports = repeatString;
