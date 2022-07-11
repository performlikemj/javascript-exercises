const fibonacci = function(number) {
    let placeholder = [1];
    let a = 1;
    let b = 1; 
    if (Number(number) < 1 ) {
        return 'OOPS'
    }
    while (placeholder.length != Number(number)+1) {
        c = a + b;
        a = b;
        b = c;
        placeholder.push(a);
    }

    return placeholder[Number(number)-1];
};

// Do not edit below this line
module.exports = fibonacci;
