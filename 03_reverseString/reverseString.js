const reverseString = function(content) {
    let reversedContent = "";
    for (let i = (content.length-1); i>=0; i--){
        reversedContent+=content.charAt(i)
    }
    return reversedContent
};

// Do not edit below this line
module.exports = reverseString;
