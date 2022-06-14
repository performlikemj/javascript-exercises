const repeatString = function(s, n) {
    const inputString = s;
    let output = ''
    if (n < 0) {
        return "ERROR";
    }
    while (n > 0) {
        output += `${inputString}`;
        n--; 
    } 
    return output;
};

// Do not edit below this line
module.exports = repeatString;
