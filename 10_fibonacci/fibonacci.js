const fibonacci = function(num) {
    if (num<0) return "OOPS";
    if (num===0) return num;
    let last = 1;
    let secondToLast = 0;
    let temp;
    for (let counter = 1; counter<num; counter++){
        temp = secondToLast;
        secondToLast = last
        last = last + temp;
    }
    return last;
};

// Do not edit below this line
module.exports = fibonacci;
