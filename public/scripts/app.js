/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [];

function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  tweets.forEach(function(tweet) {
    var $tweet = createTweetElement(tweet);
    $(document).ready(function() {
      $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    });
  });
};

createTweetElement = function(tweetData) {

  const name = tweetData.user.name;
  const avatarSmall = tweetData.user.avatars.small;
  const avatarReg = tweetData.user.avatars.regular;
  const avatarLarge = tweetData.user.avatars.large;
  const handle = tweetData.user.handle;
  const tweetContent = tweetData.content.text;
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
          <p class="tweet-text">${tweetContent}</p>
          <footer>
            <p class="days-posted">${diffDays} days ago</p>
            <img src="/images/heart.jpg" alt="Heart Icon" class="icons">
            <img src="/images/arrow.png" alt="Retweet Arrow Icon" class="icons">
            <img src="/images/flag.png" alt="Flag Icon" class="icons">
          </footer>
        </article>`;

return $(newArticle);
};

renderTweets(data);


const handleSubmit = (event) => {
  event.preventDefault();

  if ($('section.new-tweet form textarea').val() === "") {
    return alert('No tweet!');
  }

  if ($('section.new-tweet form textarea').val().length > 140) {
    return alert('Tweet to long!');
  }

  $.ajax({
    type: 'POST',
    url: '/tweets/',
    data : $('section.new-tweet form textarea').serialize(),
    complete: function() {
      console.log('request complete');
    }
  });
};


$('.new-tweet form').on('submit', handleSubmit);


const loadTweets = function() {
  $.get('/tweets', function(data) {
  renderTweets(data);
});
};

loadTweets();
