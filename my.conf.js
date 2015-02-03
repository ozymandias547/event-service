// Karma configuration
// Generated on Mon Feb 02 2015 15:58:00 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
	  files: [
		'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore.js',
		'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.js',
		'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular.js',
		'https://cdnjs.cloudflare.com/ajax/libs/angular-moment/0.9.0/angular-moment.js',
		'https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0.js',
		'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular-resource.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.13/angular-ui-router.js',
		'https://cdnjs.cloudflare.com/ajax/libs/angular-filter/0.4.7/angular-filter.js',
		'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-mocks.js',
		'app/*.js',
		'app/**/*.js',
		'tests/spec/**/*.js'
	  ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
