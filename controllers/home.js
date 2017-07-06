const models = require('../models')
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
  console.log('GET /sharedWithUser');
  models.User.where({shared_with_me: shared_with_me}).fetch()
  .then(sharedWithMe => {
    if (sharedWithMe.length > 0) {
      next();
    } else {
      res.render('home', {
        title: 'Home'
      });
    }
  });
}
