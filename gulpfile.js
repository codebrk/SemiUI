'use strict';

const gulp     = require('gulp');
const rename   = require('gulp-rename');
const concat   = require('gulp-concat');
const sass     = require('gulp-sass');
const minify   = require('gulp-uglify');
const maps     = require('gulp-sourcemaps');
const babel    = require('gulp-babel');


gulp.task('copyFont', function () {
    return gulp.src([
        './src/sass/material-icons/codepoints',
        './src/sass/material-icons/*.eot',
        './src/sass/material-icons/*.ijmap',
        './src/sass/material-icons/*.svg',
        './src/sass/material-icons/*.ttf',
        './src/sass/material-icons/*.woff',
        './src/sass/material-icons/*.woff2',
        './src/sass/font/*.woff'
    ])
    .pipe(gulp.dest('./dist/css/fonts'));
});


gulp.task('copyImage', function () {
    return gulp.src([
        './src/img/*'
    ])
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('compileSass', function () {
    return gulp.src([
        './src/sass/semiui.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minifySass', function() {
    return gulp.src([
        './src/sass/semiui.scss'
    ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename("semiui.min.css"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task("concatJs", function() {
    return gulp.src([
        "./src/js/semiui.js",
        "./src/js/components/*.js",
    ])
    .pipe(babel({
		presets: ['env']
    }))
    .pipe(maps.init())
    .pipe(concat("semiui.js"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("minifyJs", function() {
    return gulp.src([
        "./dist/js/semiui.js"
    ])
        .pipe(minify())
        .pipe(rename("semiui.min.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("default", ["copyFont", "copyImage", "compileSass", "concatJs"], function () {
    gulp.start("minifySass", "minifyJs");
});

gulp.task("watch", ["copyFont", "copyImage", "compileSass", "concatJs"], function() {
    gulp.watch(["./src/sass/*.scss", "./src/sass/**/*.scss"], ["compileSass"]);
    gulp.watch(["./src/js/*.js", "./src/js/**/*.js"], ["concatJs"]);
});