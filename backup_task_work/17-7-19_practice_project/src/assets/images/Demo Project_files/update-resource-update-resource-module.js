(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-resource-update-resource-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/content/admin/update-resource/update-resource.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/admin/update-resource/update-resource.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hello name=\"{{ name }}\"></hello>\n<h3 class=\"page-header\">Update Resources</h3>\n<button type=\"button\" (click)=\"addNewRow()\" class=\"btn btn-primary\">Add new Row</button><br>\n<form [formGroup]=\"invoiceForm\" (ngSubmit)=\"add_resource()\">\n    <div class=\"form-group\">\n        <label>Resource Name</label>\n        <input type=\"hidden\" formControlName=\"user_id\" value=\"user_id\">\n        <input type=\"text\" formControlName=\"resource_name\" class=\"form-control m-t\">\n        <div *ngIf=\"invoiceForm.controls['resource_name'].invalid && (invoiceForm.controls['resource_name'].dirty || invoiceForm.controls['resource_name'].touched)\"\n        class=\"alert alert-danger\">\n            <div *ngIf=\"invoiceForm.controls['resource_name'].errors.required\">Resource name is required.\n            </div>\n        </div>\n    </div>\n    <div formArrayName=\"itemRows\">\n        <div *ngFor=\"let itemrow of invoiceForm.controls.itemRows.controls; let i=index\" [formGroupName]=\"i\">\n            <h4>Item Row #{{ i + 1 }}</h4>\n            <div class=\"form-group\">\n                <label>Item Name</label>\n                <input formControlName=\"itemname\" class=\"form-control\">\n                <div  class=\"alert alert-danger\" *ngIf=\"invoiceForm.controls.itemRows.controls[i].controls.itemname.invalid && (invoiceForm.controls.itemRows.controls[i].controls.itemname.dirty || invoiceForm.controls.itemRows.controls[i].controls.itemname.touched) \">\n                        item name is required\n                </div>\n                    <!-- <div *ngIf=\"invoiceForm.controls.itemRows.controls[i].controls.itemname.invalid && (invoiceForm.controls.itemRows.controls[i].controls.itemname.dirty || invoiceForm.controls.itemRows.controls[i].controls.itemname.touched)\"\n                    class=\"alert alert-danger\">\n                        <div *ngIf=\"invoiceForm.controls.itemRows.controls[i].controls.itemname.errors.required\">Item name is required.\n                        </div>\n                    </div> -->\n\n            </div>\n            <div class=\"form-group\">\n                <label>Item Type</label>\n                <select formControlName=\"itemtype\" class=\"form-control\">\n                    <option Value=\"\">Select Item Type</option>\n                    <option value=\"integer\">Integer</option>\n                    <option value=\"string\">String</option>\n                </select>\n                <div  class=\"alert alert-danger\" *ngIf=\"invoiceForm.controls.itemRows.controls[i].controls.itemtype.invalid && (invoiceForm.controls.itemRows.controls[i].controls.itemtype.dirty || invoiceForm.controls.itemRows.controls[i].controls.itemtype.touched) \">\n                        Please select item type\n                </div>\n            </div>\n            <button *ngIf=\"invoiceForm.controls.itemRows.controls.length > 1\" (click)=\"deleteRow(i)\"\n                class=\"btn btn-danger\">Delete Button</button>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <br>\n            <input type=\"submit\" [disabled]=\"!invoiceForm.valid\" class=\"btn btn-success\">\n\n    </div>\n</form>\n<pre>{{invoiceForm.value | json}}</pre>"

/***/ }),

/***/ "./src/app/content/admin/update-resource/update-resource.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/content/admin/update-resource/update-resource.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYWRtaW4vdXBkYXRlLXJlc291cmNlL3VwZGF0ZS1yZXNvdXJjZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/admin/update-resource/update-resource.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/admin/update-resource/update-resource.component.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResourceComponent", function() { return UpdateResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UpdateResourceComponent = class UpdateResourceComponent {
    constructor(_fb, loginservice, toastr, router) {
        this._fb = _fb;
        this.loginservice = loginservice;
        this.toastr = toastr;
        this.router = router;
        this.user_id = localStorage.getItem('user_id');
        this.resource_id = localStorage.getItem("resource_id");
    }
    ngOnInit() {
        const formData = new FormData();
        formData.append('user_id', this.user_id);
        formData.append('resource_id', this.resource_id);
        alert(this.resource_id);
        this.get_resource_details_data(formData);
        this.invoiceForm = this._fb.group({
            user_id: [this.user_id],
            resource_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            itemRows: this._fb.array([this.initItemRows()])
        });
        // this.formArr.push(this.initItemRows());
        // this.formArr.push(this.initItemRows());
    }
    get_resource_details_data(data) {
        alert('hii');
        this.loginservice.get_resource_details(data).subscribe(data => {
            alert(data);
            if (data.success == 'true') {
                // this.user_id=localStorage.getItem('user_id');
            }
            else {
                this.toastr.errorToastr(data.msg);
            }
        });
    }
    get formArr() {
        return this.invoiceForm.get('itemRows');
    }
    initItemRows() {
        return this._fb.group({
            itemname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            itemtype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    addNewRow() {
        console.log(this.initItemRows());
        this.formArr.push(this.initItemRows());
    }
    deleteRow(index) {
        this.formArr.removeAt(index);
    }
};
UpdateResourceComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UpdateResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-resource',
        template: __webpack_require__(/*! raw-loader!./update-resource.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/admin/update-resource/update-resource.component.html"),
        styles: [__webpack_require__(/*! ./update-resource.component.css */ "./src/app/content/admin/update-resource/update-resource.component.css")]
    })
], UpdateResourceComponent);



/***/ }),

/***/ "./src/app/content/admin/update-resource/update-resource.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/admin/update-resource/update-resource.module.ts ***!
  \*************************************************************************/
/*! exports provided: UpdateResourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResourceModule", function() { return UpdateResourceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _update_resource_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-resource.component */ "./src/app/content/admin/update-resource/update-resource.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");








const routes = [
    {
        path: '',
        component: _update_resource_component__WEBPACK_IMPORTED_MODULE_4__["UpdateResourceComponent"],
    }
];
let UpdateResourceModule = class UpdateResourceModule {
};
UpdateResourceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [],
        declarations: [_update_resource_component__WEBPACK_IMPORTED_MODULE_4__["UpdateResourceComponent"]]
    })
], UpdateResourceModule);



/***/ })

}]);
//# sourceMappingURL=update-resource-update-resource-module.js.map