const getTheTitles = function(obj) {
  let books = [];
  for (let x = 0 ; x < obj.length ; x++)
    for (const key in obj[x]) {
        if (key === 'title') {
            books.push(obj[x][key])
        }
    }  
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
