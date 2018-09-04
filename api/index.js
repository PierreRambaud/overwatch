const express = require('express');

// Create express instnace
const app = express();

// Require API routes
const github = require('./routes/github');

// Import API Routes
app.use(github);

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app,
};
