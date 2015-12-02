'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let minify = require('gulp-minify');

let dirs = {
  src: {
    scss: './src/stylesheets/*.scss',
    js: "./src/javascripts/**/*.js",
    html: "./src/templates/**/*.html",
    img: "./src/images/**/*.*"
  },
  dist: {
    css: './public/css',
    js: './public/js',
    html: './public/html',
    img: './public/images'
  }
};

gulp.task('sass', () => {
  return gulp.src(dirs.src.scss)
    .pipe(sass())
    .pipe(gulp.dest(dirs.dist.css));
});

gulp.task('scripts', () => {
  return gulp.src(dirs.src.js)
    .pipe(babel({
      presets: ['es2015']
     }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest(dirs.dist.js))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dirs.dist.js))
});

gulp.task('html', () => {
  return gulp.src(dirs.src.html)
    .pipe(gulp.dest(dirs.dist.html));
});

gulp.task('images', () => {
  return gulp.src(dirs.src.img)
    .pipe(gulp.dest(dirs.dist.img));
});

gulp.task('watch', () => {
  gulp.watch(dirs.src.js, ['scripts']);
  gulp.watch(dirs.src.scss, ['sass']);
  gulp.watch(dirs.src.html, ['html']);
  gulp.watch(dirs.src.img, ['images']);
});

gulp.task('deploy', ['sass', 'scripts', 'html', "images"]);

gulp.task('default', ['sass', 'scripts', 'html', "images", "watch"]);
