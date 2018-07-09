var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var titleSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

var Title = mongoose.model("Title", titleSchema);

module.exports = Title;
