(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-template-default>\r\n  <ng-container header>\r\n    Formulário <br> para compra de <br><b>Pacote de Stickers</b>\r\n  </ng-container>\r\n\r\n  <form [formGroup]=\"stickersForm\">\r\n    <label>Quais stickers?</label>\r\n    <app-input-checkbox formControlName=\"stickers\"\r\n      [error]=\"error === true && stickersForm.controls['stickers'].invalid === true ? true : false\">\r\n    </app-input-checkbox>\r\n\r\n    <label>Quantos stickers de cada?</label>\r\n    <app-input-number formControlName=\"amount\"\r\n      [error]=\"error === true && stickersForm.controls['amount'].invalid === true ? true : false\"></app-input-number>\r\n\r\n    <label>Observações:</label>\r\n    <textarea placeholder=\"Alguma dúvida? Recado?\" formControlName=\"note\"></textarea>\r\n  </form>\r\n\r\n  <ng-container msg>\r\n    <div class=\"msg-successfully\" [ngClass]=\"{'show': showMsg}\">\r\n      Formulário enviado com sucesso!\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container button>\r\n    <app-button [disabled]=\"stickersForm.invalid\" [label]=\"'Enviar'\" (press)=\"submit()\"></app-button>\r\n  </ng-container>\r\n</app-template-default>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/button/button.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/button/button.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [ngClass]=\"{'disabled': disabled}\" (click)=\"press.emit()\">{{ label }}</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-checkbox/input-checkbox.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/input-checkbox/input-checkbox.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let checkbox of checkboxes\">\r\n  <div class=\"container\">\r\n    <input type=\"checkbox\" [ngClass]=\"{'invalid': error}\" #selectedCheckbox\r\n      (click)=\"setChecked(checkbox.label, selectedCheckbox.checked)\" [id]=\"checkbox.label\" [value]=\"checkbox.label\"\r\n      [checked]=\"checkbox.checked\">\r\n    <label [for]=\"checkbox.label\">{{ checkbox.label }}</label>\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-number/input-number.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/input-number/input-number.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [ngClass]=\"{'disabled': counter === 0 || counter === null}\" (click)=\"subtract();\">\r\n  <div>-</div>\r\n</button>\r\n\r\n<div class=\"counter\">\r\n  <input type=\"number\" [ngClass]=\"{'invalid': error}\" [value]=\"counter\" #inputNumber (keyup)=\"digit(inputNumber)\">\r\n</div>\r\n\r\n<button (click)=\"add();\">\r\n  <div>+</div>\r\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/templates/default/default.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/templates/default/default.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header>\r\n    <h1>\r\n      <ng-content select=\"[header]\"></ng-content>\r\n    </h1>\r\n  </header>\r\n  <main>\r\n    <div class=\"fields-container\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <footer>\r\n      <div class=\"msg\">\r\n        <ng-content select=\"[msg]\"></ng-content>\r\n      </div>\r\n      <ng-content select=\"[button]\"></ng-content>\r\n    </footer>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "b {\n  margin-top: 5px;\n  display: block;\n  font-weight: 900;\n  font-family: \"inter\";\n}\n\nlabel {\n  margin-bottom: 15px;\n  display: block;\n  font-weight: 600;\n  color: #071723;\n  font-size: 18px;\n}\n\n.msg-successfully {\n  color: #00C57C;\n  font-weight: 600;\n  font-size: 18px;\n  transition: visibility 0.5s linear, opacity 0.5s linear;\n  visibility: hidden;\n  opacity: 0;\n}\n\n@media only screen and (max-width: 565px) {\n  .msg-successfully {\n    font-size: 14px;\n  }\n}\n\n.msg-successfully.show {\n  visibility: visible;\n  opacity: 1;\n}\n\ntextarea {\n  all: unset;\n  width: 100%;\n  position: relative;\n  background: #DDE3E9;\n  border: 1px solid #2F3676;\n  border-radius: 4px;\n  padding: 16px;\n  box-sizing: border-box;\n  height: 141px;\n  font-size: 14px;\n}\n\napp-input-checkbox,\napp-input-number {\n  margin-bottom: 32px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGFuZ3VsYXJcXDIwLTEwLTIwMTktc2l0ZS1jb21wcmEtc3RpY2tlcnMtYW5ndWxhcjgtZ2l0LWlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0U7RUFSRjtJQVNJLGVBQUE7RUNFRjtBQUNGOztBREFFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDRUo7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTs7RUFFRSxtQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImIge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnaW50ZXInO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDcxNzIzO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm1zZy1zdWNjZXNzZnVsbHkge1xyXG4gIGNvbG9yOiAjMDBDNTdDO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cyBsaW5lYXIsIG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY1cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gICYuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBhbGw6IHVuc2V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjRERFM0U5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyRjM2NzY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDE0MXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuYXBwLWlucHV0LWNoZWNrYm94LFxyXG5hcHAtaW5wdXQtbnVtYmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiYiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcImludGVyXCI7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDcxNzIzO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tc2ctc3VjY2Vzc2Z1bGx5IHtcbiAgY29sb3I6ICMwMEM1N0M7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzIGxpbmVhciwgb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjVweCkge1xuICAubXNnLXN1Y2Nlc3NmdWxseSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4ubXNnLXN1Y2Nlc3NmdWxseS5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxudGV4dGFyZWEge1xuICBhbGw6IHVuc2V0O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjRERFM0U5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkYzNjc2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTQxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYXBwLWlucHV0LWNoZWNrYm94LFxuYXBwLWlucHV0LW51bWJlciB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, isValidAmount, isValidCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidAmount", function() { return isValidAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCheckbox", function() { return isValidCheckbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_mocky_mocky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocky/mocky */ "./src/mocky/mocky.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.showMsg = false;
        this.stickersForm = this.fb.group({
            stickers: [src_mocky_mocky__WEBPACK_IMPORTED_MODULE_2__["labelCheckbox"], [isValidCheckbox]],
            amount: [0, [isValidAmount]],
            note: [''],
        });
    }
    AppComponent.prototype.submit = function () {
        var _this = this;
        if (this.stickersForm.invalid) {
            this.error = true;
        }
        else {
            this.showMsg = true;
            setTimeout(function () { return _this.showMsg = false; }, 1500);
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

function isValidAmount(control) {
    return control.value === 0 || control.value === null ? { invalid: true } : null;
}
function isValidCheckbox(control) {
    var counter = 0;
    control.value.map(function (res) {
        if (res.checked === false) {
            counter++;
        }
    });
    return counter === control.value.length ? { invalid: true } : null;
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/input-number/input-number.component */ "./src/app/shared/components/input-number/input-number.component.ts");
/* harmony import */ var _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/input-checkbox/input-checkbox.component */ "./src/app/shared/components/input-checkbox/input-checkbox.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _shared_templates_default_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/templates/default/default.component */ "./src/app/shared/templates/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__["InputNumberComponent"],
                _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["InputCheckboxComponent"],
                _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
                _shared_templates_default_default_component__WEBPACK_IMPORTED_MODULE_7__["DefaultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [
                _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["InputCheckboxComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/components/button/button.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  width: 133px;\n  height: 37px;\n  font-weight: bold;\n  background: #2F3676;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 7px;\n  text-transform: uppercase;\n  transition: 0.4s all;\n  font-size: 18px;\n}\nbutton:hover {\n  background: #191847;\n  cursor: pointer;\n  border: 2px solid #2F3676;\n}\nbutton.disabled {\n  background: #C5CFD6;\n  color: #555555;\n  border: 2px solid #555555;\n}\nbutton.disabled:hover {\n  cursor: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0M6XFxhbmd1bGFyXFwyMC0xMC0yMDE5LXNpdGUtY29tcHJhLXN0aWNrZXJzLWFuZ3VsYXI4LWdpdC1pby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxidXR0b25cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0RGO0FER0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0RKO0FESUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0ZKO0FESUk7RUFDRSxhQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhbGV0dGUvcGFsZXR0ZVwiO1xyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTMzcHg7XHJcbiAgaGVpZ2h0OiAzN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3RoZW1lJywgMSk7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdhY3Rpb25zJywgJ2hvdmVyJyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwYWxldHRlLWNvbG9yKCd0aGVtZScsIDEpO1xyXG4gIH1cclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdhY3Rpb25zJywgJ2Rpc2FibGVkJyk7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogdW5zZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiYnV0dG9uIHtcbiAgd2lkdGg6IDEzM3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjMkYzNjc2O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTkxODQ3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyRjM2NzY7XG59XG5idXR0b24uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjQzVDRkQ2O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTU1NTtcbn1cbmJ1dHRvbi5kaXNhYmxlZDpob3ZlciB7XG4gIGN1cnNvcjogdW5zZXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/button/button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.press = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ButtonComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ButtonComponent.prototype, "press", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/shared/components/button/button.component.scss")]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/input-checkbox/input-checkbox.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/input-checkbox/input-checkbox.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  margin-bottom: 8px;\n}\n.container label {\n  font-size: 14px;\n  margin-left: 9px;\n  color: #071723;\n}\n.container input {\n  all: unset;\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  background: #2F3676;\n  border-radius: 4px;\n  transition: 0.2s all;\n}\n.container input:checked:after {\n  content: \"✔\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  font-size: 17px;\n}\n.container input:hover {\n  background: #191847;\n  cursor: pointer;\n}\n.container input.disabled {\n  background: #C5CFD6;\n}\n.container input.invalid {\n  background: #F59393;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtY2hlY2tib3gvaW5wdXQtY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L0M6XFxhbmd1bGFyXFwyMC0xMC0yMDE5LXNpdGUtY29tcHJhLXN0aWNrZXJzLWFuZ3VsYXI4LWdpdC1pby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxpbnB1dC1jaGVja2JveFxcaW5wdXQtY2hlY2tib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREFGO0FDRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEQUo7QUNHRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FEREo7QUNJTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FERlI7QUNNSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBREpOO0FDT0k7RUFDRSxtQkFBQTtBRExOO0FDUUk7RUFDRSxtQkFBQTtBRE5OIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtY2hlY2tib3gvaW5wdXQtY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmNvbnRhaW5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgY29sb3I6ICMwNzE3MjM7XG59XG4uY29udGFpbmVyIGlucHV0IHtcbiAgYWxsOiB1bnNldDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMkYzNjc2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkOmFmdGVyIHtcbiAgY29udGVudDogXCLinJRcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uY29udGFpbmVyIGlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE5MTg0NztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciBpbnB1dC5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNDNUNGRDY7XG59XG4uY29udGFpbmVyIGlucHV0LmludmFsaWQge1xuICBiYWNrZ3JvdW5kOiAjRjU5MzkzO1xufSIsIkBpbXBvcnQgXCJwYWxldHRlL3BhbGV0dGVcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIGNvbG9yOiAjMDcxNzIzO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYWxsOiB1bnNldDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigndGhlbWUnLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG5cclxuICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXDAwMjcxNCc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdhY3Rpb25zJywgJ2hvdmVyJyk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcignYWN0aW9ucycsICdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ2FjdGlvbnMnLCAnaW52YWxpZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/input-checkbox/input-checkbox.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/input-checkbox/input-checkbox.component.ts ***!
  \******************************************************************************/
/*! exports provided: InputCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCheckboxComponent", function() { return InputCheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var InputCheckboxComponent = /** @class */ (function () {
    function InputCheckboxComponent() {
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
    }
    InputCheckboxComponent_1 = InputCheckboxComponent;
    InputCheckboxComponent.prototype.writeValue = function (checkboxes) {
        this.checkboxes = checkboxes;
    };
    InputCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
        this.error = false;
    };
    InputCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    InputCheckboxComponent.prototype.setChecked = function (label, checked) {
        this.checkboxes.map(function (res) {
            if (res.label === label) {
                res.checked = checked;
            }
        });
        this.error = false;
        this.onChangeCb(this.checkboxes);
    };
    var InputCheckboxComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], InputCheckboxComponent.prototype, "error", void 0);
    InputCheckboxComponent = InputCheckboxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-checkbox',
            template: __webpack_require__(/*! raw-loader!./input-checkbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-checkbox/input-checkbox.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputCheckboxComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./input-checkbox.component.scss */ "./src/app/shared/components/input-checkbox/input-checkbox.component.scss")]
        })
    ], InputCheckboxComponent);
    return InputCheckboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/input-number/input-number.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  display: inline-block;\n  font-weight: bold;\n  border-radius: 4px;\n}\n\nbutton {\n  background: #2F3676;\n  width: 42px;\n  height: 42px;\n  color: #FFFFFF;\n  font-size: 34px;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s all;\n}\n\nbutton.disabled {\n  background: #C5CFD6;\n}\n\nbutton div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: -2px;\n  position: relative;\n}\n\n.counter {\n  top: 0;\n  margin: 0 8px;\n  color: #071723;\n  vertical-align: top;\n}\n\n.counter input {\n  font-size: 20.01px;\n  padding: 0;\n  background: #DDE3E9;\n  transition: 0.2s all;\n  border: 1px solid #2F3676;\n  width: 60px;\n  height: 41px;\n  text-align: center;\n  -moz-appearance: textfield;\n}\n\n.counter input::-webkit-outer-spin-button, .counter input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.counter input.invalid {\n  background: #F59393;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyL0M6XFxhbmd1bGFyXFwyMC0xMC0yMDE5LXNpdGUtY29tcHJhLXN0aWNrZXJzLWFuZ3VsYXI4LWdpdC1pby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxpbnB1dC1udW1iZXJcXGlucHV0LW51bWJlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyL2lucHV0LW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0RGOztBREdFO0VBQ0UsbUJBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDRko7O0FETUE7RUFDRSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hGOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDSEo7O0FES0k7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNKTjs7QURPSTtFQUNFLG1CQUFBO0FDTE4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC1udW1iZXIvaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhbGV0dGUvcGFsZXR0ZVwiO1xyXG5cclxuKiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCd0aGVtZScsIDEpO1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdhY3Rpb25zJywgJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG5cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogLTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb3VudGVyIHtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luOiAwIDhweDtcclxuICBjb2xvcjogIzA3MTcyMztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDIwLjAxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI0RERTNFOTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcGFsZXR0ZS1jb2xvcigndGhlbWUnLCAxKTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcblxyXG4gICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICAgICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdhY3Rpb25zJywgJ2ludmFsaWQnKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCIqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMkYzNjc2O1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5idXR0b24uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjQzVDRkQ2O1xufVxuYnV0dG9uIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvdW50ZXIge1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGNvbG9yOiAjMDcxNzIzO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmNvdW50ZXIgaW5wdXQge1xuICBmb250LXNpemU6IDIwLjAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNEREUzRTk7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkYzNjc2O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmNvdW50ZXIgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIC5jb3VudGVyIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4uY291bnRlciBpbnB1dC5pbnZhbGlkIHtcbiAgYmFja2dyb3VuZDogI0Y1OTM5Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/input-number/input-number.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var InputNumberComponent = /** @class */ (function () {
    function InputNumberComponent() {
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
    }
    InputNumberComponent_1 = InputNumberComponent;
    InputNumberComponent.prototype.writeValue = function (counter) {
        this.counter = counter;
    };
    InputNumberComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    InputNumberComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    InputNumberComponent.prototype.add = function () {
        this.counter++;
        this.onChangeCb(this.counter);
        this.error = false;
    };
    InputNumberComponent.prototype.subtract = function () {
        if (this.counter > 0) {
            this.counter--;
            this.onChangeCb(this.counter);
        }
    };
    InputNumberComponent.prototype.digit = function (event) {
        this.counter = +event.value.match('^[0-9]*$')[0];
        this.onChangeCb(this.counter);
    };
    var InputNumberComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], InputNumberComponent.prototype, "error", void 0);
    InputNumberComponent = InputNumberComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-number',
            template: __webpack_require__(/*! raw-loader!./input-number.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-number/input-number.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputNumberComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./input-number.component.scss */ "./src/app/shared/components/input-number/input-number.component.scss")]
        })
    ], InputNumberComponent);
    return InputNumberComponent;
}());



