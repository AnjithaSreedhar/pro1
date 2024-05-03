const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://anjithasreedhar:anjitha@cluster0.ejoqixr.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.error(err));

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    namef: String,
    rate: String,
    imageUrl: String,
  });
  
  const Food = mongoose.model('Food', foodSchema);
  module.exports = Food;
