var express = require('express');
var router = express.Router();

var oUrls = {
  MarksHangout : 'https://hangouts.google.com/hangouts/_/g65qlb25ond2lblf2zalmeaazae',
  GamingHangout : 'https://plus.google.com/hangouts/_/aoo7jqtiarhyhan3xppypdjlxqe',
  BastsHangout: 'https://hangouts.google.com/hangouts/_/uo7yxhttfvdc3meotqv57w6myye',
  ZaksHangout: 'https://plus.google.com/hangouts/_/acpyjch2yvdhbj3v5rjn2ctskue'
};

router.get('/:name', function(req, res, next) {
  var aUrl = oUrls[req.params.name];
  if (aUrl !== undefined && aUrl !== null) {
    res.redirect(oUrls[req.params.name]);  
  }
  else {
    res.status(404).send('nothing');
  }
  
});

module.exports = router;
