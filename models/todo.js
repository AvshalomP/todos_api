let mongoose = require("mongoose");

//define Schema
let todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

//compiling into a model
let Todo = mongoose.model('Todo', todoSchema);

//export Todo model
module.exports = Todo;

