const express = require('express');
const router = express.Router();

// register a new user
router.post('/', (req, res) => {
  res.send('Register User');
});

module.exports = router;
