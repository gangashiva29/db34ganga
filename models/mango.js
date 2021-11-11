const mongoose = require("mongoose") 
const mangoSchema = mongoose.Schema({ 
 Brand: String, 
 size: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Mango", 
mangoSchema)