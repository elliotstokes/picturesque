(function($) {

	function chooseFile(name, callback) {
		var chooser = $(name);
		chooser.change(function(evt) {
			callback($(this).val());
		});

		chooser.trigger('click');
	}



	$('#btn-load').click(function() {
		chooseFile('#fileDialog', function(file) {
			if (file) {
				$('body').append($('<img/>').attr('src', file));
			}
		});
	});

})(jQuery);