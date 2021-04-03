const mongoose = require('mongoose');
require('dotenv').config()

const ConnectDB = () => {
    mongoose.connect("mongodb://localhost:27017/mylib", { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
            if (err) {
                throw err
            }
            console.log("Database connected...");

        })
}
module.exports = ConnectDB;