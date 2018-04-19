/* 
 * Example TCP (Net) Client
 * 
 *  */

//  Dependencies
var tls = require("tls");
var fs = require("fs");
var path = require("path");

// Server options
var options = {
  ca: fs.readFileSync(path.join(__dirname, "/../https/cert.pem"))
};

// Define the message to send
var outboundMessage = "ping";

// Create the client
var client = tls.connect(6000, options, function() {
  // Send the message
  client.write(outboundMessage);
});

// Receive message
client.on("data", function(inboundMessage) {
  var messageString = inboundMessage.toString();
  console.log("I wrote " + outboundMessage + " and received " + inboundMessage);
  client.end();
});
