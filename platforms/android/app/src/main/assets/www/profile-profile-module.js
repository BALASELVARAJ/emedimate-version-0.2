(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"] }])
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bgImg\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-3 col-sm-6\">\n\n            <div class=\"card hovercard\">\n                <div class=\"cardheader\">\n\n                </div>\n                <div class=\"avatar\">\n                  <img src=\"https://walkaboutfoundation.org/wp-content/uploads/2018/06/cropped-default-user.png\">\n                    <!-- <img alt=\"\" src=\"../../assets/images/background-images/default-user.jpg\"> -->\n                </div>\n                <div class=\"info\">\n                    <div class=\"title\">\n                        <a target=\"_blank\" href=\"https://scripteden.com/\">Raj kumar</a>\n                    </div>\n                    <div class=\"desc\">Doctor</div>\n                    <div class=\"desc\">Psychiatrist</div>\n                    <div class=\"desc\">Chennai-India</div>\n                    <div class=\"desc\"></div>\n                </div>               \n            </div>\n        </div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  padding-top: 20px;\n  margin: 10px 0 20px 0;\n  border-top-width: 0;\n  border-bottom-width: 2px;\n  border-radius: 3px;\n  box-shadow: none;\n  box-sizing: border-box; }\n\n.card .card-heading {\n  padding: 0 20px;\n  margin: 0; }\n\n.card .card-heading.simple {\n  font-size: 20px;\n  font-weight: 300;\n  color: #777;\n  border-bottom: 1px solid #e5e5e5; }\n\n.card .card-heading.image img {\n  display: inline-block;\n  width: 46px;\n  height: 46px;\n  margin-right: 15px;\n  vertical-align: top;\n  border: 0;\n  border-radius: 50%; }\n\n.card .card-heading.image .card-heading-header {\n  display: inline-block;\n  vertical-align: top; }\n\n.card .card-heading.image .card-heading-header h3 {\n  margin: 0;\n  font-size: 14px;\n  line-height: 16px;\n  color: #262626; }\n\n.card .card-heading.image .card-heading-header span {\n  font-size: 12px;\n  color: #999999; }\n\n.card .card-body {\n  padding: 0 20px;\n  margin-top: 20px; }\n\n.card .card-media {\n  padding: 0 20px;\n  margin: 0 -14px; }\n\n.card .card-media img {\n  max-width: 100%;\n  max-height: 100%; }\n\n.card .card-actions {\n  min-height: 30px;\n  padding: 0 20px 20px 20px;\n  margin: 20px 0 0 0; }\n\n.card .card-comments {\n  padding: 20px;\n  margin: 0;\n  background-color: #f8f8f8; }\n\n.card .card-comments .comments-collapse-toggle {\n  padding: 0;\n  margin: 0 20px 12px 20px; }\n\n.card .card-comments .comments-collapse-toggle a,\n.card .card-comments .comments-collapse-toggle span {\n  padding-right: 5px;\n  overflow: hidden;\n  font-size: 12px;\n  color: #999;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.card-comments .media-heading {\n  font-size: 13px;\n  font-weight: bold; }\n\n.card.people {\n  position: relative;\n  display: inline-block;\n  width: 170px;\n  height: 300px;\n  padding-top: 0;\n  margin-left: 20px;\n  overflow: hidden;\n  vertical-align: top; }\n\n.card.people:first-child {\n  margin-left: 0; }\n\n.card.people .card-top {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 170px;\n  height: 150px;\n  background-color: #ffffff; }\n\n.card.people .card-top.green {\n  background-color: #53a93f; }\n\n.card.people .card-top.blue {\n  background-color: #427fed; }\n\n.card.people .card-info {\n  position: absolute;\n  top: 150px;\n  display: inline-block;\n  width: 100%;\n  height: 101px;\n  overflow: hidden;\n  background: #ffffff;\n  box-sizing: border-box; }\n\n.card.people .card-info .title {\n  display: block;\n  margin: 8px 14px 0 14px;\n  overflow: hidden;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 18px;\n  color: #404040; }\n\n.card.people .card-info .desc {\n  display: block;\n  margin: 8px 14px 0 14px;\n  overflow: hidden;\n  font-size: 12px;\n  line-height: 16px;\n  color: #d8c4c4;\n  text-overflow: ellipsis; }\n\n.card.people .card-bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  padding: 10px 20px;\n  line-height: 29px;\n  text-align: center;\n  box-sizing: border-box; }\n\n.card.hovercard {\n  position: relative;\n  padding-top: 0;\n  overflow: hidden;\n  text-align: center; }\n\n.card.hovercard .cardheader {\n  background-size: cover;\n  height: 135px; }\n\n.card.hovercard .avatar {\n  position: relative;\n  top: -50px;\n  margin-bottom: -50px; }\n\n.card.hovercard .avatar img {\n  width: 100px;\n  height: 100px;\n  max-width: 100px;\n  max-height: 100px;\n  border-radius: 50%; }\n\n.card.hovercard .info {\n  padding: 4px 8px 10px; }\n\n.card.hovercard .info .title {\n  margin-bottom: 4px;\n  font-size: 24px;\n  line-height: 1;\n  color: #262626;\n  vertical-align: middle; }\n\n.card.hovercard .info .desc {\n  overflow: hidden;\n  font-size: 12px;\n  line-height: 20px;\n  color: #d8c4c4;\n  text-overflow: ellipsis;\n  font-family: Roboto; }\n\n.card.hovercard .bottom {\n  padding: 0 20px;\n  margin-bottom: 17px; }\n\n.btn {\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  line-height: 18px; }\n\n.bgImg {\n  background-image: url('background.jpg');\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\na {\n  color: white;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htc3BsL0Rlc2t0b3AvbXlBcHAvZW1lZGltYXRlLXZlcnNpb24tMC4yL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFFckIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUd4QixrQkFBa0I7RUFHbEIsZ0JBQWdCO0VBR2hCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGVBQWU7RUFDZixTQUFTLEVBQUE7O0FBR2I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFHVCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksU0FBUztFQUNULGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLFNBQVM7RUFDVCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCLEVBQUE7O0FBRzVCOztFQUVJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBR25CLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBR2xCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUl0QjtFQUVJLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFHakIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUtyQjtFQUNJLHVDQUE2RTtFQUM3RSxZQUFZO0VBRVosc0NBQUE7RUFDQSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFlBQVk7RUFDWixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMjQsIDIyNiwgMC4yKTtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGluZyB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGluZy5zaW1wbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuXG4uY2FyZCAuY2FyZC1oZWFkaW5nLmltYWdlIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0NnB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXI6IDA7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2FyZCAuY2FyZC1oZWFkaW5nLmltYWdlIC5jYXJkLWhlYWRpbmctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGluZy5pbWFnZSAuY2FyZC1oZWFkaW5nLWhlYWRlciBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogIzI2MjYyNjtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGluZy5pbWFnZSAuY2FyZC1oZWFkaW5nLWhlYWRlciBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5jYXJkIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZCAuY2FyZC1tZWRpYSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbjogMCAtMTRweDtcbn1cblxuLmNhcmQgLmNhcmQtbWVkaWEgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQgLmNhcmQtYWN0aW9ucyB7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbn1cblxuLmNhcmQgLmNhcmQtY29tbWVudHMge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG5cbi5jYXJkIC5jYXJkLWNvbW1lbnRzIC5jb21tZW50cy1jb2xsYXBzZS10b2dnbGUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDIwcHggMTJweCAyMHB4O1xufVxuXG4uY2FyZCAuY2FyZC1jb21tZW50cyAuY29tbWVudHMtY29sbGFwc2UtdG9nZ2xlIGEsXG4uY2FyZCAuY2FyZC1jb21tZW50cyAuY29tbWVudHMtY29sbGFwc2UtdG9nZ2xlIHNwYW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzk5OTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FyZC1jb21tZW50cyAubWVkaWEtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC5wZW9wbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY2FyZC5wZW9wbGU6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uY2FyZC5wZW9wbGUgLmNhcmQtdG9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jYXJkLnBlb3BsZSAuY2FyZC10b3AuZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2E5M2Y7XG59XG5cbi5jYXJkLnBlb3BsZSAuY2FyZC10b3AuYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyN2ZlZDtcbn1cblxuLmNhcmQucGVvcGxlIC5jYXJkLWluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXJkLnBlb3BsZSAuY2FyZC1pbmZvIC50aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA4cHggMTRweCAwIDE0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICM0MDQwNDA7XG59XG5cbi5jYXJkLnBlb3BsZSAuY2FyZC1pbmZvIC5kZXNjIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDhweCAxNHB4IDAgMTRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogI2Q4YzRjNDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNhcmQucGVvcGxlIC5jYXJkLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNhcmQuaG92ZXJjYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIyNCwgMjI2LCAwLjIpO1xufVxuXG4uY2FyZC5ob3ZlcmNhcmQgLmNhcmRoZWFkZXIge1xuICAgIC8vIGJhY2tncm91bmQ6IHVybChcImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS84NTAvMjgwL25hdHVyZS80L1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTM1cHg7XG59XG5cbi5jYXJkLmhvdmVyY2FyZCAuYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbn1cblxuLmNhcmQuaG92ZXJjYXJkIC5hdmF0YXIgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvLyBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5jYXJkLmhvdmVyY2FyZCAuaW5mbyB7XG4gICAgcGFkZGluZzogNHB4IDhweCAxMHB4O1xufVxuXG4uY2FyZC5ob3ZlcmNhcmQgLmluZm8gLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYXJkLmhvdmVyY2FyZCAuaW5mbyAuZGVzYyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNkOGM0YzQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLmNhcmQuaG92ZXJjYXJkIC5ib3R0b20ge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuXG4uYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG5cblxuLmJnSW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        })
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map