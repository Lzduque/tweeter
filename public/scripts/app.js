"use strict";

const data = [];

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    var $tweet = createTweetElement(tweet);
    $(document).ready(function() {
      $('#tweets-container').prepend($tweet);
    });
  });
}


function createTweetElement(tweetData) {

  const name = tweetData.user.name;
  const avatarSmall = tweetData.user.avatars.small;
  const handle = tweetData.user.handle;
  const tweetContent = tweetData.content.text;
  const numLikes = tweetData.likes;
  console.log('tweetData.likes',tweetData.likes);
  const createdAt = tweetData.created_at;
  const now = new Date();
  const diffTime = Math.abs(createdAt - now.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const newArticle = `<article class="tweet">
          <header>
            <img src="${avatarSmall}" alt="Avatar" class="avatar">
            <h2>${name}</h2>
            <p class="login-name">${handle}</p>
          </header>
          <p class="tweet-text">${escape(tweetContent)}</p>
          <footer>
            <p class="days-posted">${diffDays} days ago</p>
            <span class="counter">${numLikes}</span>
            <div class="heart"><img src="/images/heart.jpg" alt="Heart Icon" class="icons"></div>
            <img src="/images/arrow.png" alt="Retweet Arrow Icon" class="icons">
            <img src="/images/flag.png" alt="Flag Icon" class="icons">
          </footer>
        </article>`;

return $(newArticle);
}


const handleSubmit = (event) => {
  event.preventDefault();

  if ($('section.new-tweet form p.error')) {
    $('p.error').empty().toggleClass('error right');
  }

  if ($('section.new-tweet form textarea').val() === "") {
    $('p.right').append('No tweet!').toggleClass('right error');
    return;
  }

  if ($('section.new-tweet form textarea').val().length > 140) {
    $('p.right').append('Tweet too long!').toggleClass('right error');
    return;
  }

  $.ajax({
    type: 'POST',
    url: '/tweets/',
    data : $('section.new-tweet form textarea').text('section.new-tweet form textarea').serialize(),
    complete: function() {
      console.log('request complete');
      loadTweets();
    }
  });
};


const loadTweets = function() {
  $.get('/tweets', function(data) {
    $('section.new-tweet form textarea').text('section.new-tweet form textarea').val('');
    renderTweets(data);
  });
};


$(document).ready(function() {

  loadTweets();

  $('.new-tweet form').on('submit', handleSubmit);

  $("#nav-bar button").click(function() {
    $(".new-tweet").slideToggle();
    $("section.new-tweet form textarea").focus();
  });
});
