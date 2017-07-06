const models = require('../models');
const db = require('../models/index');
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
  models.User.where({shared_with_me}).fetch()
  .then(user => {
    //if the resulting object has a length greater than 0, render the 'sharedWithMe' page
    if (user[shared_with_me].length > 0) {
        res.render('sharedWithMe', {
          title: 'Shared with me'
        });
    } else {
      //otherwise, send the user back to their home page
      res.render('home', {
        title: 'Home'
      });
    }
  });
}
