var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {

  return axios.get("https://www.gosugamers.net/overwatch").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log($)
    var articles = [];

    $(".headline").each(function(i, element) {

      var title = $(this)
        .children(".details")
        .children("h3")
        .text()
        .trim();

      var url = $(this)
        .children("a")
        .attr("href");

        var newpost = {
          headline: title,
          url: url
        };

        articles.push(newpost);
    });
    return articles;
  });
};

module.exports = scrape;
