"use strict";

$(document).ready(function() {
  // let result = 0;

  $("#tweets-container").on('click', "div.heart", function(ev){
    let footer = ev.target.parentElement.parentElement;
    let result = $(footer).children('.counter').text();
    const $counter = $(footer).children('.counter');

    console.log("first before: ", result);
    result ++;
    $counter.text(result);
    console.log("result now: ", result);
  });
});
