const express = require("express");
const http = require("http");
const fs = require("fs");
require("./connection");

// const DB ='mongodb+srv://mongodbuser:9602675361aa@cluster0.hr5tz.mongodb.net/?retryWrites=true&w=majority'

const  Expense = require("./Expensemodel");
const app = express();
const port = process.env.PORT || 8000;

app.get("/post" , async(req,res)=>{
    try{
      const ExpenseData = await  Expense.find();
      res.send(ExpenseData);
    }catch(e){
      res.send(e);
    }
})

app.use(express.json());

app.post("/post", (req, res) => {
    console.log(req.body);
const Expense1 = new Expense(req.body)

Expense1.save().then(()=>{
    res.send(Expense1);
}).catch((err)=>{
    res.send(err);
})
res.setHeader( 'Content-Type' , 'application/json');
});

app.listen(port, () => {
  console.log("hi");
});
