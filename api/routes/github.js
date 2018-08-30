const github = require('octonode');
const {Router} = require('express');

const router = Router();
const client = github.client(process.env.GITHUB_TOKEN);

const ghme = client.me();

router.get('/github/notifications', (req, res) => {
  ghme.notifications({}, (err, data) => {
    res.json(data);
  });
});

router.get('/github/issue', async (req, res) => {
  if (req.query.repo === undefined || req.query.id === undefined) {
    res.json({});
    return;
  }

  const ghissue = client.issue(
    req.query.repo,
    req.query.id,
  );

  ghissue.info((err, data) => {
    res.json(data);
  });
});

module.exports = router;
