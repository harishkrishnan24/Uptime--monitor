/*
 * Request Handlers
 *
 */

// Dependencies
var _data = require("./data");
var helpers = require("./helpers");
var config = require("./config");
var _url = require("url");
var dns = require("dns");
var _performance = require("perf_hooks").performance;
var util = require("util");
var debug = util.debuglog("performance");

// Define the handlers
var handlers = {};

/*
HTML Handlers
*/

// Index handler
handlers.index = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Uptime Monitoring",
      "head.description": "Simple uptime monitorin for HTTP/HTTPS site",
      "body.class": "index"
    };

    // Read in a template as a string
    helpers.getTemplate("index", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create Account
handlers.accountCreate = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Create an Account",
      "head.description": "Signup is easy and only takes a few seconds",
      "body.class": "accountCreate"
    };

    // Read in a template as a string
    helpers.getTemplate("accountCreate", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create New Session
handlers.sessionCreate = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Login to your Account",
      "head.description":
        "Please enter your phone number and password to access your account",
      "body.class": "sessionCreate"
    };

    // Read in a template as a string
    helpers.getTemplate("sessionCreate", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Session has been deleted
handlers.sessionDeleted = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Logout",
      "head.description": "You have been logged out of your account.",
      "body.class": "sessionDeleted"
    };

    // Read in a template as a string
    helpers.getTemplate("sessionDeleted", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Edit Account
handlers.accountEdit = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Account Settings",
      "body.class": "accountEdit"
    };

    // Read in a template as a string
    helpers.getTemplate("accountEdit", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Account Delete
handlers.accountDeleted = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Account Deleted",
      "head.description": "Your account has been deleted",
      "body.class": "accountDeleted"
    };

    // Read in a template as a string
    helpers.getTemplate("accountDeleted", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create a New Check
handlers.checksCreate = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Create a New Check",
      "body.class": "checksCreate"
    };

    // Read in a template as a string
    helpers.getTemplate("checksCreate", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Dashboard (view all checks)
handlers.checksList = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Dashboard",
      "body.class": "checksList"
    };

    // Read in a template as a string
    helpers.getTemplate("checksList", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Edit Check
handlers.checksEdit = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    var templateData = {
      "head.title": "Check Details",
      "body.class": "checksEdit"
    };

    // Read in a template as a string
    helpers.getTemplate("checksEdit", templateData, function(err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function(err, str) {
          if (!err && str) {
            // Return the page as HTML
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Favicon
handlers.favicon = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Read in the favicons data
    helpers.getStaticAsset("favicon.ico", function(err, data) {
      if (!err && data) {
        callback(200, data, "favicon");
      } else {
        callback(500);
      }
    });
  } else {
    callback(405);
  }
};

handlers.public = function(data, callback) {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Get the file name being requested
    var trimmedAssetName = data.trimmedPath.replace("public/", "").trim();
    if (trimmedAssetName.length > 0) {
      // Read in the assets data
      helpers.getStaticAsset(trimmedAssetName, function(err, data) {
        if (!err && data) {
          //   Determine the content type
          var contentType = "plain";

          if (trimmedAssetName.indexOf(".css") > -1) {
            contentType = "css";
          }
          if (trimmedAssetName.indexOf(".png") > -1) {
            contentType = "png";
          }
          if (trimmedAssetName.indexOf(".jpg") > -1) {
            contentType = "jpg";
          }
          if (trimmedAssetName.indexOf(".ico") > -1) {
            contentType = "favicon";
          }
          // Callback the data
          callback(200, data, contentType);
        } else {
          callback(404);
        }
      });
    }
  } else {
    callback(405);
  }
};

/*
JSON API HANDLERS
 */

// Example error
handlers.exampleError = function(data, callback) {
  var err = new Error("This is an example error");
  throw err;
};

// Users
handlers.users = function(data, callback) {
  var acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for the users submethods
handlers._users = {};

// Users - post Required data: firstName, lastName, phone, password,
// tosAgreement Optional dara: none
handlers._users.post = function(data, callback) {
  // Check that all required fields are filled out
  var firstName =
    typeof data.payload.firstName == "string" &&
    data.payload.firstName.trim().length > 0
      ? data.payload.firstName.trim()
      : false;
  var lastName =
    typeof data.payload.lastName == "string" &&
    data.payload.lastName.trim().length > 0
      ? data.payload.lastName.trim()
      : false;
  var phone =
    typeof data.payload.phone == "string" &&
    data.payload.phone.trim().length == 10
      ? data.payload.phone.trim()
      : false;
  var password =
    typeof data.payload.password == "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;
  var tosAgreement =
    typeof data.payload.tosAgreement == "boolean" &&
    data.payload.tosAgreement == true
      ? true
      : false;

  if (firstName && lastName && phone && password && tosAgreement) {
    //  Make user that the user does not already exist
    _data.read("users", phone, function(err, data) {
      if (err) {
        // Hash the password
        var hashedPassword = helpers.hash(password);

        // Create the user object
        if (hashedPassword) {
          var userObject = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            hashedPassword: hashedPassword,
            tosAgreement: true
          };

          // Store the user
          _data.create("users", phone, userObject, function(err) {
            if (!err) {
              callback(200);
            } else {
              callback(500, { Error: "Could not create the new user" });
            }
          });
        } else {
          callback(500, { Error: "Could not hash the user's password" });
        }
      } else {
        // User already exists
        callback(400, {
          Error: "A user with that phone number already exists"
        });
      }
    });
  } else {
    callback(400, { Error: "Missing required fields" });
  }
};

// Users - get Required data - phone  Optional data - none
handlers._users.get = function(data, callback) {
  //  Check phone number is valid
  var phone =
    typeof data.queryStringObject.phone == "string" &&
    data.queryStringObject.phone.trim().length == 10
      ? data.queryStringObject.phone.trim()
      : false;
  if (phone) {
    //  Get the token from the headers
    var token =
      typeof data.headers.token == "string" ? data.headers.token : false;
    //  Verify that given token is valid for the user
    handlers._tokens.verifyToken(token, phone, function(tokenIsValid) {
      if (tokenIsValid) {
        // lookup for user
        _data.read("users", phone, function(err, data) {
          if (!err && data) {
            // Remove the hashed password from the user object before returning to the
            // requester
            delete data.hashedPassword;
            callback(200, data);
          } else {
            callback(404);
          }
        });
      } else {
        callback(403, { Error: "Missing token or invalid token" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Users - put Required data = phone Optional data = firstName, lastName,
// password (at least one must be specified)
handlers._users.put = function(data, callback) {
  // Check for the required field
  var phone =
    typeof data.payload.phone == "string" &&
    data.payload.phone.trim().length == 10
      ? data.payload.phone.trim()
      : false;

  // Check for optional fields
  var firstName =
    typeof data.payload.firstName == "string" &&
    data.payload.firstName.trim().length > 0
      ? data.payload.firstName.trim()
      : false;
  var lastName =
    typeof data.payload.lastName == "string" &&
    data.payload.lastName.trim().length > 0
      ? data.payload.lastName.trim()
      : false;
  var password =
    typeof data.payload.password == "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;

  // Error if phone is invalid
  if (phone) {
    // Error if nothing is sent to update
    if (firstName || lastName || password) {
      //  Get the token from the headers
      var token =
        typeof data.headers.token == "string" ? data.headers.token : false;
      //  Verify that given token is valid for the user
      handlers._tokens.verifyToken(token, phone, function(tokenIsValid) {
        if (tokenIsValid) {
          // lookup for user
          _data.read("users", phone, function(err, userData) {
            if (!err && userData) {
              // Update fields
              if (firstName) {
                userData.firstName = firstName;
              }
              if (lastName) {
                userData.lastName = lastName;
              }
              if (password) {
                userData.hashedPassword = helpers.hash(password);
              }
              // Store the updates
              _data.update("users", phone, userData, function(err) {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, { Error: "Could not update the user" });
                }
              });
            } else {
              callback(400, { Error: "The specified user does not exist" });
            }
          });
        } else {
          callback(403, { Error: "Missing token or invalid token" });
        }
      });
    } else {
      callback(400, { Error: "Missing fields to update" });
    }
  } else {
    callback(400, { Error: "Missing required fields" });
  }
};

// Users - delete Require field - phone
handlers._users.delete = function(data, callback) {
  // Check that the phone number is valid
  var phone =
    typeof data.queryStringObject.phone == "string" &&
    data.queryStringObject.phone.trim().length == 10
      ? data.queryStringObject.phone.trim()
      : false;
  if (phone) {
    //  Get the token from the headers
    var token =
      typeof data.headers.token == "string" ? data.headers.token : false;
    //  Verify that given token is valid for the user
    handlers._tokens.verifyToken(token, phone, function(tokenIsValid) {
      if (tokenIsValid) {
        // lookup for user
        _data.read("users", phone, function(err, data) {
          if (!err && data) {
            _data.delete("users", phone, function(err) {
              if (!err) {
                // Delete checks associated with user
                var userChecks =
                  typeof data.checks == "object" && data.checks instanceof Array
                    ? data.checks
                    : [];
                var checksToDelete = userChecks.length;

                if (checksToDelete > 0) {
                  var checksDeleted = 0;
                  var deletionErrors = false;
                  // Loop through the checks
                  userChecks.forEach(function(checkId) {
                    // Delete the check
                    _data.delete("checks", checkId, function(err) {
                      if (err) {
                        deletionErrors = true;
                      }
                      checksDeleted++;
                      if (checksDeleted == checksToDelete) {
                        if (deletionErrors) {
                          callback(500, {
                            Error:
                              "Errors encountered while attempting to delete all of the user checks"
                          });
                        } else {
                          callback(200);
                        }
                      }
                    });
                  });
                } else {
                  callback(200);
                }
              } else {
                callback(500, { Error: "Could not delete the specified user" });
              }
            });
          } else {
            callback(400, { Error: "Could not find the specified user" });
          }
        });
      } else {
        callback(403, { Error: "Missing token or invalid token" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Tokens
handlers.tokens = function(data, callback) {
  var acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._tokens[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for tokens
handlers._tokens = {};

// Tokens - post Requried data: phone, password Optional data: none
handlers._tokens.post = function(data, callback) {
  _performance.mark("entered function");
  var phone =
    typeof data.payload.phone == "string" &&
    data.payload.phone.trim().length == 10
      ? data.payload.phone.trim()
      : false;
  var password =
    typeof data.payload.password == "string" &&
    data.payload.password.trim().length > 0
      ? data.payload.password.trim()
      : false;
  _performance.mark("inputs validated");
  if (phone && password) {
    // Lookup the user who matches that phone number
    _performance.mark("beginning user lookup");
    _data.read("users", phone, function(err, userData) {
      _performance.mark("user lookup complete");
      if (!err && userData) {
        // Hash the sent password and compare it to the password stored in the user
        // object
        _performance.mark("beginning password hashing");
        var hashedPassword = helpers.hash(password);
        _performance.mark("completed password hashing");
        if (hashedPassword === userData.hashedPassword) {
          // If valid create a new token with a random name, set expiration date one hour
          _performance.mark("creating data for token");
          var tokenId = helpers.createRandomString(20);
          var expires = Date.now() + 1000 * 60 * 60;
          var tokenObject = {
            phone: phone,
            id: tokenId,
            expires: expires
          };
          // Store the token
          _performance.mark("beginning storing token");
          _data.create("tokens", tokenId, tokenObject, function(err) {
            _performance.mark("storing token complete");

            // Gather all the measurements
            _performance.measure(
              "Beginning to end",
              "entered function",
              "storing token complete"
            );
            _performance.measure(
              "Validating user input",
              "entered function",
              "inputs validated"
            );
            _performance.measure(
              "User lookup",
              "beginning user lookup",
              "user lookup complete"
            );
            _performance.measure(
              "Password hashing",
              "beginning password hashing",
              "completed password hashing"
            );
            _performance.measure(
              "Token data creation",
              "creating data for token",
              "beginning storing token"
            );
            _performance.measure(
              "Token storing",
              "beginning storing token",
              "storing token complete"
            );

            // Log out all the measurements
            var measurements = _performance.getEntriesByType("measure");
            measurements.forEach(function(measurement) {
              debug(
                "\x1b[33m%s\x1b[0m",
                measurement.name + " " + measurement.duration
              );
            });
            if (!err) {
              callback(200, tokenObject);
            } else {
              callback(500, { Error: "Could not create new token" });
            }
          });
        } else {
          callback(400, {
            Error: "Password did not match the specified user's password"
          });
        }
      } else {
        callback(400, { Error: "Could not find the specified user" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field(s)" });
  }
};

// Tokens - get Required data; id Optional data: none
handlers._tokens.get = function(data, callback) {
  // Check that the Id sen t is valid
  var id =
    typeof data.queryStringObject.id == "string" &&
    data.queryStringObject.id.trim().length == 20
      ? data.queryStringObject.id.trim()
      : false;
  if (id) {
    // lookup for user
    _data.read("tokens", id, function(err, tokenData) {
      if (!err && tokenData) {
        callback(200, tokenData);
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Tokens - put Required data : Id, extend Optional data : none
handlers._tokens.put = function(data, callback) {
  var id =
    typeof data.payload.id == "string" && data.payload.id.trim().length == 20
      ? data.payload.id.trim()
      : false;
  var extend =
    typeof data.payload.extend == "boolean" && data.payload.extend == true
      ? extend
      : false;

  if (id && extend) {
    // Lookup the token
    _data.read("tokens", id, function(err, tokenData) {
      if (!err && tokenData) {
        // Check token is not already expired
        if (tokenData.expires > Date.now()) {
          //  Extend
          tokenData.expires = Date.now() + 1000 * 60 * 60;

          // Store the new updates
          _data.update("tokens", id.tokenData, function(err) {
            if (!err) {
              callback(200);
            } else {
              callback(500, { Error: "Could not extend the token expiration" });
            }
          });
        } else {
          callback(400, {
            Error: "Token already expired, and cannot be extended"
          });
        }
      } else {
        callback(400, { Error: "Specified token does not exist" });
      }
    });
  } else {
    callback(400, { Error: "Missing required fields or fields are invalid" });
  }
};

// Tokens - delete Required data: Id Optional data: none
handlers._tokens.delete = function(data, callback) {
  // Check that the id is valid
  var id =
    typeof data.queryStringObject.id == "string" &&
    data.queryStringObject.id.trim().length == 20
      ? data.queryStringObject.id.trim()
      : false;
  if (id) {
    // lookup for user
    _data.read("tokens", id, function(err, data) {
      if (!err && data) {
        _data.delete("tokens", id, function(err, data) {
          if (!err) {
            callback(200);
          } else {
            callback(500, { Error: "Could not delete the specified token" });
          }
        });
      } else {
        callback(400, { Error: "Could not find the specified token" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// verify if a given token is valid for a given user
handlers._tokens.verifyToken = function(id, phone, callback) {
  // Lookup the token
  _data.read("tokens", id, function(err, tokenData) {
    if (!err && tokenData) {
      // Check token is for the user and not expired
      if (tokenData.phone == phone && tokenData.expires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// Checks
handlers.checks = function(data, callback) {
  var acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._checks[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the checks method
handlers._checks = {};

// Checks - post Required data: protocol, url, method, successCodes,
// timeoutSeconds Optional data: none
handlers._checks.post = function(data, callback) {
  // Validate all the inputs
  var protocol =
    typeof data.payload.protocol == "string" &&
    ["https", "http"].indexOf(data.payload.protocol) > -1
      ? data.payload.protocol
      : false;
  var url =
    typeof data.payload.url == "string" && data.payload.url.trim().length > 0
      ? data.payload.url.trim()
      : false;
  var method =
    typeof data.payload.method == "string" &&
    ["put", "get", "post", "delete"].indexOf(data.payload.method) > -1
      ? data.payload.method
      : false;
  var successCodes =
    typeof data.payload.successCodes == "object" &&
    data.payload.successCodes instanceof Array &&
    data.payload.successCodes.length > 0
      ? data.payload.successCodes
      : false;
  var timeoutSeconds =
    typeof data.payload.timeoutSeconds == "number" &&
    data.payload.timeoutSeconds % 1 === 0 &&
    data.payload.timeoutSeconds >= 1 &&
    data.payload.timeoutSeconds <= 5
      ? data.payload.timeoutSeconds
      : false;

  if (protocol && url && method && successCodes && timeoutSeconds) {
    // Check for valid token and lookup user
    var token =
      typeof data.headers.token == "string" ? data.headers.token : false;

    // Lookup user
    _data.read("tokens", token, function(err, tokenData) {
      if (!err && tokenData) {
        var userPhone = tokenData.phone;

        // Lookup user data
        _data.read("users", userPhone, function(err, userData) {
          if (!err && userData) {
            var userChecks =
              typeof userData.checks == "object" &&
              userData.checks instanceof Array
                ? userData.checks
                : [];
            // Verify that the user has less than number of max checks per user
            if (userChecks.length < config.maxChecks) {
              // Verify that the URL given has DNS entries
              var parsedUrl = _url.parse(protocol + "://" + url, true);
              var hostName =
                typeof parsedUrl.hostname == "string" &&
                parsedUrl.hostname.length > 0
                  ? parsedUrl.hostname
                  : false;
              dns.resolve(hostName, function(err, records) {
                if (!err && records) {
                  // Create randomId for checks
                  var checkId = helpers.createRandomString(20);

                  // Create check object and include users phone
                  var checkObject = {
                    id: checkId,
                    userPhone: userPhone,
                    protocol: protocol,
                    url: url,
                    method: method,
                    successCodes: successCodes,
                    timeoutSeconds: timeoutSeconds
                  };

                  // save the object
                  _data.create("checks", checkId, checkObject, function(err) {
                    if (!err) {
                      //  Add the checkId to the users object

                      userData.checks = userChecks;
                      userData.checks.push(checkId);

                      // Save the new user data
                      _data.update("users", userPhone, userData, function(err) {
                        if (!err) {
                          callback(200, checkObject);
                        } else {
                          callback(500, {
                            Error: "Could not update the user with new check"
                          });
                        }
                      });
                    } else {
                      callback(500, {
                        Error: "Could not create the new check"
                      });
                    }
                  });
                } else {
                  callback(400, {
                    Error:
                      "The hostname of the URL entered did not resolve to any DNS entries"
                  });
                }
              });
            } else {
              callback(400, {
                Error:
                  "The user already has max number of checks (" +
                  config.maxChecks +
                  ")"
              });
            }
          } else {
            callback(403);
          }
        });
      } else {
        callback(403);
      }
    });
  } else {
    callback(400, { Error: "Missing inputs or inputs are invalid" });
  }
};

// Checks - get Required data: id Optional data: none
handlers._checks.get = function(data, callback) {
  //  Check phone number is valid
  var id =
    typeof data.queryStringObject.id == "string" &&
    data.queryStringObject.id.length == 20
      ? data.queryStringObject.id
      : false;
  if (id) {
    // Lookup the check
    _data.read("checks", id, function(err, checkData) {
      if (!err && checkData) {
        //  Get the token from the headers
        var token =
          typeof data.headers.token == "string" ? data.headers.token : false;
        //  Verify that given token is valid for the user who created the check
        handlers._tokens.verifyToken(token, checkData.userPhone, function(
          tokenIsValid
        ) {
          if (tokenIsValid) {
            // If valid return check data
            callback(200, checkData);
          } else {
            callback(403);
          }
        });
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Checks - put Required data: id Optional data: protocol, url, method,
// successCodes, timeoutSeconds(One must be sent)
handlers._checks.put = function(data, callback) {
  // Required
  var id =
    typeof data.payload.id == "string" && data.payload.id.length == 20
      ? data.payload.id
      : false;

  // Optional
  var protocol =
    typeof data.payload.protocol == "string" &&
    ["https", "http"].indexOf(data.payload.protocol) > -1
      ? data.payload.protocol
      : false;
  var url =
    typeof data.payload.url == "string" && data.payload.url.trim().length > 0
      ? data.payload.url.trim()
      : false;
  var method =
    typeof data.payload.method == "string" &&
    ["put", "get", "post", "delete"].indexOf(data.payload.method) > -1
      ? data.payload.method
      : false;
  var successCodes =
    typeof data.payload.successCodes == "object" &&
    data.payload.successCodes instanceof Array &&
    data.payload.successCodes.length > 0
      ? data.payload.successCodes
      : false;
  var timeoutSeconds =
    typeof data.payload.timeoutSeconds == "number" &&
    data.payload.timeoutSeconds % 1 === 0 &&
    data.payload.timeoutSeconds >= 1 &&
    data.payload.timeoutSeconds <= 5
      ? data.payload.timeoutSeconds
      : false;

  if (id) {
    // Check to make sure data is valid
    if (protocol || url || method || timeoutSeconds || successCodes) {
      // Lookup check
      _data.read("checks", id, function(err, checkData) {
        if (!err && checkData) {
          //  Get the token from the headers
          var token =
            typeof data.headers.token == "string" ? data.headers.token : false;
          //  Verify that given token is valid for the user who created the check
          handlers._tokens.verifyToken(token, checkData.userPhone, function(
            tokenIsValid
          ) {
            if (tokenIsValid) {
              // Update the check
              if (protocol) {
                checkData.protocol = protocol;
              }
              if (url) {
                checkData.url = url;
              }
              if (method) {
                checkData.method = method;
              }
              if (successCodes) {
                checkData.successCodes = successCodes;
              }
              if (timeoutSeconds) {
                checkData.timeoutSeconds = timeoutSeconds;
              }

              // Store
              _data.update("checks", id, checkData, function(err) {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, { Error: "Could not update the check" });
                }
              });
            } else {
              callback(403);
            }
          });
        } else {
          callback(400, { Error: "Check ID does not exist" });
        }
      });
    } else {
      callback(400, { Error: "Missing fields to update" });
    }
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Checks - delete Required data: id Optional data: none
handlers._checks.delete = function(data, callback) {
  // Check that the id is valid
  var id =
    typeof data.queryStringObject.id == "string" &&
    data.queryStringObject.id.trim().length == 20
      ? data.queryStringObject.id.trim()
      : false;
  if (id) {
    // lookup for check
    _data.read("checks", id, function(err, checkData) {
      if (!err && checkData) {
        //  Get the token from the headers
        var token =
          typeof data.headers.token == "string" ? data.headers.token : false;
        //  Verify that given token is valid for the user
        handlers._tokens.verifyToken(token, checkData.userPhone, function(
          tokenIsValid
        ) {
          if (tokenIsValid) {
            // Delete the check data
            _data.delete("checks", id, function(err) {
              if (!err) {
                _data.read("users", checkData.userPhone, function(
                  err,
                  userData
                ) {
                  if (!err && userData) {
                    var userChecks =
                      typeof userData.checks == "object" &&
                      userData.checks instanceof Array
                        ? userData.checks
                        : [];
                    // Remove the deleted check from list of checks
                    var checkPosition = userChecks.indexOf(id);
                    if (checkPosition > -1) {
                      userChecks.splice(checkPosition, 1);

                      // resave
                      _data.update(
                        "users",
                        checkData.userPhone,
                        userData,
                        function(err) {
                          if (!err) {
                            callback(200);
                          } else {
                            callback(500, { Error: "Could not update" });
                          }
                        }
                      );
                    } else {
                      callback(500, {
                        Error: "Could not find the check on the users object"
                      });
                    }
                  } else {
                    callback(500, { Error: "Could not find the user" });
                  }
                });
              } else {
                callback(500, { Error: "Could not delete the check" });
              }
            });
          } else {
            callback(400, { Error: "Invalid token" });
          }
        });
      } else {
        callback(400, { Error: "Check ID does not exist" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Ping handler
handlers.ping = function(data, callback) {
  // Callback a http status code
  callback(200);
};

// Not found handler
handlers.notFound = function(data, callback) {
  callback(404);
};

// Export the module
module.exports = handlers;
