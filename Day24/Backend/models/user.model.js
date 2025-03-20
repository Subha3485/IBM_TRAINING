const mongoose =require('mongoose');

const userSchema =mongoose.Schema({
    userName:{
        type:String,
        required:true,
        
    }
})

const userModel = mongoose.model("user",userSchema);

module.exports={
    userModel
}