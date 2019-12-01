(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
















var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: '', component: _notifications_page__WEBPACK_IMPORTED_MODULE_2__["NotificationsPage"] }])
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_2__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.html":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: scroll;\">\r\n  <div style=\"display: grid;grid-template-columns: repeat(1, 1fr);\">\r\n    <ion-card *ngFor=\"let launch of list_launches\">\r\n      <!-- <ion-card-header>\r\n      {{ launch.mission_name }}\r\n    </ion-card-header> -->\r\n      <ion-card-content>\r\n        <div class=\"flex\">\r\n          <div class=\"fleft\">\r\n            <ion-thumbnail item-start>\r\n              <img\r\n                src=\"data:image/jpeg;base64,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\">\r\n            </ion-thumbnail>\r\n          </div>\r\n          <div>\r\n            <div class=\"fs-17\">\r\n              {{ launch.mission_name }}\r\n            </div>\r\n            <div class=\"fs-12\">\r\n              chennai\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-backgroud), var(--ion-color-light)) !important; }\n\n:host ion-header {\n  --background: linear-gradient(135deg, var(--ion-color-backgroud), var(--ion-color-light)) !important; }\n\n.mat-table, .mat-paginator {\n  background: none !important; }\n\ntable {\n  width: 100%; }\n\ntr.mat-header-row {\n  height: 25px; }\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px; }\n\nth.mat-column-workerName, td.mat-column-workerName {\n  padding-left: 8px; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.fleft {\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9DOlxcVXNlcnNcXFJhanUgU1xcRGVza3RvcFxcRV9NRURJTUFURVNfQVBQXFxlbWVkaW1hdGUtdmVyc2lvbi0wLjIvc3JjXFxhcHBcXG5vdGlmaWNhdGlvbnNcXG5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsb0dBQWEsRUFBQTs7QUFGckI7RUFLUSxvR0FBYSxFQUFBOztBQUdyQjtFQUNJLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0MsaUJBQWlCLEVBQUE7O0FBSWxCO0VBQ0UsWUFBWSxFQUFBOztBQUlkO0VBRUUsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VkKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1oZWFkZXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWJhY2tncm91ZCksIHZhcigtLWlvbi1jb2xvci1saWdodCkpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1hdC10YWJsZSwubWF0LXBhZ2luYXRvcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VkKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSkgIWltcG9ydGFudDtcclxufVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICB0ci5tYXQtaGVhZGVyLXJvd3tcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICB0ZC5tYXQtY29sdW1uLXN0YXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1jb2x1bW4td29ya2VyTmFtZSwgdGQubWF0LWNvbHVtbi13b3JrZXJOYW1lIHtcclxuICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gXHJcbiAgLmZsZWZ0XHJcbiAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var WORKER_DATA = [
    {
        'id': '5d0e1b366d6cfc29512633a2',
        'donorName': 'Sanchez Kelley',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36c8b6c9b51d194cbc',
        'donorName': 'Ophelia Castro',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b366a09d09a2c719f81',
        'donorName': 'Noble Frye',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36062ee37dc2618b8f',
        'donorName': 'Lorene Carter',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36f2f3b24d03ff7e44',
        'donorName': 'Cardenas Hooper',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36550519c37efc7f81',
        'donorName': 'Ward Gordon',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36cfa97839d9957b3f',
        'donorName': 'Lang Lawrence',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36ffd56a3d886eed25',
        'donorName': 'Keller Cameron',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b363cc1bcee6b6a48f0',
        'donorName': 'Hattie Curtis',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36b25f7754a5b64994',
        'donorName': 'Livingston Porter',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36fab7a9e9db162bbb',
        'donorName': 'Millicent Beard',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b3629a303083e296608',
        'donorName': 'Adeline Mccoy',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b3626fce86dd569dc8d',
        'donorName': 'Gale Lindsey',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36665bf825b844cf4d',
        'donorName': 'Dudley Johnston',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b368d52ce0f27948055',
        'donorName': 'Raquel Dickerson',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b368822870b9fe7455c',
        'donorName': 'Riley Garcia',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36d500483d82a1b78e',
        'donorName': 'Concetta Sampson',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b3668e39a52065f3165',
        'donorName': 'Klein Pearson',
        'bloodGroup': 'B+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b36a6b12c5d167beb01',
        'donorName': 'Mitzi Schwartz',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b365ee4b767fd69676e',
        'donorName': 'Carmela Blair',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    },
    {
        'id': '5d0e1b3652f0f529fd84323c',
        'donorName': 'Esperanza Bright',
        'bloodGroup': 'AB+',
        'category': 'Donor'
    }
];
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(modalCtrl) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.displayedColumns = ['donorName', 'bloodGroup', 'category', 'star'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](WORKER_DATA);
        this.list_launches = [
            { mission_name: 'Rajkumar' }, { mission_name: 'Ramkumar' },
            { mission_name: 'Ranjith' }, { mission_name: 'Raja' },
            { mission_name: 'Ranji' }, { mission_name: 'Ramraj' },
            { mission_name: 'Rajkavi' }, { mission_name: 'Mani' },
            { mission_name: 'Rani' }, { mission_name: 'Banu' }
        ];
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], NotificationsPage.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], NotificationsPage.prototype, "paginator", void 0);
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map