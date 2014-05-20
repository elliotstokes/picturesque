(function($) {

	//add a tray
	var gui = require('nw.gui');

	/*var tray = new gui.Tray({
		title: 'Tray',
		icon: 'img/icon.png'
	});

	var menu = new gui.Menu();
	menu.append(new gui.MenuItem({
		type: 'checkbox',
		label: 'box1'
	}));
	tray.menu = menu;

	*/
	var menubar = new gui.Menu({
		type: 'menubar'
	});
	menubar.append(new gui.MenuItem({
		label: 'Item A'
	}));

	gui.Window.get().menu = menubar;

	var canvasElement = $('.image-container').get(0),
			context = canvasElement.getContext('2d');

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
				var image = new Image();
				image.onload = function() {
					alert("loaded" + this.width + "," + this.height);
					//make canvas the same size as the image
					canvasElement.height = this.height;
					canvasElement.width = this.width;
					context.drawImage(image, 0, 0);
				}
				image.src = file;


				//$('.image-container').get
			}
		});
	});

})(jQuery);
