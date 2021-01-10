const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');
const PORT = process.env.port || 5000;

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

connectDB();

if (process.env === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`server running on ${PORT}`));
