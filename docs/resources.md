# Resources used on research

## Google APIs
 * https://console.developers.google.com/
 * http://developers.google.com/apis-explorer/?hl=es#p/tasks/v1/tasks.tasklists.list?_h=1&
 * https://developers.google.com/accounts/docs/OAuth2#clientside
 * https://developers.google.com/accounts/docs/OAuth2UserAgent#validatetoken
 * https://developers.google.com/api-client-library/javascript/
 * https://developers.google.com/accounts/docs/OpenIDConnect
 * https://developers.google.com/oauthplayground/

## nodejs
Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Basically it's used to create **server side JavaScript  apps**. 
* https://nodejs.org/
 
In this app it's only used to run npm, grunt tasks, bower and livereload.
## npm
npm is a **package manager** for JS. (Requires nodejs >= v0.8)
* https://www.npmjs.com/
* It´s configured by [package.json](https://docs.npmjs.com/files/package.json)
* Check how scripts is handled by npm at https://docs.npmjs.com/misc/scripts

## Grunt
Grunt is a **tasks runner** writen in JS, it could be used for *Automation, performing repetitive tasks like minification, compilation, unit testing and linting* (Requires nodejs >= v0.8)
 * `package.json`: This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file
 * `Gruntfile`: Is used to configure or define tasks and load Grunt plugins

**Resources** 
 * http://gruntjs.com/getting-started
 * http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/

 **Livereload (development purposes)**
 * https://github.com/gruntjs/grunt-contrib-watch
 * https://github.com/gruntjs/grunt-contrib-connect
 * http://stackoverflow.com/questions/20883727/grunt-contrib-connect-with-grunt-contrib-watch-and-chrome-livereload-extension

## Bower
Bower is a **package manager for the web**.
 * `bower.json`: Keeps track of packages in this manifest file (like package.json to npm)
 
**Resources**
 * http://bower.io/

## Angularjs
AngularJS is a **structural framework for dynamic web apps**. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write.

**Resources**
 * https://docs.angularjs.org/tutorial
 * https://scotch.io/tutorials/angularjs-best-practices-directory-structure
 * https://github.com/toddmotto/angularjs-styleguide
 * https://scotch.io/tutorials/declaring-angularjs-modules-for-minification
 * https://github.com/johnpapa/angular-styleguide
 * https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub
 * Testing: http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html
 * Service vs Factory: https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make, http://blog.manishchhabra.com/2013/09/angularjs-service-vs-factory-with-example/, http://stackoverflow.com/questions/15666048/service-vs-provider-vs-factory
 * Batarang extension: https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en

**Modules**
 * Authentication: https://github.com/witoldsz/angular-http-auth

## Karma
Karma js is a test runner. It runs your tests. Basically, you writing your tests using your favorite testing framework (mocha, jasmine, qunit etc.) and use karma js to run it in several browsers.

**Resources**
 * http://karma-runner.github.io/0.12/index.html
 * https://github.com/karma-runner/karma-jasmine
 * https://github.com/karma-runner/karma-phantomjs-launcher
 * https://github.com/karma-runner/karma-firefox-launcher
 * https://github.com/karma-runner/karma-chrome-launcher
 * https://github.com/karma-runner/karma-ie-launcher
 * https://github.com/karma-runner/grunt-karma
 * http://karma-runner.github.io/0.12/plus/travis.html
 * http://ymichael.com/2014/05/10/javascript-testing-with-karma-js.html

**What I learned**
 * If you use karma + jasmine to unit test your AngularJS (i.e. controllers) you need to add angular-mocks or it wouldn't find modules function.

## Jasmine
Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM.

**Resources**
 * http://jasmine.github.io/
 * https://github.com/jasmine/jasmine