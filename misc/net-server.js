/* 
 * Example TCP (Net) Server
 * 
 */

//  Dependencies
var net = require("net");

// Create the server
var server = net.createServer(function(connection) {
  // Send
  var outboundMessage = "pong";
  connection.write(outboundMessage);

  //   Get inbound message
  connection.on("data", function(inboundMessage) {
    var messageString = inboundMessage.toString();
    console.log(
      "I wrote " + outboundMessage + " and received " + inboundMessage
    );
  });
});

// Listen
server.listen(6000);
