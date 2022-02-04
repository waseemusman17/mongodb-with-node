const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/testApp",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    } 
)
.then( () => console.log("Connected Successful..."))
.catch( (err) => console.log(err));