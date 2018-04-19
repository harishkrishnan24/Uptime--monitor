/* 
 * Example TCP (Net) Client
 * 
 *  */

//  Dependencies
var net = require("net");

// Define the message to send
var outboundMessage = "ping";

// Create the client
var client = net.createConnection({ port: 6000 }, function() {
  // Send the message
  client.write(outboundMessage);
});

// Receive message
client.on("data", function(inboundMessage) {
  var messageString = inboundMessage.toString();
  console.log("I wrote " + outboundMessage + " and received " + inboundMessage);
  client.end();
});
