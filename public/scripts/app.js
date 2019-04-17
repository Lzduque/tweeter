/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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
        </article>`

return $(newArticle);
};

renderTweets(data);