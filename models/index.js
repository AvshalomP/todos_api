let mongoose    = require("mongoose");

/* setting up DB */
mongoose.set('debug', true); //so we can see logs whenever we debug problems
mongoose.connect("mongodb://localhost/todos_api"); //connect to our DB server (./mongod) and 'todos_api' will be our db name

mongoose.Promise = Promise; //this is allow us to use the Promise syntex - like using .then concat to some method of mongoose

//this is let us obtain the models when we require the models folder 
module.exports.Todo = require("./todo"); 
