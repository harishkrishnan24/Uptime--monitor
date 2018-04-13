/* 
 * Library that demonstrates something throwing when it's * init() is called
 * 
 */

//  Container
var example = {};

// Init function
example.init = function() {
  // This is an error created intentionally (bar is not defined)
  var foo = bar;
};

// Export the module
module.exports = example;
