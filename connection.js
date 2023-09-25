const mongoose = require("mongoose")
async function connect(){
    try {
        await mongoose.connect("mongodb+srv://ishita:ishita1234@cluster0.fuavot0.mongodb.net/userdb?retryWrites=true&w=majority");
        console.log('connected')
    } 
    
    catch (error) {
        console.log(error)
        
    }
}
module.exports={connect}