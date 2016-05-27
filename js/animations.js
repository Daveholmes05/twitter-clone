$(document).ready(function() {
	$('.button').hide();

	$('#char-count').hide();

	$('.tweet-compose').focus(function() {
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




});