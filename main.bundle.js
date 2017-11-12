webpackJsonp([1,4],{

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(401);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(457),
            styles: [__webpack_require__(455)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(189)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\n  <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">\n    <span class=\"d-block d-lg-none\">Karan Khilwani</span>\n    <span class=\"d-none d-lg-block\">\n      <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"./src/img/profile.jpg\" alt=\"\">\n    </span>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"#about\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"#experience\">Experience</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"#education\">Education</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"#skills\">Skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"#projects\">Projects</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"#interests\">Interests</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link js-scroll-trigger\" href=\"#awards\">Awards</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid p-0\">\n\n  <section class=\"resume-section p-3 p-lg-5 d-flex d-column\" id=\"about\">\n    <div class=\"my-auto\">\n      <h1 class=\"mb-0\">Karan\n        <span class=\"text-primary\">Khilwani</span>\n        <h5>  (Full Stack Developer)</h5>\n      </h1>\n      <div class=\"subheading mb-5\">Meera Shyam Kripa Behind Ghanshyam Vihar Colony, Bharhut Nagar , Satna - 485001(M.P)·\n          <a>+91-9762582584 / +91-8109335885</a>\n        <a href=\"mailto:name@email.com\">KhilwaniKaran@gmail.com</a>\n\n          <li class=\"list-inline-item list-inline list-social-icons mb-0\">\n            <a href=\"https://www.linkedin.com/in/karan-khilwani-9ba887a3\">\n              <span class=\"fa-stack fa-lg\">\n                <i class=\"fa fa-circle fa-stack-2x\"></i>\n                <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i>\n              </span>\n            </a>\n          </li>\n\n      </div>\n      \n      <p class=\"mb-5\">I am experienced and a Passionate Software Developer, With Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition, with experience in product development on DOTNET, React, Angular & JAVA stacks. Strong problem solving & debugging skills. Excellent communication and interpersonal skills. </p>\n      <ul class=\"list-inline list-social-icons mb-0\">\n        <!-- <li class=\"list-inline-item\">\n          <a href=\"#\">\n            <span class=\"fa-stack fa-lg\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\n            </span>\n          </a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"#\">\n            <span class=\"fa-stack fa-lg\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\n            </span>\n          </a>\n        </li> -->\n        <!-- <li class=\"list-inline-item\">\n          <a href=\"https://www.linkedin.com/in/karan-khilwani-9ba887a3\">\n            <span class=\"fa-stack fa-lg\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i>\n            </span>\n          </a>\n        </li> -->\n        <!-- <li class=\"list-inline-item\">\n          <a href=\"#\">\n            <span class=\"fa-stack fa-lg\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\n            </span>\n          </a>\n        </li> -->\n      </ul>\n    </div>\n  </section>\n\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Experience</h2>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">Software Engineer</h3>\n          <div class=\"subheading mb-3\">BizAnalytix Technologies Pvt. Ltd.</div>\n          <p></p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">August 2016 - Present</span>\n        </div>\n      </div>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">Internship</h3>\n          <div class=\"subheading mb-3\">Symantec</div>\n          <p></p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">January 2016 - June 2017</span>\n        </div>\n      </div>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n          <div class=\"resume-content mr-auto\">\n            <h3 class=\"mb-0\">Lecturership</h3>\n            <div class=\"subheading mb-3\">Sindhu Girls COllege</div>\n            <p></p>\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">August 2013 - August 2014</span>\n          </div>\n        </div>\n\n    </div>\n\n  </section>\n\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"education\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Education</h2>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">Indira College Of Enginering & Management, Pune</h3>\n          <div class=\"subheading mb-3\">Pune University</div>\n          <div>MCA (Masters Of Computer Application)</div>\n          <p>Percent: 74%</p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">August 2014 - June 2016</span>\n        </div>\n      </div>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n          <div class=\"resume-content mr-auto\">\n            <h3 class=\"mb-0\">Rajiv Gandhi College Of Computer Application And Technology</h3>\n            <div class=\"subheading mb-3\">Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal</div>\n            <div>BCA (Bachelors Of Computer Application)</div>\n            <p>Percent: 81.44%</p>\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">July 2009 - June 2012</span>\n          </div>\n        </div>\n\n      <div class=\"resume-item d-flex flex-column flex-md-row\">\n        <div class=\"resume-content mr-auto\">\n          <h3 class=\"mb-0\">Nalanda Public School, SATNA,(M.P)</h3>\n          <div class=\"subheading mb-3\">MP Board</div>\n          <div>Commerce</div>\n          <p>Percent: 72%</p>\n        </div>\n        <div class=\"resume-date text-md-right\">\n          <span class=\"text-primary\">July 2008 - June 2009</span>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"skills\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Skills</h2>\n\n      <div class=\"subheading mb-3\">Programming Languages</div>\n      <ul class=\"list-inline list-icons\">\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-html5\" title=\"HTML5\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-css3\" title=\"CSS3\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-javascript\" title=\"JavaScript\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-jquery\" title=\"Jquery\"></i>\n        </li>\n        <!-- <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-sass\"></i>\n        </li> -->\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-dotnet\" title=\"dotNet\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-bootstrap\" title=\"Bootstrap\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-android\" title=\"Android\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-react\" title=\"React\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-angular\" title=\"Angular\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-java\" title=\"Java\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-mongodb\" title=\"Mongodb\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-mysql\" title=\"MySql\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-typescript\" title=\"TypeScript\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-msql_server\" title=\"MS-Sql Server\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-nodejs\" title=\"Node Js\"></i>\n        </li>\n      </ul>\n\n      <div class=\"subheading mb-3\">Tools</div>\n      <ul class=\"list-inline list-icons\">\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-visualstudio\" title=\"VisualStudio\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-intellij\" title=\"Intellij\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-android\" title=\"AndroidStudio\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-bitbucket\" title=\"BitBucket\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-github_alt\" title=\"Github\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-jira\" title=\"Jira\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-sourcetree\" title=\"SourceTree\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-trello\" title=\"Trello\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-slack\" title=\"Slack\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-msql_server\" title=\"MS-Sql Server\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-npm\" title=\"npm\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-nginx\" title=\"nginx\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-firebase\" title=\"Firebase\"></i>\n        </li>\n      </ul>\n\n      <div class=\"subheading mb-3\">Workflow</div>\n      <ul class=\"fa-ul mb-0\">\n        <li>\n          <i class=\"fa-li fa fa-check\"></i>\n          Designing and development, Trying new approaches to solve dev envoirnment problems</li>\n        <li>\n          <i class=\"fa-li fa fa-check\"></i>\n          Cross Browser Testing &amp; Debugging</li>\n        <li>\n          <i class=\"fa-li fa fa-check\"></i>\n          Cross Functional Teams</li>\n        <li>\n          <i class=\"fa-li fa fa-check\"></i>\n          Agile Development &amp; Scrum</li>\n      </ul>\n    </div>\n  </section>\n\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"projects\">\n      <div class=\"my-auto\">\n        <h2 class=\"mb-5\">Projects Done</h2>\n  \n        <div class=\"mb-3\">\n        <ul class=\"fa-ul mb-0\">\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            <div class=\"subheading\">Community Living (Crossbow)</div>\n          </li>\n          Role: Develop end to end features for the product. \n        </ul>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-html5\" title=\"HTML5\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-css3\" title=\"CSS3\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-bootstrap\" title=\"Bootstrap\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-javascript\" title=\"JavaScript\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-jquery\" title=\"Jquery\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-dotnet\" title=\"dotNet\"></i>\n        </li>\n      </div>\n\n      <div class=\"mb-3\">\n        <ul class=\"fa-ul mb-0\">\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            <div class=\"subheading\">TaskScheduler a SQL Server SMO C# Application</div>\n          </li>\n          Role: Develop in C# wiith end to end features for the product.          \n        </ul>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-dotnet\" title=\"dotNet\"></i>\n        </li>\n      </div>\n\n      <div class=\"mb-3\">\n        <ul class=\"fa-ul mb-0\">\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            <div class=\"subheading\">FAgES</div>\n          </li>\n          Role: Lead and Developing end to end features for the product.\n        </ul>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-react\" title=\"React Native\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-android\" title=\"Android\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-firebase\" title=\"Firebase\"></i>\n        </li>\n      </div>\n\n      <div class=\"mb-3\">\n        <ul class=\"fa-ul mb-0\">\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            <div class=\"subheading\">Symantec Endpoint Protection (SEP) Manager</div>\n          </li>\n          Role: Defect Fixing, Coverity Fixes, White Box Testing, Bug Bashing, new features for the product      \n        </ul>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-java\" title=\"Java\"></i>\n        </li>\n      </div>\n\n      <div class=\"mb-3\">\n        <ul class=\"fa-ul mb-0\">\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            <div class=\"subheading\">My VCard</div>\n          </li>\n          Role: Develop end to end features for the product.\n        </ul>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-java\" title=\"Java\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n          <i class=\"devicons devicons-android\" title=\"Android\"></i>\n        </li>\n        <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-firebase\" title=\"Firebase\"></i>\n        </li>\n      </div>\n\n      <div class=\"mb-3\">\n        <ul class=\"fa-ul mb-0\">\n            <li>\n              <i class=\"fa-li fa fa-check\"></i>\n              <div class=\"subheading\">SQL Server Data Backup And Recovery</div>\n            </li>\n            Role: Developing Small & effective end to end features for the product.\n          </ul>\n          <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-dotnet\" title=\"dotNet\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n              <i class=\"devicons devicons-msql_server\" title=\"MS-Sql Server\"></i>\n          </li>\n      </div>\n\n      <div class=\"mb-3\">\n          <ul class=\"fa-ul mb-0\">\n            <li>\n              <i class=\"fa-li fa fa-check\"></i>\n              <div class=\"subheading\">Data Analytics</div>\n            </li>\n            Role: Developing & Converting .net application to Angular2 framework & effective end to end features for the product.\n          </ul>\n          <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-angular\" title=\"Angular2\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-dotnet\" title=\"dotNet\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n              <i class=\"devicons devicons-msql_server\" title=\"MS-Sql Server\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n              <i class=\"devicons devicons-typescript\" title=\"TypeScript\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n              <i class=\"devicons devicons-mongodb\" title=\"mongodb\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n              <i class=\"devicons devicons-nginx\" title=\"nginx\"></i>\n          </li>\n      </div>\n\n      <div class=\"mb-3\">\n          <ul class=\"fa-ul mb-0\">\n            <li>\n              <i class=\"fa-li fa fa-check\"></i>\n              <div class=\"subheading\">ScriptTracRX</div>\n            </li>\n            Role: Developing new application using React with effective end to end features for the product.\n          </ul>\n          <li class=\"list-inline-item\">\n            <i class=\"devicons devicons-react\" title=\"React\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n              <i class=\"devicons devicons-java\" title=\"Java\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n              <i class=\"devicons devicons-nodejs\" title=\"NodeJs\"></i>\n          </li>\n      </div>\n\n      </div>\n    </section>\n\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"interests\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Interests</h2>\n      <p>Apart from being a Software Engineer, I enjoy most of my time being outdoors. I enjoy long drive biking and playing games. </p>\n      <p class=\"mb-0\">When forced indoors, I love to play snoooker and pool whenever i get the chance to play. I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements and learning new things in the development world.</p>\n    </div>\n  </section>\n\n  <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"awards\">\n    <div class=\"my-auto\">\n      <h2 class=\"mb-5\">Awards &amp; Certifications</h2>\n      <ul class=\"fa-ul mb-0\">\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Awarded As Student Of The Year In MCA ,At college festival Avishkar 2015</li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Written Code for Telerik kendo to export n level hierarchical grid to Excel file.\n        </li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Reduced Coverity Defects from 5000+ to 1200 for SEP.\n        </li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Created an SQL Server SMO Task Scheduler C# Application. Implemented For Community Living Services.\n        </li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Changed Crossbow Asp.net application behaviour to not post complete page when a request is send.(Behave like a Single page application.)\n        </li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Taken Part as a player in Symantec SEP Cricket Team.\n        </li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          Represented research paper On Android Security at ICCS\n        </li>\n        <li>\n          <i class=\"fa-li fa fa-trophy text-warning\"></i>\n          1<sup>st</sup>\n          Place - for consecutively two years at Inter College cricket team\n        </li>\n      </ul>\n    </div>\n  </section>\n\n</div>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[472]);
//# sourceMappingURL=main.bundle.js.map