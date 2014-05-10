var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');

/*
 * Compile .less files to CSS
 */
gulp.task('less', function() {
  gulp.src('/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

/*
 * Compile .scss files to CSS
 */
gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

/*
 * Combine all .js files into a single app.js file, 
 * and minify at the same time.
 */
gulp.task('scripts', function() {
  gulp.src('./src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

/*
 * Create static versions for all file, mainly for cahce busting purposes
 */
gulp.task('rev', ['less', 'sass', 'scripts'], function() {
  gulp.src(['dist/**/*.css', 'dist/**/*.js'])
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});

/*
 * Watch all .scss, .less, and .js files, and run tasks when changes occur
 */
gulp.task('watch', ['less', 'sass', 'scripts'], function() {
  gulp.watch('./less/**/*.less', ['less']);
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.js', ['scripts']);
});
