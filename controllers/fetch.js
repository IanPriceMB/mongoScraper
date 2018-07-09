var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return db.Title.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbTitle.length === 0) {
          res.json({
            message: "Aint nothin here"
          });
        }
        else {
          res.json({
            message: "Added " + dbHeadline.length
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
