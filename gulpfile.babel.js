'use strict';

import gulp from 'gulp';
import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import uglifyify from 'uglifyify';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import cleanCss from 'gulp-clean-css';

const jsOptions = {
    entries: './src/jsx/main.jsx',
    paths: ['./src/jsx/']
};

gulp.task('default', () => {
});

gulp.task('css', () => {
	gulp.src(['src/scss/main.scss'])
    .pipe(plumber({
        errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
	.pipe(sass())
	.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(concat('main.built.css'))
    .pipe(cleanCss())
	.pipe(gulp.dest('./css/'))
});

gulp.task('js', () => {
    return browserify(jsOptions)
        .transform(babelify, {presets: ['env', 'react']})
        .bundle()
        .pipe(source('main.built.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('js-prod', () => {
    process.env.NODE_ENV = 'production';

    return browserify(jsOptions)
		.transform(babelify, {presets: ['env', 'react']})
        .transform(uglifyify)
        .bundle()
        .pipe(source('main.built.js'))
        .pipe(buffer())    // Stream files
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', () => {
	gulp.watch(['src/jsx/**/*'], ['js']);
    gulp.watch('src/scss/**/*.scss', ['css']);
});
