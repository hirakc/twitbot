var Twit = require('twit');
var Request = require('request');
var fs = require('fs');

var bot = new Twit({
  consumer_key: process.env.KICHIMICHI_CONSUMER_KEY,
  consumer_secret: process.env.KICHIMICHI_CONSUMER_SECRET,
  access_token: process.env.KICHIMICHI_ACCESS_TOKEN,
  access_token_secret: process.env.KICHIMICHI_ACCESS_TOKEN_SECRET,
  tiomeout_ms: 60*1000
});

//Status update / tweet
// bot.post('statuses/update', {status: 'hello world from bot!'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data.text + 'was tweeted.');
//   }
// });

/**
 * Work with users
 */
//My Followers
// bot.get('followers/ids', {screen_name: 'hirakme'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// });


// bot.get('followers/list', {screen_name: 'echinmay'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// });
//


// bot.get('followers/list', {screen_name: 'hirakme'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.users.forEach(function(user) {
//       console.log(user.screen_name);
//     });
//   }
// });

//Follow my follower
// bot.post('friendships/create', {screen_name: 'echinmay'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// });

//Who I follow
// bot.get('friends/ids', {screen_name: 'hirakme'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// });

// bot.get('friends/list', {screen_name: 'hirakme'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// });

//Relationship (use to followback)
// bot.get('friendships/lookup', {screen_name: 'irrfank'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// });

/**
 * Interact with tweets
 */
//Direct messages (rule: never DM someone who is not following you)
// bot.post('direct_messages/new', {screen_name: 'echinmay', text: 'hello from my bot!'}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data);
//   }
// });

//Statuses / timeline
// bot.get('statuses/home_timeline', {count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.forEach(function(d) {
//       console.log(d);
//       console.log('\n');
//     });
//   }
// });

function getBotTimeline() {
  bot.get('statuses/home_timeline', {count: 5}, function (err, data, response) {
    if(err) {
      console.log(err);
    }else {
      data.forEach(function(d) {
        console.log(d.text);
        console.log(d.user.screen_name);
        console.log(d.id_str);
        console.log('\n');
      });
    }
  });
}

//retweet
// bot.post('statuses/retweet/:id', {id: '860683982257528832'}, function(err, data, response) {
//     if(err) {
//       console.log(err);
//     }else {
//       console.log(data.text + 'was retweeted');
//     }
// });

//unretweet
// bot.post('statuses/unretweet/:id', {id: '860683982257528832'}, function(err, data, response) {
//     if(err) {
//       console.log(err);
//     }else {
//       console.log(data.text + 'was unretweeted');
//     }
// });


//like a tweet
// bot.post('favorites/create', {id: '861085443462397952'}, function(err, data, response) {
//     if(err) {
//       console.log(err);
//     }else {
//       console.log(data.text + ' was liked');
//     }
// });

//unlike a tweet
// bot.post('favorites/destroy', {id: '861085443462397952'}, function(err, data, response) {
//     if(err) {
//       console.log(err);
//     }else {
//       console.log(data.text + ' was unliked');
//     }
// });

//reply to a tweet
// bot.post('statuses/update', {status: '@buffer wow!', in_reply_to_status_id: '861085443462397952'}, function(err, data, response) {
//     if(err) {
//       console.log(err);
//     }else {
//       console.log(data);
//     }
// });

//delete tweet
// bot.post('statuses/destroy/:id', {id: '861089144621158402'}, function(err, data, response) {
//     if(err) {
//       console.log(err);
//     }else {
//       console.log(data.text + ' was deleted');
//     }
// });
//getBotTimeline();


/**
 * Search API
 * returns for relevance and not completeness
 */
 // bot.get('search/tweets', {q: 'balloons', count: 5}, function (err, data, response) {
 //   if(err) {
 //     console.log(err);
 //   }else {
 //     data.statuses.forEach(function(s) {
 //       console.log(s.text);
 //       console.log(s.user.screen_name);
 //       console.log('\n');
 //     });
 //   }
 // });

