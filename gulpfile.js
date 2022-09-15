const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const uglifyCss = require('gulp-uglifycss')
const babel = require('gulp-babel')

function transformacaoHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlMin({ "collapseWhitespace": true, "removeComments": true }))
        .pipe(gulp.dest('build'))

}

function transformacaoCSS() {
    return gulp.src('src/_css/**/*.css')
        .pipe(uglifyCss({ "uglyComments": true }))
        // .pipe(concat('min.css'))
        .pipe(gulp.dest('build/_css'))
}

function transformacaoJS() {
    return gulp.src('src/_js/**/*.js')
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('build/_js'))
}

function transformacaoIMG() {
    return gulp.src('src/_img/**/*.*')
        .pipe(gulp.dest('build/_img'))
}

function copiarFonts() {
    return gulp.src('src/font/**/*.*')
        .pipe(gulp.dest('build/font'))
}

function copiarPHP() {
    return gulp.src('src/_php/**/*.*')
        .pipe(gulp.dest('build/_php'))
}


module.exports.default = series(transformacaoHTML, transformacaoCSS, transformacaoJS, transformacaoIMG, copiarFonts, copiarPHP)
