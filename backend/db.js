const mongoose = require('mongoose');
const connectToDB = () => {
    try {
        const mongoURI = 'mongodb://127.0.0.1:27017/inotebook';
        mongoose.connect(mongoURI);
        console.log("DB Connected");
    } catch (err) {
        console.log("DB Not Connected");
        console.error(err);
    }
}
module.exports = connectToDB;