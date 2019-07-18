(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-admin-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/content/admin/admin.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/admin/admin.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <header class=\"bg-danger header header-md navbar navbar-fixed-top-xs box-shadow\">\n      <div class=\"navbar-header aside-md dk\" style=\" background: #fff; text-align: center;\">\n        <a class=\"btn btn-link visible-xs\" data-toggle=\"class:nav-off-screen,open\" data-target=\"#nav,html\"> <i class=\"fa fa-bars\"></i>\n        </a>\n        <!-- <a class=\"navbar-brand\"> <img src=\"assets/images/bpcl-logo-inner.png\" class=\"m-r-sm\" alt=\"scale\">\n          <span class=\"hidden-nav-xs\">Bharat Petroleum</span> \n        </a> -->\n        <a class=\"navbar-brand\" style=\"padding: 0px;\"> <img src=\"assets/images/bestpeers.png\" class=\"m-r-sm\" alt=\"scale\" style=\"width: 170px;\n          max-height: 60px;border-radius: 0;border: 0;;top: 0;\n          \"></a>\n      </div>\n      <!-- style=\"margin-left: 32% !important;font-size: 23px;\" -->\n      <a class=\"green_data\"><h3 _ngcontent-c2=\"\" class=\"m-b-xs text-black\">\n        Logged in as TM</h3></a>\n      <ul class=\"nav navbar-nav navbar-right m-n hidden-xs nav-user user\">\n        <!-- <li>\n          <a class=\"green_data\"> <b>Logged in as TM</b></a></li> -->\n        <li class=\"hidden-xs\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <i class=\"i i-chat3\"></i> <span class=\"badge badge-sm up bg-danger count\">2</span>\n          </a>\n          <section class=\"dropdown-menu aside-xl animated flipInY\">\n            <section class=\"panel bg-white\">\n              <div class=\"panel-heading b-light bg-light\"> <strong>You have <span class=\"count\">2</span> notifications</strong>\n              </div>\n              <div class=\"list-group list-group-alt\">\n                <a class=\"media list-group-item\"> <span class=\"pull-left thumb-sm\"> <img src=\"assets/images/a0.png\" alt=\"...\"\n                      class=\"img-circle\"> </span> <span class=\"media-body block m-b-none\"> Use awesome animate.css<br>\n                    <small class=\"text-muted\">10 minutes ago</small> </span> </a>\n                <a class=\"media list-group-item\"> <span class=\"media-body block m-b-none\"> 1.0 initial released<br>\n                    <small class=\"text-muted\">1 hour ago</small> </span> </a>\n              </div>\n              <div class=\"panel-footer text-sm\"> <a href=\"#\" class=\"pull-right\"><i class=\"fa fa-cog\"></i></a> <a href=\"#notes\"\n                  data-toggle=\"class:show animated fadeInRight\">See all the notifications</a> </div>\n            </section>\n          </section>\n        </li>\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"padding: 12px 20px 28px 20px\"> <span class=\"thumb-sm avatar pull-left\" style=\"float: left; margin-top: 0px; width: 35px;\"> <img src=\"assets/images/a0.png\"\n            alt=\"...\"> </span><p style=\"float: left; padding: 0 5px;\">Admin<span style=\"display:block;font-size: 12px; line-height: 12px; text-align: center;\">Admin</span></p><b class=\"caret\"> </b> </a>\n          <ul class=\"dropdown-menu animated fadeInRight\">\n            <!-- <li> <span class=\"arrow top\"></span> <a href=\"#\">Settings</a> </li>-->\n            <li> <a routerLink=\"change_password\">Change Password</a> </li>\n            <!--<li>\n              <a href=\"#\"> <span class=\"badge bg-danger pull-right\">3</span> Notifications </a>\n            </li>\n            <li> <a href=\"docs.html\">Help</a> </li>-->\n            <li class=\"divider\"></li>\n            <li> <a (click)=\"logout()\">Logout</a> </li>\n          </ul>\n        </li>\n      </ul>\n  \n    </header>\n    <section class=\"hbox stretch\">\n      <!-- .aside -->\n      <aside class=\"bg-dark lt b-r b-light aside-md hidden-print hidden-xs\" id=\"nav\">\n        <section class=\"vbox\">\n          <section class=\"w-f scrollable\">\n            <div class=\"slim-scroll\" data-height=\"auto\" data-disable-fade-out=\"true\" data-distance=\"0\" data-size=\"10px\"\n              data-railOpacity=\"0.2\">\n  \n              <nav class=\"nav-primary hidden-xs\">\n                <div class=\"text-muted text-sm hidden-nav-xs padder m-t-sm m-b-sm\"></div>\n                <ul class=\"nav nav-main\" data-ride=\"collapse\">\n                  <li>\n                    <a routerLink=\"dashboard\" class=\"auto\"> <i class=\"fa fa-dashboard icon\"> </i>\n                      <span class=\"font-bold\">Dashboard</span> </a>\n                  </li>\n                  <li>\n                    <a routerLink=\"add_resource\" *ngIf=\"user_type=='user'\" class=\"auto\"> <i class=\"i i-statistics icon\"> </i>\n                      <span class=\"font-bold\">Add Resources</span> </a>\n                  </li>\n                  <!-- <li>\n                    <a routerLink=\"manual_history\" class=\"auto\"> <i class=\"i i-statistics icon\"> </i>\n                      <span class=\"font-bold\">Manual Upload History</span> </a>\n                  </li> -->\n                  <li>\n                    <a routerLink=\"manage_resources\" *ngIf=\"user_type=='user'\" class=\"auto\"> <i class=\"fa fa-book icon\"> </i>\n                      <span class=\"font-bold\">Manage Resources</span> </a>\n                  </li>\n                  <li>\n                    <a routerLink=\"so_list\" class=\"auto\" (click)=\"back_operation()\"> <i class=\"fa fa-file-text-o icon\">\n                      </i>\n                      <span class=\"font-bold\">Uploaded Batches Details</span> </a>\n                  </li>\n                  <li>\n                    <a routerLink=\"approve_batches\" class=\"auto\" (click)=\"check_type_menu('approve_batches')\"> <i class=\"fa fa-hdd-o icon\">\n                      </i>\n                      <span class=\"font-bold\">View Approved Batches</span> </a>\n                  </li>\n                  <li class=\"\">\n                    <a class=\"auto\"> <span class=\"pull-right text-muted\"> <i class=\"i i-circle-sm-o text\"></i>\n                        <i class=\"i i-circle-sm text-active\"></i> </span> <i class=\"i i-stack icon\"> </i> <span class=\"font-bold\">Handling\n                        Charges</span>\n                    </a>\n                    <ul class=\"nav dk\">\n                      <li>\n                        <a routerLink=\"view_requests\" class=\"auto\" (click)=\"check_type_menu('view_requests')\"> <i class=\"i i-dot\"></i>\n                          <span>View Requests</span> </a>\n                      </li>\n                      <li>\n                        <a routerLink=\"handling_pending_requests\" (click)=\"check_type_menu('handling_pending_requests')\" class=\"auto\"> <i class=\"i i-dot\"></i> <span>Pending Requests</span> </a>\n                      </li>\n                      <li>\n                        <a routerLink=\"handling_history\" class=\"auto\" (click)=\"check_type_menu('handling_history')\"> <i\n                            class=\"i i-dot\"></i> <span>History</span> </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"\">\n                    <a class=\"auto\"> <span class=\"pull-right text-muted\"> <i class=\"i i-circle-sm-o text\"></i>\n                        <i class=\"i i-circle-sm text-active\"></i> </span> <i class=\"i i-stack icon\"> </i> <span class=\"font-bold\">Report\n                        </span>\n                    </a>\n                    <ul class=\"nav dk\">\n                      <li>\n                        <a routerLink=\"report\" class=\"auto\" (click)=\"check_type_menu('report')\"> <i class=\"i i-dot\"></i>\n                          <span>Today Approved Batches</span> </a>\n                      </li>\n                      <li>\n                        <a routerLink=\"report_date\" (click)=\"check_type_menu('report_date')\" class=\"auto\"> <i class=\"i i-dot\"></i> <span>Batches By Date</span> </a>\n                      </li>\n                      <li>\n                        <a routerLink=\"report_date_range\" class=\"auto\" (click)=\"check_type_menu('report_date_range')\"> <i\n                            class=\"i i-dot\"></i> <span>Report Between Date</span> </a>\n                      </li>\n                      <li>\n                        <a routerLink=\"so_report\" class=\"auto\" (click)=\"check_type_menu('so_report')\"> <i\n                            class=\"i i-dot\"></i> <span>Report By SO and Dealer</span> </a>\n                      </li>\n                    </ul> \n                  </li>\n  \n                  <!--<li>\n                    <a routerLink=\"so_list\" class=\"auto\"> <i class=\"i i-statistics icon\"> </i>\n                      <span class=\"font-bold\">So List</span> </a>\n                  </li>-->\n                  <!--dealer_details-->\n  \n                  <!-- <li>\n                    <a routerLink=\"report\" (click)=\"check_type_menu('report')\" class=\"auto\"> <i class=\"fa fa-square icon\"> </i>\n                      <span class=\"font-bold\">Today Approve Batches Report</span> </a>\n                  </li>\n                  <li>\n                    <a routerLink=\"report_date\" (click)=\"check_type_menu('report_date')\" class=\"auto\"> <i class=\"fa fa-square icon\"> </i>\n                      <span class=\"font-bold\">Report Single Date</span> </a>\n                  </li> \n                  <li>\n                  <a routerLink=\"so_report\" (click)=\"check_type_menu('so_report')\" class=\"auto\"> <i class=\"fa fa-square icon\"> </i>\n                      <span class=\"font-bold\">SO Report</span> </a>\n                  </li>\n                  <li>\n                    <a routerLink=\"report_date_range\" (click)=\"check_type_menu('report_date_range')\" class=\"auto\"> <i class=\"fa fa-square icon\"> </i>\n                      <span class=\"font-bold\">Report Date Range</span> </a>\n                  </li>  -->\n  \n                  <!-- <li>\n                    <a routerLink=\"offer\" class=\"auto\"> <i class=\"i i-statistics icon\"> </i>\n                      <span class=\"font-bold\">Offers</span> </a>\n                  </li> -->\n                  <li>\n                    <a routerLink=\"notifications\" class=\"auto\"> <i class=\"fa fa-bell icon\"> </i>\n                      <span class=\"font-bold\">Notifications</span> </a>\n                  </li>\n                  <!-- <li>\n                    <a routerLink=\"change_password\" class=\"auto\"> <i class=\"i i-statistics icon\"> </i>\n                      <span class=\"font-bold\">Change Password</span> </a>\n                  </li>-->\n                </ul>\n              </nav>\n            </div>\n          </section>\n  \n        </section>\n      </aside>\n      <section id=\"content\"  style=\"min-height:530px;\" class=\"scrollable_final\">\n        <section class=\"hbox stretch\">\n          <section>\n            <section class=\"vbox\">\n              <section class=\"scrollable padder\" style=\"min-height:550px;\">\n                <section>\n                  <router-outlet></router-outlet>\n                </section>\n  \n              </section>\n            </section>\n          </section>\n        </section>\n      </section>\n    </section>\n  </section>"

/***/ }),

