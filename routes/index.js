var express = require('express');
var router = express.Router();

/*
/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;

module.exports = {
  getHomePage: (req, res) => {
    let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players

    // execute query
    db.query(query, (err, result) => {
      if (err) {
        res.redirect('/');
      }
      res.render('index.ejs', {
        title: 'Welcome to Socka | View Players'
        ,players: result
      });
    });
  },
};