const mongoose = require("mongoose");
// const validator = require("validator");

const ExpenseSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },

    amount :{
        type : Number,
        required: true
    },

    date :{
        type : Date,
        required : true
    }
})


const Expense = new mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;