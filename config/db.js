const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB');
  } catch (error) {
    console.error('error while connecting', error);
    process.exit(1);
  }
};

module.exports = connectDB;
