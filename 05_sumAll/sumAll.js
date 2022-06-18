const sumAll = function(...args) {
    let sum = 0;
    let min;
    let max;
    if (args[0] < args[1]) {
        min = args[0];
        max = args[1];
    } else {
        max = args[0];
        min = args[1];
    }

    if (min < 0 || max < 0 || typeof(min) != "number" || typeof(max) != "number") {
        return "ERROR"
    } else {
        for (let i = min; i <= max; i++) {
            sum += i;
        }   
    }

    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
