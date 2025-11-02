const mongoose = require("mongoose");
require("dotenv").config();

const Database = async () => {
   // mongodb://localhost:27017/loginData
   //  mongoose.connect("mongodb+srv://aryansingh787769:aryansingh7877@cluster0.uun7u.mongodb.net/loginData")
   // mongoose.connect("mongodb://localhost:27017/farmease_data_base")
   // mongoose.connect("mongodb+srv://Gaurav:Gaurav87@farmingproject.kiub9.mongodb.net/")
   // mongoose.connect("mongodb+srv://Gaurav:Gaurav87@farmingproject.kiub9.mongodb.net/loginAuth?retryWrites=true&w=majority&appName=FarmingProject")

   mongoose.connect(process.env.MONGO_URL)
      .then(() => console.log("database connected succesfully"))
      .catch((error) => console.log(error));
}


Database();
module.exports = mongoose;
