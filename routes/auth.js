const express = require('express');
const router = express.Router();

// get logged in user
router.get('/', (req, res) => {
  res.send('get User');
});

router.post('/', (req, res) => {
  res.send('log in');
});

module.exports = router;
