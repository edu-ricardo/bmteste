var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('default', function () {
    return gulp.src('server/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            module: "commonjs",
            removeComments: true,
            target: "es6"
        }))
        .pipe(gulp.dest('build/server'));
});
