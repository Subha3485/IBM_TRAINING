const mongoose=require("mongoose");
require('dotenv').config()

const connectDB = async () => {
    //await mongoose.connect("mongodb://127.0.0.1:27017/IBM1");
    await mongoose.connect(process.env.MONGO_URL);
};


module.exports={
    connectDB
}