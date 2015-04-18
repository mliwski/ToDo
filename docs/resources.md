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
 * [Angular - Official tutorial](https://docs.angularjs.org/tutorial)
 * https://scotch.io/tutorials/angularjs-best-practices-directory-structure
 * https://github.com/toddmotto/angularjs-styleguide
 * http://henriquat.re/modularizing-angularjs/modularizing-angular-applications/modularizing-angular-applications.html
 * https://scotch.io/tutorials/declaring-angularjs-modules-for-minification
 * https://github.com/johnpapa/angular-styleguide
 * https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub
 * Testing: http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html
 * Service vs Factory: https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make, http://blog.manishchhabra.com/2013/09/angularjs-service-vs-factory-with-example/, http://stackoverflow.com/questions/15666048/service-vs-provider-vs-factory
 * Batarang extension: https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en

**Modules**
 * [Authentication](https://github.com/witoldsz/angular-http-auth)
 * [HTML5 Local storage](http://ngmodules.org/modules/ngStorage)

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
 * Use [Webstorm](https://www.jetbrains.com/webstorm/) as your IDE
 * If use your webstorm as your IDE, use it as an IDE not just as a text-editor with sugar ... debug and run from It (thanks [lukebell](https://github.com/lukebell) ;))
 * On unit test that need promises mock you have to $digest() your scope. Check the following links to know why:
    * [AngularJS - Scope.digest docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest)
    * [AngularJS - $q docs](https://docs.angularjs.org/api/ng/service/$q) (search testing paragraph & method when())
    * [Community info - Testing Promises in AngularJS](http://blog.xebia.com/2013/10/12/testing-promises-in-angularjs/)
    * [Community info - Mocking services](http://stackoverflow.com/questions/23705051/how-do-i-mock-a-service-that-returns-promise-in-angularjs-jasmine-unit-test) I found here the idea to use $q.when
    * [Community info - Mocking modules](http://stackoverflow.com/questions/17554727/mocking-angular-module-dependencies-in-jasmine-unit-tests)
 * If you split the application in modules/controllers/services/etc, in independent files, at the karma.conf.js you have to be careful of load the module.js before the rest of the files.

## Jasmine
Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM.

**Resources**
 * http://jasmine.github.io/
 * https://github.com/jasmine/jasmine

## JSHint
JSHint is a community-driven tool to detect errors and potential problems in JavaScript code and to enforce your team's coding conventions.

**Resources**
 * [JSHint Homepage](http://jshint.com/)
 * [JSHint - List of options](http://jshint.com/docs/options/)
 * [Grunt - JSHint grunt task](https://github.com/gruntjs/grunt-contrib-jshint)
 * [Mozilla MDN - Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

## Webstorm
WebStorm is a lightweight yet powerful IDE. In my opinion ideal to work with Angular.

**Resources**
 * [Jetbrains - Karma+Webstorm](http://blog.jetbrains.com/webstorm/2013/10/running-javascript-tests-with-karma-in-webstorm-7)
 * [Jetbrains - Webstorm IDE Plugin for Chrome](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji)
 * [Jetbrains - Monitoring code coverage with karma](https://www.jetbrains.com/webstorm/help/monitoring-code-coverage-for-javascript.html)

**What I learned**
 * Use it as your IDE
 * If use your webstorm as your IDE, use it as an IDE not just as a text-editor with sugar ... debug and run from It (thanks [lukebell](https://github.com/lukebell) ;))
 * The coverage isn´t so clear to view, it's on the left bar (same of line numbers). Change the colors for a proper feedback.
