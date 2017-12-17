'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');

var SCSS_SRC = './styles/scss**/*.scss';
var DEST = './styles';

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('sass', function () {
    return gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(DEST));
});

gulp.task('watch_scss', function () {
    gulp.watch(SCSS_SRC, ['sass']);
});

gulp.task('default', ['webserver', 'watch_scss']);