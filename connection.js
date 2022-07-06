const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mongodbuser:9602675351aa@cluster0.hr5tz.mongodb.net/Expense?retryWrites=true&w=majority").then(() => {
    console.log("connected");
  }).catch((e) => {
    console.log(e);
  });
