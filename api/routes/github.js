/* const {Github} = require('github-api'); */
const {Router} = require('express');

const router = Router();

/* GET users listing. */
router.get('/github/notifications', (req, res) => {
  res.json({});
});

module.exports = router;
