const express = require('express');
const router = express.Router();

// get contacts
router.get('/', (req, res) => {
  res.send('get contacts');
});

// add contacts
router.post('/', (req, res) => {
  res.send('add contact');
});

// get contacts
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// get contacts
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});
module.exports = router;
