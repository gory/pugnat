'use strict';

import gulp from 'gulp';
import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import uglifyify from 'uglifyify';

const jsOptions = {
    entries: './src/jsx/main.jsx',
    paths: ['./src/jsx/']
};

gulp.task('default', () => {
});

gulp.task('js', () => {
    return browserify(jsOptions)
        .transform(babelify, {presets: ['env', 'react']})
        .bundle()
        .pipe(source('main.built.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('js-production', () => {
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
});
