var fs = require('fs');
var random = require('unique-random')(1, 100);

var date = new Date();

if (process.argv[2]) {
var mydata = process.argv[2] + ' ' + date;
writeToFile(mydata);
}

function writeToFile (data) {
	fs.appendFile('jobsDone.txt',data , function (err) {
  if (err) throw err;
  
});
}

module.exports = {
	writeToFile: writeToFile
};


// fs.appendFile('jobsDone.txt',data , function (err) {
//   if (err) throw err;
//   console.log('Work harder bitch!');
//   console.log('Your luck number is: ' + random() + 
//   	' Use it wisely!\r\n');
// });