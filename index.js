let express     = require("express"),
    app         = express(),
    port        = process.env.PORT || 3000,
    bodyParser  = require("body-parser");

/* Body-parser config */ // - let us parse the response data from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
/* Routes */
let todosRoutes = require("./routes/todos");
app.use('/api/todos', todosRoutes);

//INDEX
app.get("/", function(req, res){
    res.send("Hello from ROOT route")
});

//Starting
app.listen(port, function(){
   console.log("App is running on port "+process.env.PORT);
});

