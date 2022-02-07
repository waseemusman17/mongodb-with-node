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


// Collection Creation
const Test = new mongoose.model("Test", testScheme );


// Create document or insert
const createDocument = async () => {
    try{
        const testData = new Test({
            name: "React Js",
            type: "Front End",
            active: true
        })
        
        const testResult = await testData.save();
        console.log(testResult);
    }catch(err){
        console.log(err);
    }

    
}

// createDocument();


// Show Result
const getTest = async () => {
    try{
        const result = await Test.find()
        .countDocuments();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

getTest();


// Update Result
const updateDocument = async (_id) => {
    try{
        const newresult = await Test.updateOne({_id},{
            $set:{name:"React"}
        });
        console.log(newresult);
    }catch(err){
        console.log(err);
    }
    
}

updateDocument('6200b0f8efa1d8767c043572');