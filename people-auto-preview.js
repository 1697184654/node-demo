var people = require('./people');

var sum=1;

var t = setInterval(function(){
    people.preview(sum);
    sum++;
},100);

