const getTheTitles = function(array) {
    let result = [];
    array.forEach(function(object){
        result.push(object.title);
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
