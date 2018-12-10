var gulp=require('gulp');

var server=require('gulp-webserver');

var scss=require('gulp-sass');

 gulp.task('scss',function(){
	return gulp.src('/src/scss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('/src/css'))
})

gulp.task('server',function(){
	return gulp.src('src')
	.pipe(server({
		port:9090
	}))
})

gulp.task('watch',function(){
	return gulp.watch('src/scss/*.scss',gulp.series('scss'))
})

gulp.task('defult',function(){
	return gulp.watch('src',gulp.series('watch','server'))
})