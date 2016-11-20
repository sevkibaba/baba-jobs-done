var fs = require('fs');
var random = require('unique-random')(1, 100);

var date = new Date();
var data = process.argv[2] + ' ' + date;

var numbers = [random(),random(),random(),random()];

fs.appendFile('jobsDone.txt',data , function (err) {
  if (err) throw err;
  console.log('Work harder bitch!');
  console.log('Your luck number is: ' + random() + 
  	' Use it wisely!\r\n');
});