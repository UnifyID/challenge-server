const path = require('path');
console.log(path.join(__dirname, '../models'));
const models = require('../models/User');
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.getSharedWithUser = (req, res, next) => {
  //Attempt to get all credentials that have been shared with the user
  models.User.where({shared_with_me: shared_with_me}).fetch()
  .then(sharedWithMe => {
    //if the resulting object has a length greater than 0, call the next function
    if (sharedWithMe.length > 0) {
      next();
    } else {
      //otherwise, send the user back to their home page
      res.render('home', {
        title: 'Home'
      });
    }
  });
}
