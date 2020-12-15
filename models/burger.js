// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//setting up object that we can use to call orm methods
var burger = {
  //burger.all would orm all burgers and do a callback
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    //burger.create creates operation on orm and then does callback on results
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //burger.updates table, then does callback with new values
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  //burger.delete deletes items from table, then returns with updated values
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