//search exact phrase
 // bot.get('search/tweets', {q: '"blue fish"', count: 5}, function (err, data, response) {
 //   if(err) {
 //     console.log(err);
 //   }else {
 //     data.statuses.forEach(function(s) {
 //       console.log(s.text);
 //       console.log(s.user.screen_name);
 //       console.log('\n');
 //     });
 //   }
 // });

 //Search tweets containing one of two words
 // bot.get('search/tweets', {q: 'red OR blue', count: 5}, function (err, data, response) {
 //   if(err) {
 //     console.log(err);
 //   }else {
 //     data.statuses.forEach(function(s) {
 //       console.log(s.text);
 //       console.log(s.user.screen_name);
 //       console.log('\n');
 //     });
 //   }
 // });

//Look for a word that appears without another word
 // bot.get('search/tweets', {q: 'happy -birthday -anniversary', count: 5}, function (err, data, response) {
 //   if(err) {
 //     console.log(err);
 //   }else {
 //     data.statuses.forEach(function(s) {
 //       console.log(s.text);
 //       console.log(s.user.screen_name);
 //       console.log('\n');
 //     });
 //   }
 // });

//Look for emoticons
// bot.get('search/tweets', {q: 'happy :-)', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//Look for hashtags
// bot.get('search/tweets', {q: '#biriyani', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//Look for tweets to a user
// bot.get('search/tweets', {q: 'to:@irrfank', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });


//Look for tweets from a user
// bot.get('search/tweets', {q: 'from:@hirakme', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//Use filters: show only safe tweets
// bot.get('search/tweets', {q: 'dance filter:safe', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//Use filters: show only media
// bot.get('search/tweets', {q: 'dance filter:media', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//Use filters: show only vines
// bot.get('search/tweets', {q: 'dance filter:vine', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//Use filters: show only images
// bot.get('search/tweets', {q: 'dance filter:images', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//Use filters: show only links
// bot.get('search/tweets', {q: 'dance filter:links', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//Use filters: show only links from a specific website
// bot.get('search/tweets', {q: 'dance url:amazon', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

//search for questions
// bot.get('search/tweets', {q: 'dance ?', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });


//add a date to your query
// bot.get('search/tweets', {q: 'dance since:2017-01-01', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });


//additional parameters
// bot.get('search/tweets', {q: 'dance since:2017-01-01', result_type: 'recent', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });


//additional parameters
// bot.get('search/tweets', {q: 'dance since:2017-01-01', result_type: 'popular', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });

// bot.get('search/tweets', {q: '#TMC', geocode: '22.521528,88.3435758,5mi', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });


// bot.get('search/tweets', {q: '#ROSEVALLEY', lang: 'bn', count: 5}, function (err, data, response) {
//   if(err) {
//     console.log(err);
//   }else {
//     data.statuses.forEach(function(s) {
//       console.log(s.text);
//       console.log(s.user.screen_name);
//       console.log('\n');
//     });
//   }
// });


/**
 * Stream API
 */

// var stream = bot.stream('statuses/sample');
//
// stream.on('tweet', function (tweet) {
//   console.log(tweet.text + '\n');
// });


//filter stream by keyword
// var stream = bot.stream('statuses/filter', {track: 'bots'});
//
// stream.on('tweet', function (tweet) {
//   console.log(tweet.text + '\n');
// });

//filter stream by location
// var stream = bot.stream('statuses/filter', {locations: '-74,40,-71,41'});
//
// stream.on('tweet', function (tweet) {
//   console.log(tweet.text + '\n');
// });

//filter stream by following an ID
// var stream = bot.stream('statuses/filter', {follow: '15482127'});
//
// stream.on('tweet', function (tweet) {
//   console.log(tweet.text + '\n');
// });


//Tweet media files
