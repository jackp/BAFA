Package.describe({
	summary: "BAFA - latest versions of Bootstrap, Animate.css, and Font-Awesome"
});

Package.on_use(function(api){
	api.use('jquery', 'client');
	api.add_files([
		'lib/bootstrap-2.2.2/bootstrap.min.css',
		'lib/bootstrap-2.2.2/bootstrap.min.js',
		'lib/font-awesome-3.0/font/fontawesome-webfont.eot',
		'lib/font-awesome-3.0/font/fontawesome-webfont.otf',
		'lib/font-awesome-3.0/font/fontawesome-webfont.ttf',
		'lib/font-awesome-3.0/font/fontawesome-webfont.woff',
		'lib/font-awesome-3.0/font-awesome.css',
		'lib/animate.css/animate.min.css'
	], 'client');
});