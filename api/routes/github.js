import Github from 'github-api';
const { Router } = require('express');

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/github/notifications', function (req, res, next) {
  res.json(users)
})

module.exports = router
