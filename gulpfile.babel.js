import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import path from 'path';
import jasmineNode from 'gulp-jasmine-node';
import istanbul from 'gulp-istanbul';
import injectModules from 'gulp-inject-modules';
import exit from 'gulp-exit';

// Load the gulp plugins into the `plugins` variable
const plugins = loadPlugins();


const jasmineNodeOpts = {
  timeout: 100000,
  includeStackTrace: false,
  color: true
};

gulp.task('tests', () => {
  gulp.src('./server/tests/**/*.js')
    .pipe(plugins.babel())
    .pipe(jasmineNode(jasmineNodeOpts));
});


// Compile all Babel Javascript into ES5 and place in dist folder
gulp.task('babel', () =>
  gulp.src(['server/**/*.js', './server.js'])
    .pipe(plugins.babel())
    .pipe(gulp.dest('dist'))
);

gulp.task('coverage', (cb) => {
  gulp.src('build/routes/*.js')
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src('./tests/**/*.js')
        .pipe(plugins.babel())
        .pipe(injectModules())
        .pipe(jasmineNode())
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 30 } }))
        .on('end', cb)
        .pipe(exit());
    });
});


// Restart server with on every changes made to file
gulp.task('nodemon', ['babel'], () =>
  plugins.nodemon({
    script: path.join('dist', 'server.js'),
    ignore: ['README.md', 'node_modules/**/*.js', 'dist/**/*.js'],
    ext: 'js',
    tasks: ['babel']
  })
);

gulp.task('test', ['tests']);
gulp.task('default', ['nodemon']);
gulp.task('production', ['babel']);
