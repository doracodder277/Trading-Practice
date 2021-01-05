const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true}).then(() => {
    console.log("Connected to DB")
})

module.exports = {mongoose}
