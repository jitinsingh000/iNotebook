const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./db');
connectToDB();
const localhost = '127.0.0.1';
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
    res.send('hello world!!!!!!!!!!');
});

app.listen(PORT, () => {
    console.log(`iNotebook backend listened at http://${localhost}:${PORT}`)
})