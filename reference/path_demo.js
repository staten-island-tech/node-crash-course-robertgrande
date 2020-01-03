const path = require('path'); //already there, no path needed

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));