$(document).ready(function() {
  $("article.tweet").hover(function() {
    $("article.tweet").toggleClass("tweet-hover");
    $("p.login-name").toggleClass("login-name-hover");
    $("img.icons").toggleClass("icons-hover");
  });
});
