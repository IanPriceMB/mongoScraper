$(document).ready(function() {
  var articleContainer = $(".article-container");
  $(document).on("click", ".scrape-new", handleArticleScrape);

  initPage();

  function initPage() {
    articleContainer.empty();
    $.get("/api/titles").then(function(data) {
      if (data && data.length) {
        renderArticles(data);
      }
      else {
        renderEmpty();
      }
    });
  }

  function renderArticles(articles) {
    var articleCards = [];
    for (var i = 0; i < articles.length; i++) {
      articleCards.push(createCard(articles[i]));
    }
    articleContainer.append(articleCards);
  }

  function createCard(article) {
    var card = $(
      [
        "<div class='card'>",
        "<div class='card-header'>",
        "<h3>",
        "<a class='article-link' target='_blank' href='" + article.url + "'>",
        article.headline,
        "</a>",
        "</h3>",
        "</div>",
        "</div>"
      ].join("")
    );
    card.data("_id", article._id);
    return card;
  }

  function renderEmpty() {
    var emptyAlert = $(
      [
        "<div class='alert alert-warning text-center'>",
        "<h4>Uh Oh. Looks like we don't have any new articles.</h4>",
        "</div>",
        "<div class='card'>",
        "<div class='card-header text-center'>",
        "<h3>What Would You Like To Do?</h3>",
        "</div>",
        "<div class='card-body text-center'>",
        "<h4><a class='scrape-new'>Try Scraping New Articles</a></h4>",
        "</div>",
        "</div>"
      ].join("")
    );
    articleContainer.append(emptyAlert);
  }

  function handleArticleScrape() {
    $.get("/api/fetch").then(function(data) {
      initPage();
      bootbox.alert("<h3 class='text-center m-top-80'>" + data.message + "<h3>");
    });
  }
});
