let express = require("express");
let router = express.Router();
let db = require("../models");  //when refering just to the models folder, it will automatically obtain the index.js and then 
                                //through the export of todo.js, we will obtain the relevant todos db

//INDEX - show all todos in db
router.get('/', function(req,res){
   //retrive all todos from db
   db.Todo.find() //since we use Promise, we don't need to pass a callback to find() 
   .then(function(todos){
       res.json(todos);
   })
   .catch(function(err){
       res.send(err);
   });
});

//CREATE - add new todo to our db
router.post('/', function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo); //we add .status(201) to defer that the returned http status is 201=create and not 200=ok
    })
    .catch(function(err){
        res.send(err);
    })
});

//SHOW - show specif todo
router.get('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
});

//UPDATE - update specific todo
router.put('/:todoId', function(req, res){
    //find todo
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})   //by default the foundTodo that .findOneAndUpdate will
    .then(function(foundTodo){                                                  //return in the un-updated version and so to get the
        res.json(foundTodo);                                                    //new one, we passed the 3rd argument {new: true}
    })
    .catch(function(err){
        res.send(err);
    });
});

//DESTROY - delete specific todo
router.delete('/:todoId', function(req, res){
    db.Todo.findOneAndDelete(req.params.todoId)
    .then(function(){
        res.json({message: "Todo removed successfully"});
    })
    .catch(function(err){
        res.send(err);
    });
});

//export router model
module.exports = router;