import express from 'express';

const router = express.Router();

router.get('/register', (_req, res) => {
  res.send('Hello world from node server routes')
})

module.exports = router;
