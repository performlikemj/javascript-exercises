const findTheOldest = function(obj) {
    let people = [];
    for (let x = 0; x < obj.length; x++) {
        let dataObject = {};
        dataObject['name'] = obj[x]['name'];
        if (obj[x]['yearOfDeath']) {
            dataObject['lifespan'] =  obj[x]['yearOfDeath'] - obj[x]['yearOfBirth'];
        } else {
            dataObject['lifespan'] = Number(new Date().getFullYear() - obj[x]['yearOfBirth']);
 
        }  
        people.push(dataObject);
    }
    const oldest = people.sort((personA, personB) => personB['lifespan'] - personA['lifespan']);
    
    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
