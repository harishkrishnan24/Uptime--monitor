/* 
 * Example REPL Server
 * 
 */

//  Dependencies
var repl = require("repl");

// Start the REPL
repl.start({
  prompt: ">",
  eval: function(str) {
    console.log("At the evaluation stage: ", str);

    // If user said "fizz" reply with "buzz"
    if (str.indexOf("fizz") > -1) {
      console.log("buzz");
    }
  }
});
