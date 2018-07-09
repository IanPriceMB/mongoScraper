var db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Title
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbTitle) {
        res.json(dbTitle);
      });
  },
  delete: function(req, res) {
    db.Title.remove({ _id: req.params.id }).then(function(dbTitle) {
      res.json(dbTitle);
    });
  },
  update: function(req, res) {
    db.Title.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbTitle) {
      res.json(dbTitle);
    });
  }
};
