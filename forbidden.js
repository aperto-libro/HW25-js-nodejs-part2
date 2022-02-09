var express = require('express');
var router = express.Router();

// Information about inter in module
router.use(function forbidden(req, res, next) {
  console.log('Module forbidden.js :');
  next();
});

// define the home page forbidden
router.use(function (req, res, next) {
  if (req.originalUrl == '/forbidden') {
    res.end('Forbidden page');
  }
  next();
});
// define the Access approved or Access denied
router.use(function (req, res) {
  if (req.originalUrl == '/forbidden?secret=true') {
    res.end('Access approved');
  } else {
    res.end('Access denied');
  }
});

module.exports = router;
