const express = require("express");
const route = require("./server/route/route");
const mongoose = require("mongoose");
 const app = express();

 app.use(express.json());

mongoose.set('strictQuery', false)
 mongoose 
  .connect(
    "mongodb+srv://Anshika:anshika2003@cluster0.ajpkc5u.mongodb.net/Anshika10-DB",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message))

app.use("/", route);


app.listen(process.env.PORT || 3000, function () {
  console.log("listening at " + (process.env.PORT || 3000))})