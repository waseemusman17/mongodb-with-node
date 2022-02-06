const mongoose = require("mongoose");

// DataBase Connection
mongoose.connect("mongodb://localhost:27017/testApp",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    } 
)
.then( () => console.log("Connected Successful..."))
.catch( (err) => console.log(err));

// Collection Scheme/Structure
const testScheme = new mongoose.Schema({
    name: String,
    type: String,
    active: Boolean,
    date:{
        type: Date,
        default: Date.now
    }
})


// Colllection Creation
const Test = new mongoose.model("Test", testScheme );


// Create document insert
const createDocument = async () => {
    try{
        const testData = new Test({
            name: "Vue Js",
            type: "Front End",
            active: true
        })
        
        const testResult = await testData.save();
        console.log(testResult);
    }catch(err){
        console.log(err);
    }

    
}

createDocument();