var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


//Server
gulp.task('server', ['sass'], function(){
	browserSync.init({
		server:"./app/"
	});

	gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Sass
gulp.task('sass', function(){
	return gulp.src("app/scss/*.scss")
									.pipe(sass())
									.pipe(gulp.dest("app/css"))
									.pipe(browserSync.stream());
});

// Start gulp
gulp.task('default', ['server']);
