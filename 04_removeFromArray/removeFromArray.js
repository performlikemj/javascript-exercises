const removeFromArray = function(array, ...valuesToRemove) {
    for (let i = 0; i < array.length; i++) {
        for (value of valuesToRemove) {
            if (array[i] === value) {
                array.splice(i, 1);
                removeFromArray(array, ...valuesToRemove);
            } 
        }
    }

    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
