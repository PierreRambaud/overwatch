const octokit = require('@octokit/rest')();
const {Router} = require('express');

const router = Router();
octokit.authenticate({
  type: 'oauth',
  token: process.env.GITHUB_TOKEN,
});

router.get('/github/notifications', async (req, res) => {
  const {data} = await octokit.activity.getNotifications();
  res.json(data);
});

router.get('/github/issue', async (req, res) => {
  if (req.query.repo === undefined
      || req.query.owner === undefined
      || req.query.id === undefined
  ) {
    res.json({});
    return;
  }

  const {data} = await octokit.issues.get({
    owner: req.query.owner,
    repo: req.query.repo,
    number: req.query.id,
  });
  res.json(data);
});

router.get('/github/pull', async (req, res) => {
  if (req.query.repo === undefined
      || req.query.owner === undefined
      || req.query.id === undefined
  ) {
    res.json({});
    return;
  }

  const {data} = await octokit.pullRequests.get({
    owner: req.query.owner,
    repo: req.query.repo,
    number: req.query.id,
  });
  res.json(data);
});

router.get('/github/issues', async (req, res) => {
  const {data} = await octokit.search.issues({
    q: req.query.q,
    sort: req.query.sort,
    order: req.query.order,
    per_page: req.query.per_page,
    page: req.query.page,
  });
  res.json(data);
});

module.exports = router;
