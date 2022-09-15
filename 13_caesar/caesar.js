const caesar = function(string, shift) {
    let encodedString = "";
    for (let i = 0; i<string.length; i++){
        encodedString += encryptCharacter(string[i], shift);
    }
    return encodedString;

};

const encryptCharacter = function(char, shift){
    const unicode = char.codePointAt(0);
    const encryptedUnicode = shiftUnicode(unicode, shift);
    const encryptedChar = String.fromCodePoint(encryptedUnicode);
    return encryptedChar;
};

const getUnicodeLimits = function(unicode){
    const UPPERCASE_LIMITS = [65,90];
    const LOWERCASE_LIMITS = [97,122];

    switch (true){
        case unicode>=UPPERCASE_LIMITS[0] && unicode<=UPPERCASE_LIMITS[1]:
            return UPPERCASE_LIMITS;
        case unicode>=LOWERCASE_LIMITS[0] && unicode<=LOWERCASE_LIMITS[1]:
            return LOWERCASE_LIMITS;
        case true:
            return undefined;
    }

};

const wrapNumber = function(num, low, high){
    /*wrap number inclusively between low & high*/
    if (num>=low && num<=high) return num;
    if (num>=low){
        const range = high-low+1;
        const wrapped = (num-low)%range;
        return wrapped+low;
    } else{
        const wrapped = low-num;
        return high-wrapped+1;
    }
    
    
};

const shiftUnicode = function(unicode, shift){
    const num = unicode+shift;
    const unicodeLimits = getUnicodeLimits(unicode);
    return unicodeLimits ? wrapNumber(num, ...unicodeLimits): unicode;
};



// Do not edit below this line
module.exports = caesar;
