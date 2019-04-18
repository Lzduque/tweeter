"use strict";

$(document).ready(function() {

  $(".new-tweet textarea").on('keyup', function(){
    const result = 140 - this.value.length;
    const $counter = $("span.counter");
    $counter.text(result);

    if (result < 0) {
      $counter.addClass("negative");
    } else {
      $counter.removeClass("negative");
    }
  });
});
