'use strict';

import gulp from 'gulp';
import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';

gulp.task('default', () => {
	console.log('default');
});

gulp.task("js", () => {
    var options = {
        entries: "./src/jsx/main.jsx",
        paths: ["./src/jsx/"]
    };

    return browserify(options)
        .transform(babelify, {presets: ["env", "react"]})
        .bundle()
        .pipe(source("main.built.js"))
        .pipe(buffer())    // Stream files
        .pipe(uglify())
        .pipe(gulp.dest("./js"));
});

gulp.task('watch', () => {
	gulp.watch(['src/jsx/**/*'], ['js']);
});