var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass');

gulp.task('default', function(){
    // place code for your default task here
});

gulp.task('compass', function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe(compass({
            sass: './src/sass',
            css: './dist/css',
            comments: false,
            style: 'compressed'
        }))
        .pipe(gulp.dest('./tmp'));
});

gulp.task('watch', function() {
    var watcher = gulp.watch('./src/sass/**/*.scss', ['compass']);
    watcher.on('changed', function(event){
        console.log('File '+event.path+' was '+event.type+', running tasks...');
    });
});
