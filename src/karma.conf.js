// karma.conf.js
module.exports = function (config) {
  config.set({
    files: [
      '**/*.spec.ts'
    ],

    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-teamcity-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    reporters: [
      'progress',
      'kjhtml',
      'teamcity'
    ],

    preprocessors: {
      '**/*.spec.ts': ['coverage']
    },

    browsers: [
      'Chrome',
      'ChromeHeadless',
      'ChromeHeadlessCI'
    ],

    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    }

  });
};