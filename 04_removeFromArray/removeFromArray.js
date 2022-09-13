const removeFromArray = function(sequence, ...substractors) {
    /*Filter out elements from the sequence if they're not different to every substractor*/
    return sequence.filter((element) => substractors.every((substractor) => substractor!==element));
};

// Do not edit below this line
module.exports = removeFromArray;
