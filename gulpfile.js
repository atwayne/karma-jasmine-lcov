var gulp = require('gulp');
var Server = require('karma').Server;
var sonar = require('gulp-sonar');
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});
