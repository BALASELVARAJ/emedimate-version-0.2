(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");






var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- begin header menu definition -->\n<ion-menu side=\"start\" type=\"overlay\" menuId=\"mainMenu\" class=\"main-menu\">\n  <ion-header>\n    <ion-toolbar color=\"dark\"  class=\"user-profile\">\n      <ion-item margin-bottom>\n        <ion-avatar slot=\"start\" class=\"user-avatar\">\n          <img src=\"../../assets/images/avatar.jpeg\">\n        </ion-avatar>\n        <ion-label>\n          <ion-text color=\"medium\">\n            <h1><strong>Balaganesh</strong></h1>\n          </ion-text>\n          <ion-text color=\"secondary\">\n            <h3>\n             Chennai, INDIA\n            </h3>\n          </ion-text>\n          <ion-menu-toggle class=\"mto\" auto-hide=\"false\">\n            <a class=\"text08\" tappable (click)=\"goToEditProgile()\">\n              <ion-text color=\"primary\">\n                <ion-icon name=\"contact\"></ion-icon>\n                <strong>edit profile</strong>\n              </ion-text>\n            </a> <ion-text color=\"secondary\"> | </ion-text> \n            <a class=\"text08\" tappable (click)=\"logout()\">\n              <ion-text color=\"primary\">\n                <ion-icon name=\"log-out\"></ion-icon>\n                <strong>logout</strong>\n              </ion-text>\n            </a>\n          </ion-menu-toggle>\n        </ion-label>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"bg-profile\">\n    <ion-list>\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n        <ion-item [routerLink]=\"[p.url]\" (click)=\"getRouteName(p.title)\">\n          <ion-icon slot=\"start\" [name]=\"p.icon\" color=\"primary\"></ion-icon>\n          <ion-label>\n            {{p.title}}\n          </ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n  \n</ion-menu>\n<!-- end header menu definition -->\n<!-- begin header -->\n<ion-header no-border>\n  <ion-toolbar mode=\"ios\" color=\"dark\">\n    <ion-title>\n     {{routeName}}\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- end header -->\n<ion-tabs main>\n<!-- filler header --> \n<ion-header  no-border><ion-toolbar  color=\"dark\"></ion-toolbar></ion-header>\n  <!-- <ion-tab-bar slot=\"bottom\" color=\"dark\"> \n    <ion-tab-button tab=\"dashboard\">\n      <ion-icon name=\"flash\"></ion-icon>\n      <ion-label>dashboard</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"workers\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Workers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"donor\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Blood donor</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"notifications\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Notifications</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar> -->\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-header {\n  --background: linear-gradient(135deg, var(--ion-color-background), var(--ion-color-primary)); }\n\n:host ion-list.list-md {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htc3BsL0Rlc2t0b3AvbXlBcHAvZW1lZGltYXRlLXZlcnNpb24tMC4yL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLDRGQUFhLEVBQUE7O0FBRnJCO0VBT1ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICAgIGlvbi1oZWFkZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKTtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgICYubGlzdC1tZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TabsPage = /** @class */ (function () {
    function TabsPage(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.appPages = [
            {
                title: 'Dashboard',
                url: '/tabs/dashboard',
                direct: 'root',
                icon: 'flash'
            },
            {
                title: 'Workers',
                url: '/tabs/workers',
                direct: 'root',
                icon: 'information-circle-outline'
            },
            {
                title: 'Seekers',
                url: '/tabs/seekers',
                direct: 'root',
                icon: 'information-circle-outline'
            },
            {
                title: 'Donor',
                url: '/tabs/donor',
                direct: 'root',
                icon: 'information-circle-outline'
            },
            {
                title: 'Notification',
                url: '/tabs/notification',
                direct: 'root',
                icon: 'information-circle-outline'
            },
            {
                title: 'Profile',
                url: '/tabs/profile',
                direct: 'root',
                icon: 'information-circle-outline'
            }
        ];
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.routeName = this.appPages.filter(function (page) { return page.url === _this.router.url; })[0].title;
    };
    TabsPage.prototype.getRouteName = function (routeName) {
        this.routeName = routeName;
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
                    }
                ]
            },
            {
                path: 'workers',
                children: [
                    {
                        path: '',
                        loadChildren: '../workers/workers.module#WorkersPageModule'
                    }
                ]
            },
            {
                path: 'seekers',
                children: [
                    {
                        path: '',
                        loadChildren: '../seekers/seekers.module#SeekersPageModule'
                    }
                ]
            },
            {
                path: 'donor',
                children: [
                    {
                        path: '',
                        loadChildren: '../donor/donor.module#DonorPageModule'
                    }
                ]
            },
            {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: '../notifications/notifications.module#NotificationsPageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map