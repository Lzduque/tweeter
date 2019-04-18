"use strict";

$(document).ready(function() {
  let result = 0;

  $("#tweets-container").on('click', "div#heart", function(ev){
    const $counter = $("article.tweet footer span.counter");
    result ++;
    $counter.text(result);
  });
});
