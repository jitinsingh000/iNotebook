const mongoose = require('mongoose');
require('dotenv').config();
const connectToDB = () => {
    try {
        mongoose.connect(process.env.mongoURI);
        console.log("DB Connected");
    } catch (err) {
        console.log("DB Not Connected");
        console.error(err);
    }
}
module.exports = connectToDB;