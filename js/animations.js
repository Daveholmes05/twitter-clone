$(document).ready(function() {
	$('.button').hide();

	$('#char-count').hide();

	$('.tweet-actions, .reply').hide();

	$('.tweet').on('mouseenter', function() {
		$('.tweet-actions', this).show();
	});


	$('.tweet').on('click', function() {
		$('.reply').show();
	})


	$('.tweet').on('mouseleave', function() {
		$('.tweet-actions', this).hide();
	});

	$('.tweet-compose').click(function() {
		$('.tweet-compose').css('height', '5em');

		$('#char-count').show();

		$('.button').show();
	});



	$('textarea').on('keyup', function() {
		var maxLength = 140;
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



	$('#tweet-submit').on('click', function() {
		$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="https://scontent-dfw1-1.xx.fbcdn.net/v/t1.0-9/12289619_10207276670688877_3546065691717034191_n.jpg?oh=4494cbff9c59127774444a7bcbc812f4&oe=57CF5C3B" /><strong class="fullname">Dave H </strong><span class="username">@daveh</span><p class="tweet-text">' + $('.tweet-compose').val() + ' </p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="https://scontent-dfw1-1.xx.fbcdn.net/v/t1.0-9/12289619_10207276670688877_3546065691717034191_n.jpg?oh=4494cbff9c59127774444a7bcbc812f4&oe=57CF5C3B" /><img src="img/vklimenko.jpg" /></div></div><div class="time"></div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div><div class="tweet"><div class="content"><img class="avatar" src="img/funwatercat.jpg" /><strong class="fullname">The Onion</strong><span class="username">@theonion</span><p class="tweet-text">“I\'m able to speak confidently about a wide range of subjects, so it’s probably hard for most women to follow.” http://onion.com/1aWfKwf </p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/jennyshen.jpg" /><img src="img/damenleeturks.jpg" /></div></div><div class="time"></div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div><div class="tweet"><div class="content"><img class="avatar" src="img/jennyshen.jpg" /><strong class="fullname">Harvard Biz Review</strong><span class="username">@HarvardBiz</span><p class="tweet-text">It is possible to work with a loved one without ruining the relationship http://s.hbr.org/15FDIri </p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/vklimenko.jpg" /><img src="img/funwatercat.jpg" /></div></div><div class="time"></div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>');
	});



});





