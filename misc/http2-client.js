/* 
 *  Example HTTP2 Client
 *
 */

//  Dependencies
var http2 = require("http2");

// Create client
var client = http2.connect("http://localhost:6000");

// Create a request
var req = client.request({
  ":path": "/"
});

// When message is received
var str = "";
req.on("data", function(chunk) {
  str += chunk;
});

// When message ends
req.on("end", function() {
  console.log(str);
});

// End the request
req.end();
