let db = require("../models");

/* Routes Helpers implementations */
//INDEX - show all todos in db
exports.getTodos = (req,res) => {
   //retrive all todos from db
   db.Todo.find() //since we use Promise, we don't need to pass a callback to find() 
   .then(function(todos){
       res.json(todos);
   })
   .catch(function(err){
       res.send(err);
   });
};

//CREATE - add new todo to our db
exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
    .then((newTodo) => {
        res.status(201).json(newTodo); //we add .status(201) to defer that the returned http status is 201=create and not 200=ok
    })
    .catch((err) => {
        res.send(err);
    });
};

//SHOW - show specific todo
exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then((foundTodo) => {
        res.json(foundTodo);
    })
    .catch((err) => {
        res.send(err);
    });
};

//UPDATE - update specific todo
exports.updateTodo = (req, res) => {
    //find todo
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})   //by default the foundTodo that .findOneAndUpdate will
    .then((foundTodo) => {                                                  //return in the un-updated version and so to get the
        res.json(foundTodo);                                                    //new one, we passed the 3rd argument {new: true}
    })
    .catch((err) => {
        res.send(err);
    });
};

//DESTROY - delete specific todo 
exports.deleteTodo = (req, res) => {
    db.Todo.findByIdAndRemove(req.params.todoId)
    .then(() => {
        res.json({message: "Todo removed successfully"});
    })
    .catch((err) => {
        res.send(err);
    });
};

//export helpers methods
module.exports = exports;
