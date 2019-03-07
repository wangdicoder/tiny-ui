'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('build', function () {
	return gulp.src('./src/*/style/*.css')
	.pipe(cleanCSS())
	.pipe(gulp.dest('./dist'));
});