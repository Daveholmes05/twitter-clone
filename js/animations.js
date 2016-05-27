$(document).ready(function() {
	$('.button').hide();

	$('#char-count').hide();

	$('.tweet-compose').click(function() {
		$('textarea').css('height', '5em');

		$('#char-count').show();

		$('.button').show();

		var maxLength = 140;

		$('textarea').on('keyup', function() {
			var length = $(this).val().length;
			length = maxLength - length;

			$('#char-count').text(length);

				if (length <= 10) {
					$('#char-count').css('color', 'red');
				}
				else {
					$('#char-count').css('color', 'black');
				}


				if (length <= 0) {
					$('.button').prop('disabled', true);
				}
				else {
					$('.button').prop('disabled', false);
				}
		});
	});

	$('#tweet-submit').on('click', function() {
		$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/damenleeturks.jpg" /><strong class="fullname">Dave H.</strong><span class="username">@daveh</span><!-- BLACK DIAMOND: Implement the icons for when a tweet is favorited/retweeted in<p class="tweet-text">' + 'this is to test if I get added' + ' </p><!-- STEP 6: The tweet actions below should only show up when you hover over the tweet. Otherwise, they should be hidden. --><!-- HINT: CSS ":hover" pseudo element --><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div><!-- .tweet --><div class="tweet"><div class="content"><img class="avatar" src="img/funwatercat.jpg" /><strong class="fullname">The Onion</strong><span class="username">@theonion</span><p class="tweet-text">“I\'m able to speak confidently about a wide range of subjects, so it’s probably hard for most women to follow.” http://onion.com/1aWfKwf </p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/jennyshen.jpg" /><img src="img/damenleeturks.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div><!-- .tweet --><div class="tweet"><div class="content"><img class="avatar" src="img/jennyshen.jpg" /><strong class="fullname">Harvard Biz Review</strong><span class="username">@HarvardBiz</span><p class="tweet-text">It is possible to work with a loved one without ruining the relationship http://s.hbr.org/15FDIri </p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/vklimenko.jpg" /><img src="img/funwatercat.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>');
	});

});





