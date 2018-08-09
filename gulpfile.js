var gulp   = require("gulp");
var sass   = require("gulp-sass");
var rename = require('gulp-rename');
var exec  = require('child_process').exec;
var clean = require('gulp-clean');


//
// Styles
//

// Sass

gulp.task('sass', function () {
    return gulp.src(['./**/sass/*.scss', '!./node_modules/**/*'])
        .pipe(sass({
            outputStyle: 'nested',
            precision: 5,
            onError: function (err) {
                notify().write(err);
            }
        }))
        .pipe(rename(function (path) {
            path.dirname += "/../";
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('sass-clean', function () {
    return gulp.src(['./**/*.css', '!./node_modules/**/*'], {read: false})
        .pipe(clean())
});


// GDM

// not yet
gulp.task('gdm', function () {});
gulp.task('gdm-clean', function () {});


//
// App Layers
//

// GTK

var cmd_gtk_autogen = './autogen.sh --datadir=$(cd $(pwd)/../..; pwd)/rendered';
var cmd_gtk_autogen_clean = 'rm -rf aclocal.m4 autom4te.cache build-aux configure Makefile.in common/Makefile.in';
var cmd_gtk_make = 'make install';
var cmd_gtk_make_clean = 'make distclean';

gulp.task('gtk-configure', function(cb) {
    process.chdir('apps/gtk');
    return exec(cmd_gtk_autogen, function(err, stdout, stderr) {
        process.chdir('../..');
        cb(err);
    });
});

gulp.task('gtk-make', function(cb) {
    process.chdir('apps/gtk');
    return exec(cmd_gtk_make, function(err, stdout, stderr) {
        process.chdir('../..');
        cb(err);
    });
});

gulp.task('gtk-make-clean', function(cb) {
    process.chdir('apps/gtk');
    return exec(cmd_gtk_make_clean, function(err, stdout, stderr) {
        process.chdir('../..');
        cb(err);
    });
});

gulp.task('gtk-configure-clean', function(cb) {
    process.chdir('apps/gtk');
    return exec(cmd_gtk_autogen_clean, function(err, stdout, stderr) {
        process.chdir('../..');
        cb(err);
    });
});

gulp.task('gtk', gulp.series('gtk-configure', 'gtk-make'));
gulp.task('gtk-clean', gulp.series('gtk-make-clean', 'gtk-configure-clean'));


//
// ArcOS Task Names
//

gulp.task('styles', gulp.series('sass'));
gulp.task('layers', gulp.series('gtk'));
gulp.task('clean', gulp.series('sass-clean', 'gtk-clean'));
gulp.task('default', gulp.series('styles', 'layers'));
