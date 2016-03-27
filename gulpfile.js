var gulp = require('gulp'),
	connect = require('gulp-connect'),
	reload = require('gulp-livereload');

gulp.task('connect', function(){
	connect.server({
		root: 'src',
		reload: true,
		host: '192.168.1.105',
		port: 8899
	});
});

gulp.task('default', ['connect']);