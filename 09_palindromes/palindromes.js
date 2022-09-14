const palindromes = function (string) {
    string = string.toLowerCase()
    string = string.replace(/[\.!,;-_\[\]\(\)\|\{\}\+\?\*\^\$'"]+|\s+/g, '');
    let reversedString = string.split('').reverse().join('');
    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
