const reverseString = function(s) {
    /* split string input by space and place in an array*/
    const words = s.split(' ');
    let wordHolder = '';
    let reverseList = [];
    /* for all array values perform a reversal and append to reverseList*/
    for (word of words) {
        for (let i = word.length-1; i >= 0; i--) {
            wordHolder += word[i];
        }
        reverseList.push(wordHolder);
        wordHolder = '';
    } 
    reverseList = reverseList.reverse();
    return reverseList.join(' ');
};

// Do not edit below this line
module.exports = reverseString;
