const palindromes = function (phrase) {
    let forward = '';
    
    for (let x = 0 ; x < phrase.length ; x++) {
        if (phrase[x] != '!' && phrase[x] != ' ' && phrase[x] != ',' && phrase[x] != '.') {
            forward += phrase[x].toLowerCase(); 
        }
    }
    let backward = '';
    for (let i = phrase.length-1 ; i >= 0; i--) {
        if (phrase[i] != '!' && phrase[i] != ' ' && phrase[i] != ',' && phrase[i] != '.') {
            backward += phrase[i].toLowerCase();
        }
    }
    return (forward === backward);
};

// Do not edit below this line
module.exports = palindromes;
