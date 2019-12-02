(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");
/* harmony import */ var src_app_services_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/interceptor */ "./src/app/services/interceptor.ts");
/* harmony import */ var src_app_api_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/api */ "./src/app/api/api.ts");
/* harmony import */ var src_app_services_device__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/device */ "./src/app/services/device.ts");
/* harmony import */ var src_app_services_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/user */ "./src/app/services/user.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var src_app_services_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/toast */ "./src/app/services/toast.ts");
/* harmony import */ var src_app_services_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/loader */ "./src/app/services/loader.ts");















var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: src_app_services_interceptor__WEBPACK_IMPORTED_MODULE_8__["InterceptorProvider"], multi: true },
                src_app_api_api__WEBPACK_IMPORTED_MODULE_9__["ApiProvider"],
                src_app_services_device__WEBPACK_IMPORTED_MODULE_10__["DeviceServices"],
                src_app_services_user__WEBPACK_IMPORTED_MODULE_11__["UserProvider"],
                _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__["Device"],
                src_app_services_toast__WEBPACK_IMPORTED_MODULE_13__["ToastServices"],
                src_app_services_loader__WEBPACK_IMPORTED_MODULE_14__["LoaderServices"],
                src_app_services_device__WEBPACK_IMPORTED_MODULE_10__["DeviceServices"],
                src_app_services_interceptor__WEBPACK_IMPORTED_MODULE_8__["InterceptorProvider"]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.page.html":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\n  <div class=\"theme-bg\"></div>\n  <div class=\"auth-content\">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\n      <div class=\"logo\"></div>\n      <h4 no-margin>\n        <ion-text color=\"dark\" class=\"fw700\">\n          Emedimates\n        </ion-text>\n      </h4>\n    </div>\n\n    <!-- Login form -->\n    <form [formGroup]=\"onLoginForm\" class=\"list-form\" (submit)=\"submit()\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          Email\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onLoginForm.get('email').touched && onLoginForm.get('email').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          Password\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n        <ion-input clearOnEdit=\"false\" #input  [type]=\"passwordType\" \n        formControlName=\"password\" *ngIf=\"userDevice != 'Android'\"></ion-input>\n        <button *ngIf=\"userDevice != 'Android'\" ion-button clear color=\"dark\" type=\"button\" item-right class=\"passwordIcon\" (click)=\"hideShowPassword(input)\">\n          <ion-icon [name]=\"passwordIcon\"> </ion-icon>\n        </button>\n\n      </ion-item>\n      <p ion-text color=\"warning\" class=\"text08\" *ngIf=\"onLoginForm.get('password').touched && onLoginForm.get('password').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n        </p>\n    </form>\n   \n  \n    <p text-right tappable (click)=\"forgotPass()\" class=\"paz\">\n      <ion-text color=\"dark\">\n        <strong>Forgot Password?</strong>\n      </ion-text>\n    </p>\n    <div>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\"  [disabled]=\"!onLoginForm.valid\" tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        Signin\n      </ion-button>\n    </div>\n    \n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span (click)=\"goToRegister()\" class=\"paz\" tappable>\n        <ion-text color=\"dark\">\n          New here? <strong>Sign Up</strong>\n        </ion-text>\n      </span>\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paz {\n  position: relative;\n  z-index: 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htc3BsL0Rlc2t0b3AvbXlBcHAvZW1lZGltYXRlLXZlcnNpb24tMC4yL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdCB7XHJcbi8vICAgICBpb24tY29udGVudCB7XHJcbi8vICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VkKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5wYXoge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/device */ "./src/app/services/device.ts");
/* harmony import */ var src_app_services_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader */ "./src/app/services/loader.ts");
/* harmony import */ var src_app_api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/api */ "./src/app/api/api.ts");
/* harmony import */ var src_app_services_encryption__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/encryption */ "./src/app/services/encryption.ts");
/* harmony import */ var src_app_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user */ "./src/app/services/user.ts");
/* harmony import */ var src_app_services_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast */ "./src/app/services/toast.ts");