/***/ "./src/app/content/admin/admin.component.css":
/*!***************************************************!*\
  !*** ./src/app/content/admin/admin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.badge.badge-sm.up.bg-danger.count {\n    background-color: #111;\n}\n\n.scrollable_final\n{\n    overflow-x: scroll;\n}\n\n.table th, .table td {\n    padding: 10px !important;\n}\n\n.green_data\n{\n    padding: 0 0 0 30px;\n    display:inline-block;\n    color:#111;\n    font-size:24px;\n    cursor: default;\n    font-weight: normal;\n}\n\n.green_data:hover {\n    color: #111;\n}\n\n.green_data h3 {\n    font-size: 20px;\n    margin: 18px 0 0 0;\n    /* color: #d51a2d; */\n}\n\n/* .dropdown-menu {\n    position: absolute;\n    top: 100%;\n    left: 30;\n    z-index: 1000;\n    display: none;\n    float: left;\n    min-width: 360px;\n    padding: 5px 0;\n    margin: 2px 0 0;\n    font-size: 14px;\n    text-align: left;\n    list-style: none;\n    background-color: #bbbcbf;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #ccc;\n    border: 1px solid rgba(0, 0, 0, .15);\n    border-radius: 4px;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRyIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uYmFkZ2UuYmFkZ2Utc20udXAuYmctZGFuZ2VyLmNvdW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xufVxuXG4uc2Nyb2xsYWJsZV9maW5hbFxue1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59IFxuLmdyZWVuX2RhdGFcbntcbiAgICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiMxMTE7XG4gICAgZm9udC1zaXplOjI0cHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZ3JlZW5fZGF0YTpob3ZlciB7XG4gICAgY29sb3I6ICMxMTE7XG59XG4uZ3JlZW5fZGF0YSBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMThweCAwIDAgMDtcbiAgICAvKiBjb2xvcjogI2Q1MWEyZDsgKi9cbn1cbi8qIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDMwO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIG1hcmdpbjogMnB4IDAgMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmJjYmY7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/content/admin/admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/content/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() {
        this.user_id = localStorage.getItem('user_id');
        this.user_type = localStorage.getItem('type');
    }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/content/admin/admin.component.css")]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/content/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/content/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/content/admin/admin.component.ts");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.routing */ "./src/app/content/admin/admin.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _admin_routing__WEBPACK_IMPORTED_MODULE_5__["AdminRouting"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [],
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/content/admin/admin.routing.ts":
/*!************************************************!*\
  !*** ./src/app/content/admin/admin.routing.ts ***!
  \************************************************/
/*! exports provided: pvRoutes, AdminRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pvRoutes", function() { return pvRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRouting", function() { return AdminRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/content/admin/admin.component.ts");




const pvRoutes = [
    {
        path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'admin',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'add_resource',
                loadChildren: './add-resources/add-resources.module#AddResourceModule',
            },
            {
                path: 'manage_resources',
                loadChildren: './manage-resources/manage-resources.module#ManageResourceModule'
            },
            {
                path: 'update_resources',
                loadChildren: './update-resource/update-resource.module#UpdateResourceModule',
            }
            // {
            //     path:'manual_approve_batches'
            //     loadChildren: './manual-approve-batches/manual-approve.mod'
            // }
        ]
    }
];
let AdminRouting = class AdminRouting {
};
AdminRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(pvRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRouting);



/***/ })

}]);
//# sourceMappingURL=content-admin-admin-module.js.map