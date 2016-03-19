var express = require('express');
var router = express.Router();

var oUrls = {
  myHangout : 'https://hangouts.google.com/hangouts/_/g65qlb25ond2lblf2zalmeaazae',
  GamingHangout : 'https://plus.google.com/hangouts/_/aoo7jqtiarhyhan3xppypdjlxqe',
  BastsHangout: 'https://hangouts.google.com/hangouts/_/uo7yxhttfvdc3meotqv57w6myye',
  ZaksHangout: 'https://plus.google.com/hangouts/_/acpyjch2yvdhbj3v5rjn2ctskue'
};

router.get('/:name', function(req, res, next) {
  console.log('redirecting to ',oUrls[req.params.name],'name',req.params.name);
  res.redirect(oUrls[req.params.name]);
});

module.exports = router;
