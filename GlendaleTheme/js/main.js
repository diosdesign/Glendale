(function($) {


	// building select menu
	$('<select />').appendTo('#navigation');

	// building an option for select menu
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Menu...'
	}).appendTo('#navigation select');

	$('#navigation ul li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('#navigation select');

	});

	// on clicking on link
	$('#navigation select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});


})(jQuery);