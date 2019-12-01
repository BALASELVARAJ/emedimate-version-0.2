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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
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

module.exports = "\r\n<!-- begin header menu definition -->\r\n<ion-menu side=\"start\" type=\"overlay\" menuId=\"mainMenu\" class=\"main-menu\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"dark\"  class=\"user-profile\">\r\n      <ion-item margin-bottom>\r\n        <ion-avatar slot=\"start\" class=\"user-avatar\">\r\n          <img src=\"../../assets/images/avatar.jpeg\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-text color=\"medium\">\r\n            <h1><strong>Balaganesh</strong></h1>\r\n          </ion-text>\r\n          <ion-text color=\"secondary\">\r\n            <h3>\r\n             Chennai, INDIA\r\n            </h3>\r\n          </ion-text>\r\n          <ion-menu-toggle class=\"mto\" auto-hide=\"false\">\r\n            <a class=\"text08\" tappable (click)=\"goToEditProgile()\">\r\n              <ion-text color=\"primary\">\r\n                <ion-icon name=\"contact\"></ion-icon>\r\n                <strong>edit profile</strong>\r\n              </ion-text>\r\n            </a> <ion-text color=\"secondary\"> | </ion-text> \r\n            <a class=\"text08\" tappable (click)=\"logout()\">\r\n              <ion-text color=\"primary\">\r\n                <ion-icon name=\"log-out\"></ion-icon>\r\n                <strong>logout</strong>\r\n              </ion-text>\r\n            </a>\r\n          </ion-menu-toggle>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"bg-profile\">\r\n    <ion-list>\r\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n        <ion-item [routerLink]=\"[p.url]\" >\r\n          <ion-icon slot=\"start\" [name]=\"p.icon\" color=\"primary\"></ion-icon>\r\n          <ion-label>\r\n            {{p.title}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n  \r\n</ion-menu>\r\n<!-- end header menu definition -->\r\n<!-- begin header -->\r\n<ion-header no-border>\r\n  <ion-toolbar mode=\"ios\" color=\"dark\">\r\n    <ion-title>\r\n     Emedimates\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- end header -->\r\n<ion-tabs main>\r\n<!-- filler header --> \r\n<ion-header  no-border><ion-toolbar  color=\"dark\"></ion-toolbar></ion-header>\r\n  <ion-tab-bar slot=\"bottom\" color=\"dark\"> \r\n    <ion-tab-button tab=\"dashboard\">\r\n      <ion-icon name=\"flash\"></ion-icon>\r\n      <ion-label>dashboard</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"workers\">\r\n      <ion-icon name=\"apps\"></ion-icon>\r\n      <ion-label>Workers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"donor\">\r\n      <ion-icon name=\"apps\"></ion-icon>\r\n      <ion-label>Blood donor</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"notifications\">\r\n      <ion-icon name=\"send\"></ion-icon>\r\n      <ion-label>Notifications</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"profile\">\r\n      <ion-icon name=\"send\"></ion-icon>\r\n      <ion-label>Profile</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-header {\n  --background: linear-gradient(135deg, var(--ion-color-background), var(--ion-color-primary)); }\n\n:host ion-list.list-md {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXFJhanUgU1xcRGVza3RvcFxcRV9NRURJTUFURVNfQVBQXFxlbWVkaW1hdGUtdmVyc2lvbi0wLjIvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsNEZBQWEsRUFBQTs7QUFGckI7RUFPWSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0IHtcclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQpLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICAmLmxpc3QtbWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

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
    function TabsPage(router) {
        this.router = router;
        this.appPages = [
            {
                title: 'Login',
                url: '/login',
                direct: 'root',
                icon: 'log-in'
            },
            {
                title: 'Profile',
                url: '/tabs/profile',
                direct: 'root',
                icon: 'information-circle-outline'
            },
            {
                title: 'App Settings',
                url: '/settings',
                direct: 'forward',
                icon: 'cog'
            }
        ];
    }
    TabsPage.prototype.ngOnInit = function () {
        console.log(this.router.url);
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
                    },
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