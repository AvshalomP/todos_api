let express = require("express");
let router = express.Router();
let db = require("../models");  //when refering just to the models folder, it will automatically obtain the index.js and then 
                                //through the export of todo.js, we will obtain the relevant todos db
let helpers = require("../helpers/todos");

/* API Routes */
router.route('/')
    .get(helpers.getTodos)      //INDEX - show all todos in db
    .post(helpers.createTodo);  //CREATE - add new todo to our db

router.route('/:todoId')
    .get(helpers.getTodo)           //SHOW - show specific todo
    .put(helpers.updateTodo)        //UPDATE - update specific todo
    .delete(helpers.deleteTodo);    //DESTROY - delete specific todo   


//export routes
module.exports = router;