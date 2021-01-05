const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.port || 5000;

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => res.json({ msg: 'Hello world' }));

app.listen(PORT, () => console.log(`server running on ${PORT}`));
