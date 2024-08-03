const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}

function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens(){
    return  gulp.src('./source/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imagens'));
}

exports.sass = compilaSass;
exports.javascript = comprimeJs;
exports.images = comprimeImagens;

exports.default = function(){
    gulp.watch('./source/styles/main.scss',{ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ignoreInitial:false}, gulp.series(comprimeJs));
    gulp.watch('./source/imagens/*',{ignoreInitial:false}, gulp.series(comprimeImagens));


}
