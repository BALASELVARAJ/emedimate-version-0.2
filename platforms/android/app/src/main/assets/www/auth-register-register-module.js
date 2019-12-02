(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"],{

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/auth/register/register.page.html":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content  padding class=\"login auth-page\" >\n    <div class=\"auth-content\">\n        <div padding-horizontal text-center>\n            <div class=\"logo\"></div>\n            <h3 no-margin>\n              <ion-text color=\"dark\" class=\"fw700\">\n                Create an Account\n              </ion-text>\n            </h3>\n          </div>\n        <!-- Register form -->\n        <form [formGroup]=\"onRegisterForm\"  (submit)=\"onRegister()\" class=\"list-form\">\n            <!-- <input type=\"file\" id=\"fileLoader\" #fileLoader name=\"files\" title=\"Load File\" hidden />\n            <ion-buttons>\n                <button ion-button icon-left (click)=\"presentActionSheet(fileLoader)\">\n                  <ion-icon name=\"camera\"></ion-icon>Select Image\n                </button>\n                <button ion-button icon-left (click)=\"removePic()\" [disabled]=\"uploadImage === null\">\n                  <ion-icon name=\"trash\"></ion-icon>Remove\n                </button>\n              </ion-buttons>\n              {{uploadImage}}\n              <span *ngIf=\"uploadImage != null\">\n                  <img id=\"checkinImage\" [src]=\"uploadImage\" (load)=\"imageLoaded()\" /> \n                </span> -->\n\n                <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\n                  <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n                  Select Image</ion-button>\n          <ion-grid>\n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n                Name\n              </ion-label>\n              <ion-input color=\"dark\" type=\"text\" formControlName=\"name\"></ion-input>\n            </ion-item>\n            <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('name').touched && onRegisterForm.get('name').hasError('required')\">\n              <ion-text color=\"warning\">\n                Required Field\n              </ion-text>\n            </p>\n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n                Password\n              </ion-label>\n              <ion-input color=\"dark\" type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <p ion-text color=\"warning\" class=\"text08\"\n              *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\n              <ion-text color=\"warning\">\n                Required Field\n              </ion-text>\n            </p>\n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n              Confirm Password\n              </ion-label>\n              <ion-input color=\"dark\" type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n                Age\n              </ion-label>\n              <ion-input color=\"dark\" type=\"text\" formControlName=\"age\"></ion-input>\n            </ion-item>\n            <ion-item justify-content-center>\n                <ion-label position=\"floating\">Gender</ion-label>\n                <ion-select formControlName=\"gender\" >\n                  <ion-select-option  *ngFor=\"let gender of gender\" [value]=\"gender.id\">\n                    {{gender.name}}\n                  </ion-select-option >\n               </ion-select>\n              </ion-item>\n           \n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n                country\n              </ion-label>\n              <ion-select formControlName=\"country\">\n                <ion-select-option  *ngFor=\"let country of country\" [value]=\"country.id\">\n                  {{country.name}}\n                </ion-select-option >\n             </ion-select>\n           \n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n                city\n              </ion-label>\n              <ion-select formControlName=\"city\" >\n                <ion-select-option  *ngFor=\"let city of city\" [value]=\"city.id\">\n                  {{city.name}}\n                </ion-select-option >\n             </ion-select>\n             \n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n                Contact Number\n              </ion-label>\n              <ion-input color=\"dark\" type=\"text\" formControlName=\"contactNo\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n                Professional Type\n              </ion-label>\n              <ion-select formControlName=\"pType\" [(ngModel)]=\"ProfessionalType\">\n                <ion-select-option *ngFor=\"let pType of pType\" [value]=\"pType.id\">\n                  {{pType.name}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center *ngIf = \"onRegisterForm.value.pType === 1\">\n              <ion-label position=\"floating\">\n               Education\n              </ion-label>\n              <ion-input color=\"dark\" type=\"text\" formControlName=\"education\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center *ngIf = \"onRegisterForm.value.pType === 1\">\n              <ion-label position=\"floating\">\n                Speciality\n              </ion-label>\n              <ion-input color=\"dark\" type=\"text\" formControlName=\"speciality\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center *ngIf = \"onRegisterForm.value.pType === 1\">\n              <ion-label position=\"floating\">\n               Employement Type\n              </ion-label>\n             \n                <ion-select formControlName=\"etype\">\n                  <ion-select-option *ngFor=\"let eType of eType\" [value]=\"eType.id\">\n                    {{eType.name}}\n                  </ion-select-option>\n                </ion-select>\n              \n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center *ngIf = \"onRegisterForm.value.pType === 1\">\n              <ion-label position=\"floating\">\n                Clinic or Institution Name\n              </ion-label>\n              <ion-input color=\"dark\" type=\"text\" formControlName=\"cName\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center>\n              <ion-label position=\"floating\">\n                Blood Donor\n              </ion-label>\n              \n              <ion-select formControlName=\"bloodDonor\">\n                <ion-select-option *ngFor=\"let bloodyes of bloodyes\" [value]=\"bloodyes.id\">\n                  {{bloodyes.name}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item class=\"animated fadeInUp\" justify-content-center *ngIf = \"onRegisterForm.value.bloodDonor === 1\">\n              <ion-label position=\"floating\">\n                Blood Group\n              </ion-label>\n              <ion-select formControlName=\"bloodGrp\"  >\n                <ion-select-option *ngFor=\"let bloodGrp of bloodGrp\" [value]=\"bloodGrp.id\">\n                  {{bloodGrp.name}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div padding>\n              <ion-button size=\"large\" color=\"dark\" type=\"submit\" [disabled]=\"onRegisterForm.invalid\"  expand=\"block\">Register</ion-button>\n            </div>\n          </ion-grid>\n          <div text-center margin-top>\n              <span (click)=\"goToLogin()\" tappable>\n                <ion-text color=\"dark\">\n                  <strong>I have an account!</strong>\n                </ion-text>\n              </span>\n            </div>\n        </form>\n    </div>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/register/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/register/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var src_app_services_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/toast */ "./src/app/services/toast.ts");
/* harmony import */ var src_app_api_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/api/api */ "./src/app/api/api.ts");