/***/ }),

/***/ "./src/app/shared/templates/default/default.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/templates/default/default.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 560px;\n  display: block;\n  margin: 40px auto;\n  box-shadow: 10px 22px 24px rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  background: #F2F2F2;\n}\n@media only screen and (max-width: 565px) {\n  .container {\n    width: 460px;\n  }\n}\n@media only screen and (max-width: 465px) {\n  .container {\n    width: 320px;\n  }\n}\n.container header {\n  background-image: url('background-header.png');\n  display: block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 180px;\n  color: #FFF;\n  border-radius: 8px;\n  position: relative;\n}\n.container header h1 {\n  font-size: 23px;\n  padding-top: 23px;\n  padding-left: 31px;\n  line-height: 30px;\n  display: block;\n  font-weight: normal;\n}\n.container header:after {\n  content: \" \";\n  background-repeat: no-repeat;\n  width: 150px;\n  height: 150px;\n  background-size: 150px;\n  position: absolute;\n  background-image: url('bx-package.png');\n  right: 57px;\n  bottom: 22px;\n}\n@media only screen and (max-width: 565px) {\n  .container header:after {\n    right: 9px;\n  }\n}\n@media only screen and (max-width: 465px) {\n  .container header:after {\n    display: none;\n  }\n}\n.container main {\n  display: block;\n  position: relative;\n  padding-top: 32.83px;\n}\n.container main .fields-container {\n  background: #F2F2F2;\n  padding: 0 32px 32px 32px;\n}\n.container main footer {\n  background: #DDE3E9;\n  height: 101px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding: 0 32px;\n  border-radius: 0 0 8px 8px;\n}\n.container main footer .msg {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RlbXBsYXRlcy9kZWZhdWx0L0M6XFxhbmd1bGFyXFwyMC0xMC0yMDE5LXNpdGUtY29tcHJhLXN0aWNrZXJzLWFuZ3VsYXI4LWdpdC1pby9zcmNcXGFwcFxcc2hhcmVkXFx0ZW1wbGF0ZXNcXGRlZmF1bHRcXGRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC90ZW1wbGF0ZXMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0U7RUFSRjtJQVNJLFlBQUE7RUNBRjtBQUNGO0FERUU7RUFaRjtJQWFJLFlBQUE7RUNDRjtBQUNGO0FEQ0U7RUFDRSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQU47QURFTTtFQVhGO0lBWUksVUFBQTtFQ0NOO0FBQ0Y7QURDTTtFQWZGO0lBZ0JJLGFBQUE7RUNFTjtBQUNGO0FER0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0RKO0FER0k7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDRE47QURJSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDRk47QURJTTtFQUNFLFdBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90ZW1wbGF0ZXMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhbGV0dGUvcGFsZXR0ZVwiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDU2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMjJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjVweCkge1xyXG4gICAgd2lkdGg6IDQ2MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjVweCkge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLWhlYWRlci5wbmdcIik7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjNweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfnNyYy9hc3NldHMvaW1nL2J4LXBhY2thZ2UucG5nJyk7XHJcbiAgICAgIHJpZ2h0OiA1N3B4O1xyXG4gICAgICBib3R0b206IDIycHg7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2NXB4KSB7XHJcbiAgICAgICAgcmlnaHQ6IDlweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjVweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBtYWluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDMyLjgzcHg7XHJcblxyXG4gICAgLmZpZWxkcy1jb250YWluZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG4gICAgICBwYWRkaW5nOiAwIDMycHggMzJweCAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNEREUzRTk7XHJcbiAgICAgIGhlaWdodDogMTAxcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XHJcblxyXG4gICAgICAubXNnIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogNTYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMTBweCAyMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA0NjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cbn1cbi5jb250YWluZXIgaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1nL2JhY2tncm91bmQtaGVhZGVyLnBuZ1wiKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxODBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciBoZWFkZXIgaDEge1xuICBmb250LXNpemU6IDIzcHg7XG4gIHBhZGRpbmctdG9wOiAyM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDMxcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5jb250YWluZXIgaGVhZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvYngtcGFja2FnZS5wbmdcIik7XG4gIHJpZ2h0OiA1N3B4O1xuICBib3R0b206IDIycHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2NXB4KSB7XG4gIC5jb250YWluZXIgaGVhZGVyOmFmdGVyIHtcbiAgICByaWdodDogOXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XG4gIC5jb250YWluZXIgaGVhZGVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uY29udGFpbmVyIG1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMzIuODNweDtcbn1cbi5jb250YWluZXIgbWFpbiAuZmllbGRzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gIHBhZGRpbmc6IDAgMzJweCAzMnB4IDMycHg7XG59XG4uY29udGFpbmVyIG1haW4gZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI0RERTNFOTtcbiAgaGVpZ2h0OiAxMDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMCAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbn1cbi5jb250YWluZXIgbWFpbiBmb290ZXIgLm1zZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/templates/default/default.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/templates/default/default.component.ts ***!
  \***************************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template-default',
            template: __webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/templates/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/shared/templates/default/default.component.scss")]
        })
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/mocky/mocky.ts":
/*!****************************!*\
  !*** ./src/mocky/mocky.ts ***!
  \****************************/
/*! exports provided: labelCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelCheckbox", function() { return labelCheckbox; });
var labelCheckbox = [
    { label: 'React', checked: false },
    { label: 'Vue', checked: false },
    { label: 'Angular', checked: false }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\20-10-2019-site-compra-stickers-angular8-git-io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map