var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, _deviceServices, platform, _loader, _encrypt, _apiService, _userInfo, _toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this._deviceServices = _deviceServices;
        this._loader = _loader;
        this._encrypt = _encrypt;
        this._apiService = _apiService;
        this._userInfo = _userInfo;
        this._toast = _toast;
        this.isSignIn = false;
        this.isPass = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        console.log(this._deviceServices);
        platform.ready().then(function (source) {
            _this.userDevice = _this._deviceServices.deviceInfo.platform;
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
        this.onLoginForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    };
    LoginPage.prototype.forgotPass = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Forgot Password?',
                            message: 'Enter you email address to send a reset link password.',
                            inputs: [
                                {
                                    name: 'email',
                                    type: 'email',
                                    placeholder: 'Email'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var loader;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.loadingCtrl.create({
                                                        duration: 2000
                                                    })];
                                                case 1:
                                                    loader = _a.sent();
                                                    loader.present();
                                                    loader.onWillDismiss().then(function (l) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var toast;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                                                        showCloseButton: true,
                                                                        message: 'Email was sended successfully.',
                                                                        duration: 3000,
                                                                        position: 'bottom'
                                                                    })];
                                                                case 1:
                                                                    toast = _a.sent();
                                                                    toast.present();
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // // //
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.navigateRoot('/register');
    };
    LoginPage.prototype.hideShowPassword = function (input) {
        console.log('input', input);
        // input.setFocus();
        this.isPass = !this.isPass;
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.submit = function () {
        var signInData = {};
        this._encrypt.convert(this.onLoginForm.controls.password.value);
        if (this._deviceServices.deviceInfo.platform == 'Android' || this._deviceServices.deviceInfo.platform == 'iOS') {
            signInData = {
                emailID: this.onLoginForm.controls.email.value,
                password: this.onLoginForm.controls.password.value,
                deviceID: this._deviceServices.deviceInfo.id,
                deviceToken: this._deviceServices.deviceInfo.id,
                osName: this._deviceServices.deviceInfo.os,
                modelName: this._deviceServices.deviceInfo.model,
                osVersion: this._deviceServices.deviceInfo.version,
                platform: this._deviceServices.deviceInfo.platform
            };
        }
        else {
            signInData = {
                emailID: this.onLoginForm.controls.email.value,
                password: this.onLoginForm.controls.password.value,
                deviceID: "",
                deviceToken: "",
                osName: "",
                modelName: "",
                osVersion: "",
                platform: ""
            };
        }
        this.signIn(signInData);
    };
    LoginPage.prototype.signIn = function (signInData) {
        var _this = this;
        var signedInData = {};
        this.isSignIn = true;
        this._loader.presentLoading();
        this._apiService.signIn(signInData)
            .subscribe(function (data) {
            _this.isSignIn = false;
            _this._loader.dissmiss();
            if (data.statusCode == 200) {
                data["issued"] = data[".issued"];
                delete data[".issued"];
                data["expired"] = data[".expired"];
                delete data[".expired"];
                signedInData = {
                    access_token: data.access_token,
                    token_type: data.token_type,
                    expires_in: data.expires_in,
                    emailID: data.emailID,
                    UserID: data.UserID,
                    roleID: data.roleID,
                    deviceID: data.deviceID,
                    isChangePassword: data.isChangePassword,
                    issued: data.issued,
                    expired: data.expired
                };
                _this._userInfo.updateSignedInData(signedInData);
                // this._userInfo.updateSignInData(signInData);
                if (_this._userInfo.IsChangePassword == "false") {
                    _this.navCtrl.navigateRoot('/register');
                }
                else {
                    _this.navCtrl.navigateRoot('/tabs');
                }
            }
            else {
                _this._toast.presentToast(data.statusMessage, data.statusCode, "");
            }
        }, function (err) {
            _this._loader.dissmiss();
            _this.isSignIn = false;
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_device__WEBPACK_IMPORTED_MODULE_4__["DeviceServices"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            src_app_services_loader__WEBPACK_IMPORTED_MODULE_5__["LoaderServices"],
            src_app_services_encryption__WEBPACK_IMPORTED_MODULE_7__["EncryptionServices"],
            src_app_api_api__WEBPACK_IMPORTED_MODULE_6__["ApiProvider"],
            src_app_services_user__WEBPACK_IMPORTED_MODULE_8__["UserProvider"],
            src_app_services_toast__WEBPACK_IMPORTED_MODULE_9__["ToastServices"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module.js.map