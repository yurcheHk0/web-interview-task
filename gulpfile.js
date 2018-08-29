const spawn = require('child_process').spawn;
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

// javascript
const ts = require('gulp-typescript');
const tsProject = ts.createProject("tsconfig.json");
const babel = require('gulp-babel');
const rename = require('gulp-rename');

// scss
const concat = require('gulp-concat');
const sass = require('gulp-sass');

// server
const server = require('gulp-develop-server');

// live reload
const livereload = require('gulp-livereload');

function compileClient() {
    gulp.src("client/scripts/**/*")
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename(path => {
            path.extname = ".js";
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("output"));
}

// Client compilation
gulp.task("client:compile", compileClient);
gulp.task("client:watch", () => {
    compileClient();
    gulp.watch("client/scripts/**/*.js", ["client:compile"]);
});


// Sass
function compileSass() {
    return gulp.src("client/styles/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(concat("bundle.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("output"));
}
gulp.task("sass", compileSass);
gulp.task("sass:watch", () => {
    compileSass();
    gulp.watch("client/styles/**/*.scss", ["sass"]);
});

// Server
gulp.task("server:start", () => {
    server.listen({path: 'server.js'});
    gulp.watch(["server.js"], ["server:restart"]);
});
gulp.task("server:restart", () => {
    server.restart();
});

// live reload
gulp.task("client:livereload", () => {
	livereload.listen();
	gulp.watch(["output/*", "client/templates/*"], file => {
        livereload.changed(file);
    })
});

// WATCH
// =====
// Run the server
gulp.task("default", ["server:start", "client:watch", "sass:watch", "client:livereload"]);