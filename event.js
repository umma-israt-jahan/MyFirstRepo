var http = require('http');
var url = require('url');
var fs = require('fs'); 
var events = require('events');
var eventEmitter = new events.EventEmitter();

var dateEventHnadaler = () => {
  console.log("I got a valid number");
}
eventEmitter.on('isdatevalid', dateEventHnadaler);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  if(q.year && q.month && q.day){
    let date = `${q.day}-${q.day}-${q.day}`
    eventEmitter.emit('isdatevalid');
    return res.end('Valid Date!');
    
  }else{
    return res.end('Invalid Date!');
  }
  // fs.writeFile(
  //     q.fileName + '.txt', 
  //     q.content, 
  //     function (err) {
  //       if (err) throw err;
  //       // console.log('Saved!');
  //       });
  // res.end('Saved!');
}).listen(8080);