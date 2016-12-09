'use strict';


/**
 * Plugins
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'), 
    del = require('del'); 

/**
 * Builds
 */

gulp.task('scss', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 15 version']}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/css'));
});

gulp.task('js', function () {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/page-scroll-to-id/jquery.malihu.PageScroll2id.js'])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('src/js'));
});

gulp.task('clear', function() {
  return del.sync('dist');
});

gulp.task('build', ['scss', 'js', 'clear'], function () {

  var buildFonts = gulp.src([
    'src/fonts/**/*',
    'src/fonts/*'
    ])
  .pipe(gulp.dest('dist/fonts'));

  var buildCss = gulp.src('src/css/*.css')
  .pipe(gulp.dest('dist/css'));

  var buildJs = gulp.src('src/js/*.js')
  .pipe(gulp.dest('dist/js'));

  var buildImg = gulp.src([
    'src/img/*.jpg',
    'src/img/*.png'
    ])
  .pipe(gulp.dest('dist/img'));

  var buildHtml = gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));

  var buildFavicon = gulp.src('src/favicon.ico')
  .pipe(gulp.dest('dist'));

});

gulp.task('default', ['build']);