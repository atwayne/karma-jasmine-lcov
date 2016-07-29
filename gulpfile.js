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


gulp.task('sonar', function () {
    var options = {
        sonar: {
            host: {
                url: 'http://localhost:9000'
            },
            jdbc: {
                url: 'jdbc:mysql://localhost:3306/sonarqube',
                username: 'sonar',
                password: 'sonarpass'
            },
            projectKey: 'javascript-sample',
            projectName: ' JavaScript Sample Project',
            projectVersion: '1.0.0',
            // comma-delimited string of source directories 
            sources: 'src/',
            language: 'js',
            sourceEncoding: 'UTF-8',
            javascript: {
                lcov: {
                    reportPath: 'test/sonar_report/lcov.info'
                }
            },
            exec: {
                // All these properties will be send to the child_process.exec method (see: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback ) 
                // Increase the amount of data allowed on stdout or stderr (if this value is exceeded then the child process is killed, and the gulp-sonar will fail). 
                maxBuffer: 1024 * 1024
            }
        }
    };

    // gulp source doesn't matter, all files are referenced in options object above 
    return gulp.src('thisFileDoesNotExist.js', { read: false })
        .pipe(sonar(options));
});