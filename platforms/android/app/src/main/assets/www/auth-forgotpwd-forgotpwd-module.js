(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-forgotpwd-forgotpwd-module"],{

/***/ "./src/app/auth/forgotpwd/forgotpwd.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/forgotpwd/forgotpwd.module.ts ***!
  \****************************************************/
/*! exports provided: ForgotpwdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwdPageModule", function() { return ForgotpwdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpwd.page */ "./src/app/auth/forgotpwd/forgotpwd.page.ts");







var routes = [
    {
        path: '',
        component: _forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpwdPage"]
    }
];
var ForgotpwdPageModule = /** @class */ (function () {
    function ForgotpwdPageModule() {
    }
    ForgotpwdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpwdPage"]]
        })
    ], ForgotpwdPageModule);
    return ForgotpwdPageModule;
}());



/***/ }),

/***/ "./src/app/auth/forgotpwd/forgotpwd.page.html":
/*!****************************************************!*\
  !*** ./src/app/auth/forgotpwd/forgotpwd.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>forgotpwd</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/auth/forgotpwd/forgotpwd.page.scss":
/*!****************************************************!*\
  !*** ./src/app/auth/forgotpwd/forgotpwd.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#alert-1-hdr {\n  font-weight: bold !important; }\n\n#alert-2-msg {\n  font-size: medium; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3Rwd2QvQzpcXFVzZXJzXFxSYWp1IFNcXERlc2t0b3BcXEVfTUVESU1BVEVTX0FQUFxcZW1lZGltYXRlLXZlcnNpb24tMC4yL3NyY1xcYXBwXFxhdXRoXFxmb3Jnb3Rwd2RcXGZvcmdvdHB3ZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEIsRUFBQTs7QUFFaEM7RUFFSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290cHdkL2ZvcmdvdHB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnQtMS1oZHJ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyAgIFxyXG59XHJcbiNhbGVydC0yLW1zZ1xyXG57XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/forgotpwd/forgotpwd.page.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/forgotpwd/forgotpwd.page.ts ***!
  \**************************************************/
/*! exports provided: ForgotpwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwdPage", function() { return ForgotpwdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotpwdPage = /** @class */ (function () {
    function ForgotpwdPage() {
    }
    ForgotpwdPage.prototype.ngOnInit = function () {
    };
    ForgotpwdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpwd',
            template: __webpack_require__(/*! ./forgotpwd.page.html */ "./src/app/auth/forgotpwd/forgotpwd.page.html"),
            styles: [__webpack_require__(/*! ./forgotpwd.page.scss */ "./src/app/auth/forgotpwd/forgotpwd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotpwdPage);
    return ForgotpwdPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-forgotpwd-forgotpwd-module.js.map