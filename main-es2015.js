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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_mocky_mocky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/mocky/mocky */ "./src/mocky/mocky.ts");
/* harmony import */ var _shared_reactive_forms_validation_input_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/reactive-forms-validation/input-number */ "./src/app/shared/reactive-forms-validation/input-number.ts");
/* harmony import */ var _shared_reactive_forms_validation_input_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/reactive-forms-validation/input-checkbox */ "./src/app/shared/reactive-forms-validation/input-checkbox.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_templates_default_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/templates/default/default.component */ "./src/app/shared/templates/default/default.component.ts");
/* harmony import */ var _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/input-checkbox/input-checkbox.component */ "./src/app/shared/components/input-checkbox/input-checkbox.component.ts");
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/input-number/input-number.component */ "./src/app/shared/components/input-number/input-number.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");











const _c0 = function (a0) { return { "show": a0 }; };
class AppComponent {
    constructor(fb) {
        this.fb = fb;
        this.showMsg = false;
        this.stickersForm = this.fb.group({
            stickers: [src_mocky_mocky__WEBPACK_IMPORTED_MODULE_1__["labelCheckbox"], [_shared_reactive_forms_validation_input_checkbox__WEBPACK_IMPORTED_MODULE_3__["isValidCheckbox"]]],
            amount: [0, [_shared_reactive_forms_validation_input_number__WEBPACK_IMPORTED_MODULE_2__["isValidAmount"]]],
            note: [''],
        });
    }
    submit() {
        if (this.stickersForm.invalid) {
            this.error = true;
        }
        else {
            this.showMsg = true;
            this.error = false;
            setTimeout(() => this.showMsg = false, 1500);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 8, consts: [["header", ""], [3, "formGroup"], ["formControlName", "stickers", 3, "error"], ["formControlName", "amount", 3, "error"], ["placeholder", "Alguma d\u00FAvida? Recado?", "formControlName", "note"], ["msg", ""], [1, "msg-successfully", 3, "ngClass"], ["button", ""], [3, "disabled", "label", "press"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-template-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Formul\u00E1rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " para compra de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pacote de Stickers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quais stickers?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-input-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantos stickers de cada?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-input-number", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Observa\u00E7\u00F5es:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Formul\u00E1rio enviado com sucesso! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("press", function AppComponent_Template_app_button_press_22_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.stickersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx.error === true && ctx.stickersForm.controls["stickers"].invalid === true ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx.error === true && ctx.stickersForm.controls["amount"].invalid === true ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.showMsg));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.stickersForm.invalid || ctx.showMsg)("label", "Enviar");
    } }, directives: [_shared_templates_default_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["InputCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_7__["InputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]], styles: ["b[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  display: block;\n  font-weight: 900;\n  font-family: \"inter\";\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: block;\n  font-weight: 600;\n  color: #071723;\n  font-size: 18px;\n}\n\n.msg-successfully[_ngcontent-%COMP%] {\n  color: #00C57C;\n  font-weight: 600;\n  font-size: 18px;\n  -webkit-transition: visibility 0.5s linear, opacity 0.5s linear;\n  transition: visibility 0.5s linear, opacity 0.5s linear;\n  visibility: hidden;\n  opacity: 0;\n}\n\n@media only screen and (max-width: 565px) {\n  .msg-successfully[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n.msg-successfully.show[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  all: unset;\n  width: 100%;\n  position: relative;\n  background: #DDE3E9;\n  border: 1px solid #2F3676;\n  border-radius: 4px;\n  padding: 16px;\n  box-sizing: border-box;\n  height: 141px;\n  font-size: 14px;\n}\n\napp-input-checkbox[_ngcontent-%COMP%], app-input-number[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHJlcG9zaXRvcmlvc1xcc3RpY2tlci1zaG9wLWFuZ3VsYXI5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtEQUFBO0VBQUEsdURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURDRTtFQVJGO0lBU0ksZUFBQTtFQ0VGO0FBQ0Y7O0FEQUU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUNFSjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBOztFQUVFLG1CQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdpbnRlcic7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwNzE3MjM7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubXNnLXN1Y2Nlc3NmdWxseSB7XHJcbiAgY29sb3I6ICMwMEM1N0M7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzIGxpbmVhciwgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjVweCkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgJi5zaG93IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGFsbDogdW5zZXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNEREUzRTk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJGMzY3NjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTQxcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5hcHAtaW5wdXQtY2hlY2tib3gsXHJcbmFwcC1pbnB1dC1udW1iZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCJiIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1mYW1pbHk6IFwiaW50ZXJcIjtcbn1cblxubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwNzE3MjM7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1zZy1zdWNjZXNzZnVsbHkge1xuICBjb2xvcjogIzAwQzU3QztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMgbGluZWFyLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2NXB4KSB7XG4gIC5tc2ctc3VjY2Vzc2Z1bGx5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5tc2ctc3VjY2Vzc2Z1bGx5LnNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG50ZXh0YXJlYSB7XG4gIGFsbDogdW5zZXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNEREUzRTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyRjM2NzY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxNDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5hcHAtaW5wdXQtY2hlY2tib3gsXG5hcHAtaW5wdXQtbnVtYmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/input-number/input-number.component */ "./src/app/shared/components/input-number/input-number.component.ts");
/* harmony import */ var _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/input-checkbox/input-checkbox.component */ "./src/app/shared/components/input-checkbox/input-checkbox.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _shared_templates_default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/templates/default/default.component */ "./src/app/shared/templates/default/default.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["InputCheckboxComponent"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__["InputNumberComponent"],
        _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["InputCheckboxComponent"],
        _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"],
        _shared_templates_default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__["InputNumberComponent"],
                    _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["InputCheckboxComponent"],
                    _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"],
                    _shared_templates_default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                providers: [
                    _shared_components_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["InputCheckboxComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "disabled": a0 }; };
class ButtonComponent {
    constructor() {
        this.press = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { label: "label", disabled: "disabled" }, outputs: { press: "press" }, decls: 2, vars: 4, consts: [[3, "ngClass", "click"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.press.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["button[_ngcontent-%COMP%] {\n  width: 133px;\n  height: 37px;\n  font-weight: bold;\n  background: #2F3676;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 7px;\n  text-transform: uppercase;\n  -webkit-transition: 0.4s all;\n  transition: 0.4s all;\n  font-size: 18px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #191847;\n  cursor: pointer;\n  border: 2px solid #2F3676;\n}\nbutton.disabled[_ngcontent-%COMP%] {\n  background: #C5CFD6;\n  color: #555555;\n  border: 2px solid #555555;\n}\nbutton.disabled[_ngcontent-%COMP%]:hover {\n  cursor: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0M6XFxyZXBvc2l0b3Jpb3NcXHN0aWNrZXItc2hvcC1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxidXR0b25cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxlQUFBO0FDREY7QURHRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDREo7QURJRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRko7QURJSTtFQUNFLGFBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFsZXR0ZS9wYWxldHRlXCI7XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMzNweDtcclxuICBoZWlnaHQ6IDM3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigndGhlbWUnLCAxKTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ2FjdGlvbnMnLCAnaG92ZXInKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHBhbGV0dGUtY29sb3IoJ3RoZW1lJywgMSk7XHJcbiAgfVxyXG5cclxuICAmLmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ2FjdGlvbnMnLCAnZGlzYWJsZWQnKTtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTU1NTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiB1bnNldDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJidXR0b24ge1xuICB3aWR0aDogMTMzcHg7XG4gIGhlaWdodDogMzdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICMyRjM2NzY7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGw7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxOTE4NDc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgIzJGMzY3Njtcbn1cbmJ1dHRvbi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNDNUNGRDY7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xufVxuYnV0dG9uLmRpc2FibGVkOmhvdmVyIHtcbiAgY3Vyc29yOiB1bnNldDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], press: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "invalid": a0 }; };
function InputCheckboxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputCheckboxComponent_ng_container_0_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const checkbox_r3 = ctx.$implicit; const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setChecked(checkbox_r3.label, _r4.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const checkbox_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r2.error))("id", checkbox_r3.label)("value", checkbox_r3.label)("checked", checkbox_r3.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", checkbox_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](checkbox_r3.label);
} }
class InputCheckboxComponent {
    constructor() {
        this.onChangeCb = () => { };
        this.onTouchedCb = () => { };
    }
    writeValue(checkboxes) {
        this.checkboxes = checkboxes;
    }
    registerOnChange(fn) {
        this.onChangeCb = fn;
        this.error = false;
    }
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    setChecked(label, checked) {
        this.checkboxes.map(res => {
            if (res.label === label) {
                res.checked = checked;
            }
        });
        this.error = false;
        this.onChangeCb(this.checkboxes);
    }
}
InputCheckboxComponent.ɵfac = function InputCheckboxComponent_Factory(t) { return new (t || InputCheckboxComponent)(); };
InputCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputCheckboxComponent, selectors: [["app-input-checkbox"]], inputs: { error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputCheckboxComponent),
                multi: true
            }
        ])], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "container"], ["type", "checkbox", 3, "ngClass", "id", "value", "checked", "click"], ["selectedCheckbox", ""], [3, "for"]], template: function InputCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputCheckboxComponent_ng_container_0_Template, 6, 8, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.checkboxes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-bottom: 8px;\n}\n.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 9px;\n  color: #071723;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  all: unset;\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  background: #2F3676;\n  border-radius: 4px;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:after {\n  content: \"\u2714\";\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: #FFFFFF;\n  font-size: 17px;\n}\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background: #191847;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   input.disabled[_ngcontent-%COMP%] {\n  background: #C5CFD6;\n}\n.container[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  background: #F59393;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtY2hlY2tib3gvaW5wdXQtY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L0M6XFxyZXBvc2l0b3Jpb3NcXHN0aWNrZXItc2hvcC1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxpbnB1dC1jaGVja2JveFxcaW5wdXQtY2hlY2tib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FEQUY7QUNFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURBSjtBQ0dFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBRERKO0FDSU07RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREZSO0FDTUk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QURKTjtBQ09JO0VBQ0UsbUJBQUE7QURMTjtBQ1FJO0VBQ0UsbUJBQUE7QUROTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5jb250YWluZXIgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIGNvbG9yOiAjMDcxNzIzO1xufVxuLmNvbnRhaW5lciBpbnB1dCB7XG4gIGFsbDogdW5zZXQ7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzJGMzY3NjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmNvbnRhaW5lciBpbnB1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxOTE4NDc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgaW5wdXQuZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjQzVDRkQ2O1xufVxuLmNvbnRhaW5lciBpbnB1dC5pbnZhbGlkIHtcbiAgYmFja2dyb3VuZDogI0Y1OTM5Mztcbn0iLCJAaW1wb3J0IFwicGFsZXR0ZS9wYWxldHRlXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBjb2xvcjogIzA3MTcyMztcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGFsbDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ3RoZW1lJywgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuXHJcbiAgICAmOmNoZWNrZWQge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnXFwwMDI3MTQnO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcignYWN0aW9ucycsICdob3ZlcicpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHBhbGV0dGUtY29sb3IoJ2FjdGlvbnMnLCAnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBwYWxldHRlLWNvbG9yKCdhY3Rpb25zJywgJ2ludmFsaWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-checkbox',
                templateUrl: './input-checkbox.component.html',
                styleUrls: ['./input-checkbox.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputCheckboxComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "disabled": a0 }; };
const _c1 = function (a0) { return { "invalid": a0 }; };
class InputNumberComponent {
    constructor() {
        this.onChangeCb = () => { };
        this.onTouchedCb = () => { };
    }
    writeValue(counter) {
        this.counter = counter;
    }
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    add() {
        this.counter++;
        this.onChangeCb(this.counter);
        this.error = false;
    }
    subtract() {
        if (this.counter > 0) {
            this.counter--;
            this.onChangeCb(this.counter);
        }
    }
    digit(event) {
        this.counter = +event.value.match('^[0-9]*$')[0];
        this.onChangeCb(this.counter);
    }
}
InputNumberComponent.ɵfac = function InputNumberComponent_Factory(t) { return new (t || InputNumberComponent)(); };
InputNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputNumberComponent, selectors: [["app-input-number"]], inputs: { error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputNumberComponent),
                multi: true
            }
        ])], decls: 9, vars: 7, consts: [[3, "ngClass", "click"], [1, "counter"], ["type", "number", 3, "ngClass", "value", "keyup"], ["inputNumber", ""], [3, "click"]], template: function InputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumberComponent_Template_button_click_0_listener($event) { return ctx.subtract(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InputNumberComponent_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.digit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumberComponent_Template_button_click_6_listener($event) { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.counter === 0 || ctx.counter === null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.error))("value", ctx.counter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  border-radius: 4px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #2F3676;\n  width: 42px;\n  height: 42px;\n  color: #FFFFFF;\n  font-size: 34px;\n  border: none;\n  cursor: pointer;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all;\n}\n\nbutton.disabled[_ngcontent-%COMP%] {\n  background: #C5CFD6;\n}\n\nbutton[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  top: -2px;\n  position: relative;\n}\n\n.counter[_ngcontent-%COMP%] {\n  top: 0;\n  margin: 0 8px;\n  color: #071723;\n  vertical-align: top;\n}\n\n.counter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 20.01px;\n  padding: 0;\n  background: #DDE3E9;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all;\n  border: 1px solid #2F3676;\n  width: 60px;\n  height: 41px;\n  text-align: center;\n  -moz-appearance: textfield;\n}\n\n.counter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .counter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.counter[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  background: #F59393;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyL0M6XFxyZXBvc2l0b3Jpb3NcXHN0aWNrZXItc2hvcC1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxpbnB1dC1udW1iZXJcXGlucHV0LW51bWJlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyL2lucHV0LW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDREY7O0FER0U7RUFDRSxtQkFBQTtBQ0RKOztBRElFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNQTtFQUNFLE1BQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSEY7O0FES0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0hKOztBREtJO0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FDSk47O0FET0k7RUFDRSxtQkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtbnVtYmVyL2lucHV0LW51bWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYWxldHRlL3BhbGV0dGVcIjtcclxuXHJcbioge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcigndGhlbWUnLCAxKTtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcignYWN0aW9ucycsICdkaXNhYmxlZCcpO1xyXG4gIH1cclxuXHJcbiAgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY291bnRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbiAgY29sb3I6ICMwNzE3MjM7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyMC4wMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6ICNEREUzRTk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHBhbGV0dGUtY29sb3IoJ3RoZW1lJywgMSk7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG5cclxuICAgICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbnZhbGlkIHtcclxuICAgICAgYmFja2dyb3VuZDogcGFsZXR0ZS1jb2xvcignYWN0aW9ucycsICdpbnZhbGlkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzJGMzY3NjtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuYnV0dG9uLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI0M1Q0ZENjtcbn1cbmJ1dHRvbiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAtMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb3VudGVyIHtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDAgOHB4O1xuICBjb2xvcjogIzA3MTcyMztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5jb3VudGVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAyMC4wMXB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjRERFM0U5O1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJGMzY3NjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cbi5jb3VudGVyIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCAuY291bnRlciBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLmNvdW50ZXIgaW5wdXQuaW52YWxpZCB7XG4gIGJhY2tncm91bmQ6ICNGNTkzOTM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-number',
                templateUrl: './input-number.component.html',
                styleUrls: ['./input-number.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputNumberComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/reactive-forms-validation/input-checkbox.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/reactive-forms-validation/input-checkbox.ts ***!
  \********************************************************************/
/*! exports provided: isValidCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCheckbox", function() { return isValidCheckbox; });
function isValidCheckbox(control) {
    let counter = 0;
    control.value.map(res => {
        if (res.checked === false) {
            counter++;
        }
    });
    return counter === control.value.length ? { invalid: true } : null;
}


/***/ }),

/***/ "./src/app/shared/reactive-forms-validation/input-number.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/reactive-forms-validation/input-number.ts ***!
  \******************************************************************/
/*! exports provided: isValidAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidAmount", function() { return isValidAmount; });
function isValidAmount(control) {
    return control.value === 0 || control.value === null ? { invalid: true } : null;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = [[["", "header", ""]], "*", [["", "msg", ""]], [["", "button", ""]]];
const _c1 = ["[header]", "*", "[msg]", "[button]"];
class DefaultComponent {
    constructor() {
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-template-default"]], ngContentSelectors: _c1, decls: 11, vars: 0, consts: [[1, "container"], [1, "fields-container"], [1, "msg"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 560px;\n  display: block;\n  margin: 40px auto;\n  box-shadow: 10px 22px 24px rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  background: #F2F2F2;\n}\n@media only screen and (max-width: 565px) {\n  .container[_ngcontent-%COMP%] {\n    width: 460px;\n  }\n}\n@media only screen and (max-width: 465px) {\n  .container[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n}\n.container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  background-image: url('background-header.png');\n  display: block;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 180px;\n  color: #FFF;\n  border-radius: 8px;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 23px;\n  padding-top: 23px;\n  padding-left: 31px;\n  line-height: 30px;\n  display: block;\n  font-weight: normal;\n}\n.container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]:after {\n  content: \" \";\n  background-repeat: no-repeat;\n  width: 150px;\n  height: 150px;\n  background-size: 150px;\n  position: absolute;\n  background-image: url('bx-package.png');\n  right: 57px;\n  bottom: 22px;\n}\n@media only screen and (max-width: 565px) {\n  .container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]:after {\n    right: 9px;\n  }\n}\n@media only screen and (max-width: 465px) {\n  .container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n.container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-top: 32.83px;\n}\n.container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .fields-container[_ngcontent-%COMP%] {\n  background: #F2F2F2;\n  padding: 0 32px 32px 32px;\n}\n.container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  background: #DDE3E9;\n  height: 101px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 0 32px;\n  border-radius: 0 0 8px 8px;\n}\n.container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RlbXBsYXRlcy9kZWZhdWx0L0M6XFxyZXBvc2l0b3Jpb3NcXHN0aWNrZXItc2hvcC1hbmd1bGFyOS9zcmNcXGFwcFxcc2hhcmVkXFx0ZW1wbGF0ZXNcXGRlZmF1bHRcXGRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC90ZW1wbGF0ZXMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0U7RUFSRjtJQVNJLFlBQUE7RUNBRjtBQUNGO0FERUU7RUFaRjtJQWFJLFlBQUE7RUNDRjtBQUNGO0FEQ0U7RUFDRSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQU47QURFTTtFQVhGO0lBWUksVUFBQTtFQ0NOO0FBQ0Y7QURDTTtFQWZGO0lBZ0JJLGFBQUE7RUNFTjtBQUNGO0FER0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0RKO0FER0k7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDRE47QURJSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNGTjtBRElNO0VBQ0UsV0FBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RlbXBsYXRlcy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFsZXR0ZS9wYWxldHRlXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogNTYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMTBweCAyMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2NXB4KSB7XHJcbiAgICB3aWR0aDogNDYwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1nL2JhY2tncm91bmQtaGVhZGVyLnBuZ1wiKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyM3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMxcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+c3JjL2Fzc2V0cy9pbWcvYngtcGFja2FnZS5wbmcnKTtcclxuICAgICAgcmlnaHQ6IDU3cHg7XHJcbiAgICAgIGJvdHRvbTogMjJweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY1cHgpIHtcclxuICAgICAgICByaWdodDogOXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMzIuODNweDtcclxuXHJcbiAgICAuZmllbGRzLWNvbnRhaW5lciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzJweCAzMnB4IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI0RERTNFOTtcclxuICAgICAgaGVpZ2h0OiAxMDFweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgcGFkZGluZzogMCAzMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcclxuXHJcbiAgICAgIC5tc2cge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA1NjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBib3gtc2hhZG93OiAxMHB4IDIycHggMjRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQ2MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgfVxufVxuLmNvbnRhaW5lciBoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC1oZWFkZXIucG5nXCIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIGhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgcGFkZGluZy10b3A6IDIzcHg7XG4gIHBhZGRpbmctbGVmdDogMzFweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNvbnRhaW5lciBoZWFkZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltZy9ieC1wYWNrYWdlLnBuZ1wiKTtcbiAgcmlnaHQ6IDU3cHg7XG4gIGJvdHRvbTogMjJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY1cHgpIHtcbiAgLmNvbnRhaW5lciBoZWFkZXI6YWZ0ZXIge1xuICAgIHJpZ2h0OiA5cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY1cHgpIHtcbiAgLmNvbnRhaW5lciBoZWFkZXI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5jb250YWluZXIgbWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAzMi44M3B4O1xufVxuLmNvbnRhaW5lciBtYWluIC5maWVsZHMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgcGFkZGluZzogMCAzMnB4IDMycHggMzJweDtcbn1cbi5jb250YWluZXIgbWFpbiBmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRERFM0U5O1xuICBoZWlnaHQ6IDEwMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuLmNvbnRhaW5lciBtYWluIGZvb3RlciAubXNnIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-template-default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
const labelCheckbox = [
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

module.exports = __webpack_require__(/*! C:\repositorios\sticker-shop-angular9\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map