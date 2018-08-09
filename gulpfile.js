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

function gtk_configure(cb) {
    process.chdir('apps/gtk');
    return exec(cmd_gtk_autogen, function(err, stdout, stderr) {
        process.chdir('../..');
        cb(err);
    });
}

gulp.task('gtk-configure', gtk_configure);
gulp.task('chain-gtk-configure', ['sass'], gtk_configure);

function gtk_make(cb) {
    process.chdir('apps/gtk');
    return exec(cmd_gtk_make, function(err, stdout, stderr) {
        process.chdir('../..');
        cb(err);
    });
}

gulp.task('gtk-make', gtk_make);
gulp.task('chain-gtk-make', ['chain-gtk-configure'], gtk_make);

gulp.task('gtk-configure-clean', ['gtk-make-clean'], function(cb) {
    process.chdir('apps/gtk');
    return exec(cmd_gtk_autogen_clean, function(err, stdout, stderr) {
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

gulp.task('gtk', ['chain-gtk-make']);
gulp.task('gtk-clean', ['gtk-make-clean', 'gtk-configure-clean']);


//
// ArcOS Task Names
//

gulp.task('styles', ['sass']);
gulp.task('layers', ['gtk']);
gulp.task('clean', ['sass-clean', 'gtk-clean']);
gulp.task('default', ['styles', 'layers']);
