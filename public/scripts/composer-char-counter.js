$(document).ready(function() {

  $(".new-tweet textarea").keyup(function(){
    const result = 140 - this.value.length;

    // const $counter = $(this).siblings("span.counter"); --> like that or like what is actually done here!
    const $counter = $("span.counter");
    $counter.text(result);

    if (result < 0) {
      $counter.addClass("negative");
    } else {
      $counter.removeClass("negative");
    }
  });
});