var STORAGE_KEY = 'my_images';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, navCtrl, camera, file, http, webview, actionSheetController, toastController, storage, platform, loadingController, ref, filePath, _toast, api) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.platform = platform;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this._toast = _toast;
        this.api = api;
        this.images = [];
        this.gender = [
            {
                id: 1,
                name: 'Male'
            },
            {
                id: 2,
                name: 'Female'
            }
        ];
        this.country = [
            {
                id: 1,
                name: 'India'
            },
            {
                id: 2,
                name: 'Srilanka'
            }
        ];
        this.State = [
            {
                id: 1,
                name: 'Tamilnadu'
            },
            {
                id: 2,
                name: 'Kerala'
            }
        ];
        this.city = [
            {
                id: 1,
                name: 'Chennai'
            },
            {
                id: 2,
                name: 'Trichy'
            }
        ];
        this.pType = [
            {
                id: 1,
                name: 'Worker'
            },
            {
                id: 2,
                name: 'Seeker'
            }
        ];
        this.eType = [
            {
                id: 1,
                name: 'Employee'
            },
            {
                id: 2,
                name: 'Employer'
            }
        ];
        this.bloodyes = [
            {
                id: 1,
                name: 'Yes'
            },
            {
                id: 2,
                name: 'No'
            }
        ];
        this.bloodGrp = [
            {
                id: 1,
                name: 'O+ve'
            },
            {
                id: 2,
                name: 'O-ve'
            },
            {
                id: 3,
                name: 'B+ve'
            }
        ];
    }
    RegisterPage.prototype.compareFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    RegisterPage.prototype.ngOnInit = function () {
        this.onRegisterForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'confirmPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'age': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'country': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'city': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'contactNo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'pType': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'education': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'speciality': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'etype': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'cName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'bloodDonor': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'bloodGrp': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    };
    RegisterPage.prototype.onRegister = function () {
        console.log(this.onRegisterForm.value);
        this.registerData = this.onRegisterForm.value;
        this.api.register(this.registerData).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/login');
    };
    RegisterPage.prototype.presentActionSheet = function (fileLoader) {
        fileLoader.click();
        var that = this;
        fileLoader.onchange = function () {
            var file = fileLoader.files[0];
            console.log(file, 'file:::');
            var reader = new FileReader();
            this.uploadImage = reader.result;
            console.log(reader);
            console.log(this.uploadImage);
            reader.addEventListener("load", function () {
                that.processing = true;
                that.getOrientation(fileLoader.files[0], function (orientation) {
                    if (orientation > 1) {
                        that.resetOrientation(reader.result, orientation, function (resetBase64Image) {
                            //  this.uploadImage = resetBase64Image;
                        });
                    }
                    else {
                        // this.uploadImage = reader.result;
                    }
                });
            }, false);
            if (file) {
                reader.readAsDataURL(file);
            }
        };
    };
    RegisterPage.prototype.imageLoaded = function () {
        this.processing = false;
    };
    RegisterPage.prototype.getOrientation = function (file, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var view = new DataView(e.target.result);
            if (view.getUint16(0, false) != 0xFFD8)
                return callback(-2);
            var length = view.byteLength, offset = 2;
            while (offset < length) {
                var marker = view.getUint16(offset, false);
                offset += 2;
                if (marker == 0xFFE1) {
                    if (view.getUint32(offset += 2, false) != 0x45786966)
                        return callback(-1);
                    var little = view.getUint16(offset += 6, false) == 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    var tags = view.getUint16(offset, little);
                    offset += 2;
                    for (var i = 0; i < tags; i++)
                        if (view.getUint16(offset + (i * 12), little) == 0x0112)
                            return callback(view.getUint16(offset + (i * 12) + 8, little));
                }
                else if ((marker & 0xFF00) != 0xFF00)
                    break;
                else
                    offset += view.getUint16(offset, false);
            }
            return callback(-1);
        };
        reader.readAsArrayBuffer(file);
    };
    RegisterPage.prototype.resetOrientation = function (srcBase64, srcOrientation, callback) {
        var img = new Image();
        img.onload = function () {
            var width = img.width, height = img.height, canvas = document.createElement('canvas'), ctx = canvas.getContext("2d");
            // set proper canvas dimensions before transform & export
            if (4 < srcOrientation && srcOrientation < 9) {
                canvas.width = height;
                canvas.height = width;
            }
            else {
                canvas.width = width;
                canvas.height = height;
            }
            // transform context before drawing image
            switch (srcOrientation) {
                case 2:
                    ctx.transform(-1, 0, 0, 1, width, 0);
                    break;
                case 3:
                    ctx.transform(-1, 0, 0, -1, width, height);
                    break;
                case 4:
                    ctx.transform(1, 0, 0, -1, 0, height);
                    break;
                case 5:
                    ctx.transform(0, 1, 1, 0, 0, 0);
                    break;
                case 6:
                    ctx.transform(0, 1, -1, 0, height, 0);
                    break;
                case 7:
                    ctx.transform(0, -1, -1, 0, height, width);
                    break;
                case 8:
                    ctx.transform(0, -1, 1, 0, 0, width);
                    break;
                default: break;
            }
            // draw image
            ctx.drawImage(img, 0, 0);
            // export base64
            callback(canvas.toDataURL());
        };
        img.src = srcBase64;
    };
    RegisterPage.prototype.removePic = function () {
        this.uploadImage = null;
    };
    RegisterPage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    RegisterPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    RegisterPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    RegisterPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this._toast.presentToast('Error while storing file.', 505, null);
        });
    };
    RegisterPage.prototype.updateStoredImages = function (name) {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            if (!arr) {
                var newImages = [name];
                _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            _this.images = [newEntry].concat(_this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
        });
    };
    RegisterPage.prototype.deleteImage = function (imgEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
                _this._toast.presentToast('File removed.', null, null);
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"], src_app_services_toast__WEBPACK_IMPORTED_MODULE_10__["ToastServices"],
            src_app_api_api__WEBPACK_IMPORTED_MODULE_11__["ApiProvider"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-register-register-module.js.map