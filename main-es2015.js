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

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <h2 class=\"text-center\">Register Your Self</h2>\n            <form (ngSubmit)=\"createEmployee(f)\" #f=\"ngForm\">\n              <div class=\"form-group\">\n                <label for=\"username\">Mail:</label>\n                <input type=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" name=\"username\" class=\"form-control\" id=\"username\" >\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Pasword</label>\n                <input [(ngModel)]=\"user.password\" placeholder=\"Password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" required>\n              </div>\n            \n              <button class=\"btn btn-success\" [disabled]=\"!f.valid\" >Create</button>\n            </form>\n            <hr>\n            <h4>Sign in if you have account</h4>\n            <button class=\"btn btn-success\" type=\"button\"  (click)=\"onsignIn()\" >Sign In</button>\n    </div>\n</div>\n    \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signin/signin.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signin/signin.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-img\">\n    <div class=\"row\" >\n        <div class=\"container\" class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <h1> Welcome To Recipe Book</h1>\n            <!-- <img src=\"https://i.etsystatic.com/10591113/r/il/e614eb/720407533/il_570xN.720407533_cfek.jpg\"\n            alt=\"pic\">  -->\n        </div>\n        <!-- <div class=\"container\" class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-9\">\n                <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2FUeb5GyS3Uy3yggrjRlPKOMqUkoVJ1RrXRHbLIrkIjrA3uh\"\n                alt=\"pic\">\n            </div> -->\n    </div>\n<div class=\"row\" class=\"container\">\n    <div  class=\"centre\" class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label  for=\"email\">Mail</label>\n                        <input type=\"email\" id=\"email\" name=\"email\"  class=\"form-control\" ngModel>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"label\"  for=\"password\">Password</label>\n                        <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"  ngModel>\n                    </div>\n                    <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n                </form>\n    </div>\n</div></div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n        <div class=\"container\">\n            <span class=\"text-muted\"><h4>Welcome to himanshu Recipe Book @Himanshu</h4></span>\n        </div>\n      \n    </footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\" style=\"background-color: #2c1515;\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a routeLink=\"/\" class=\"navbar-brand\">Recipe Book</a>\r\n        </div>\r\n        <div class=\"collaps navbar-collapse\">\r\n            <ul class =\"nav navbar-nav\">\r\n                <li *ngIf=\"loginService.isUserLoggedIn()\" routerLinkActive=\"active\"><a routerLink=\"/recipes\">Recipes</a></li>\r\n                <li  *ngIf=\"loginService.isUserLoggedIn()\" routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Shopping List</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"/register\">Register</a>  </li>\r\n                <li><a  *ngIf=\"loginService.isUserLoggedIn()\" (click)=\"onLogout()\" routerLink=\"/signin\">Logout</a>  </li>\r\n                <li class=\"dropdown\" appDropdown>\r\n                    <a style=\"cursor: pointer;\" *ngIf=\"loginService.isUserLoggedIn()\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">Manage<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a style=\"cursor: pointer;\" >Save Data</a></li>\r\n                        <li><a style=\"cursor: pointer;\">Fetch Data</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <img \n        [src]=\"recipe.imagePath\"\n         alt=\"{{recipe.name}}\" \n         class=\"img-responsive\"\n         style=\"max-height:300px;\">\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <h1>{{recipe.name}}</h1>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col xs-12\">\n        <div class=\"btn-group \"\n        appDropdown >\n            <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n                Manage Recipe <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a  (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">To Shopping List</a> </li>\n                <li><a style=\"cursor: pointer;\" (click)=\"onEditRecipe()\">Edit Recipe</a> </li>\n                <li><a style=\"cursor: pointer;\"(click)=\"onDeleteRecipe()\">Delete Recipe</a> </li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        Description\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n     <ul class=\"list-group\">\n         <li\n            class=\"list-group-item\"\n            *ngFor=\"let ingredient of recipe.ingredients\">\n        {{ ingredient.name}}-{{ingredient.amount}}\n    </li>\n     </ul> \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button type=\"submit\" class=\"btn btn-success\"\n                    [disabled]=\"!recipeForm.valid\">\n                    Save</button>\n                    <button type=\"button\" class=\"btn btn-danger\"(click)=\"onCancel()\">Cancel</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cl-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input\n                           type=\"text\"\n                           id=\"name\"\n                           formControlName=\"name\"\n                           class=\"form-control\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cl-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"imagePath\">Image Url</label>\n                        <input\n                           type=\"text\"\n                           id=\"imagePath\"\n                           formControlName=\"imagePath\"\n                           class=\"form-control\"\n                           #imagePath>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cl-xs-12\">\n                    <img [src]=\"imagePath.value\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cl-xs-12\">\n                    <div class=\"form-group\">\n                        <label for=\"description\">Description</label>\n                        <textarea\n                           type=\"text\"\n                           id=\"description\"\n                           class=\"form-control\"\n                           formControlName=\"description\"\n                           rows=\"6\"></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"cl-xs-12\" formArrayName=\"ingredients\">\n                    <div class=\"row\" \n                    *ngFor=\"let ingredientCtrl of recipeForm.get('ingredients').controls;let i=index\"\n                    [formGroupName]=\"i\"\n                    style=\"margin-top: 10px\"\n                    >\n                        <div class=\"col-xs-8\">\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            formControlName=\"name\">\n                        </div>\n                        <div class=\"col-xs-2\">\n                            <input\n                            type=\"number\"\n                            class=\"form-control\"\n                            formControlName=\"amount\">\n                        </div>  \n                        <div class=\"col-xs-2\">\n                           <button type=\"button\" class=\"btn btn-danger\"  (click)=\"onDeleteIngredient(i)\">X</button>\n                        </div>                      \n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <button type=\"button\"  class=\"btn btn-success\" (click)=\"onAddIngredient()\">Add Ingredient</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a     \n       style=\"cursor: pointer;\"\n       [routerLink]=\"[index]\"\n       routerLinkActive=\"active\"\n       class=\"list-group-item clearfix \">\n           <div class=\"pull-left\">\n               <h4 class=\"list-group-item-heading\"> {{recipe.name}}</h4>\n               <p class=\"list-group-item-text\">{{recipe.description}}</p>\n            </div>\n               <span class=\"pull-right\">\n                   <img \n                   [src]=\"recipe.imagePath\"\n                    alt=\"{{recipe.name}}\"\n                     class=\"img-responsive\"\n                      style=\"max-height:50px;\">\n                </span>\n            </a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\n    </div>\n</div>\n<hr>\n<div class=\"row\">\n   <div class=\"col-xs-12\">\n        <app-recipe-item  \n        *ngFor=\"let recipeEl of recipes;let i=index\"\n        [recipe]=\"recipeEl\"\n        [index]=\"i\"></app-recipe-item>\n   </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1><b>Please select a Recipe from the tab</b></h1>\r\n<img src=\"http://icons.iconarchive.com/icons/iconsmind/outline/256/Cursor-Select-icon.png\" alt=\"selct a recipe\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipes.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-recipe-list></app-recipe-list>\n    </div>\n    <div class=\"col-md-7\">\n     <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/registerconfirmation/registerconfirmation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registerconfirmation/registerconfirmation.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n                <h2 class=\"text-center\">Account Registerd</h2>\n        </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form (ngSubmit)=\"onAddItem(f)\" #f=\"ngForm\">\n            <div class=\"row\">\n                    <div class=\"col-sm-5 form-group\">\n                     <label for=\"name\">Name</label>\n                     <input \n                     type=\"text\" \n                     id=\"name\" \n                     class=\"form-control\" \n                     name=\"name\"\n                     ngModel\n                     required\n                      >\n                    </div>\n                    <div class=\"col-sm-2 form-group\">\n                        <label for=\"amount\">Amount</label>\n                        <input \n                        type=\"number\" \n                        id=\"amount\" \n                        class=\"form-control\" \n                        name=\"amount\"\n                        ngModel\n                        required\n                        pattern=\"^[1-9]+[0-9]*$\"\n                        >\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{editMode?'Update':'Add'}}</button>\n                        <button \n                        class=\"btn btn-danger\" \n                        type=\"button\"   \n                         (click)=\"onDelete()\"\n                          *ngIf=\"editMode\">\n                         Delete</button>\n                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n                    </div>\n                </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <app-shopping-edit></app-shopping-edit>\n        <hr>\n        <ul class=\"list-group\">\n        <a class=\"list-group-item\" \n        style=\"cursor: pointer\"\n        *ngFor=\"let ingredient of ingredients;let i=index\"\n        (click)=\"onEditItem(i)\"\n        >\n          {{ingredient.name}}({{ingredient.amount}})\n        </a>\n        </ul>\n        <img src=\"https://www.eatforhealth.gov.au/sites/default/files/images/home_header_01.jpg\" alt=\"shop\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _registerconfirmation_registerconfirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registerconfirmation/registerconfirmation.component */ "./src/app/registerconfirmation/registerconfirmation.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");












const routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]], children: [
            { path: '', component: _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"] },
            { path: 'new', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"] },
            { path: ':id', component: _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"] },
            { path: ':id/edit', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"] }
        ] },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'register/success', component: _registerconfirmation_registerconfirmation_component__WEBPACK_IMPORTED_MODULE_10__["RegisterconfirmationComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.loadedFeature = 'recipe';
    }
    onNavigate(feature) {
        this.loadedFeature = feature;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _registerconfirmation_registerconfirmation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./registerconfirmation/registerconfirmation.component */ "./src/app/registerconfirmation/registerconfirmation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





















//import { BasicAuthHtppInterceptorService } from './service/basic-auth-http-interceptor.service';


//import { SkippableInterceptorComponent } from './service/skippable-interceptor/skippable-interceptor.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_6__["RecipesComponent"],
            _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_7__["RecipeListComponent"],
            _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailComponent"],
            _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_9__["RecipeItemComponent"],
            _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingListComponent"],
            _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingEditComponent"],
            _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
            _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_14__["RecipeStartComponent"],
            _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_15__["RecipeEditComponent"],
            _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"],
            _auth_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
            _registerconfirmation_registerconfirmation_component__WEBPACK_IMPORTED_MODULE_21__["RegisterconfirmationComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
        ],
        providers: [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_13__["ShoppingListService"], _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_17__["RecipeService"],],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);

//{ provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true }


/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/httpclient.service */ "./src/app/service/httpclient.service.ts");




let RegisterComponent = class RegisterComponent {
    constructor(httpClientService, router, route) {
        this.httpClientService = httpClientService;
        this.router = router;
        this.route = route;
        this.user = new src_app_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["Employee"]("", "");
    }
    ngOnInit() {
    }
    createEmployee(form) {
        const value = form.value;
        const newEmployee = new src_app_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["Employee"](value.username, value.password);
        console.log(newEmployee);
        this.httpClientService.createEmployee(newEmployee)
            .subscribe(data => {
            alert("Employee created successfully.");
            this.router.navigate(['register/success']);
        });
    }
    onsignIn() {
        this.router.navigate(['/signin']);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-img {\r\n    background-image: url('/assets/login.jpg'); \r\n    min-height: 565px;\r\n    \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n  .container {\r\n    position: absolute;\r\n    margin: 100px;\r\n    max-width: 500px;\r\n    padding: 10px;\r\n    \r\n  }\r\n  .label{\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsaUJBQWlCOztJQUVqQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7O0VBRWY7RUFDRjtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2xvZ2luLmpwZycpOyBcclxuICAgIG1pbi1oZWlnaHQ6IDU2NXB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcbi5sYWJlbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SigninComponent = class SigninComponent {
    constructor(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    onSignin(form) {
        const value = form.value;
        this.username = value.email;
        this.password = value.password;
        (this.loginservice.authenticate(this.username, this.password).subscribe(data => {
            this.router.navigate(['/recipes']);
            this.invalidLogin = false;
        }, error => {
            this.invalidLogin = true;
        }));
    }
};
SigninComponent.ctorParameters = () => [
    { type: src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    width:100%;\r\n    height: 40px;\r\n    background-color: #2c1515;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMTUxNTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");



//import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    onLogout() {
        console.log("hi");
        this.loginService.logOut();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }
    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
};
RecipeDetailComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-detail',
        template: __webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.component.html"),
        styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")]
    })
], RecipeDetailComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,textarea.ng-invalid.ng-touched{\r\n    border:1px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipe.model */ "./src/app/recipes/recipe.model.ts");






let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
    }
    onSubmit() {
        //  console.log(this.recipeForm);
        const newRecipe = new _recipe_model__WEBPACK_IMPORTED_MODULE_5__["Recipe"](this.recipeForm.value['name'], this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']);
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, newRecipe);
        }
        else {
            this.recipeService.addRecipe(newRecipe);
        }
        this.onCancel();
    }
    onAddIngredient() {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
        }));
    }
    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            console.log(this.editMode);
            this.initForm();
        });
    }
    onDeleteIngredient(index) {
        this.recipeForm.get('ingredients').removeAt(index);
    }
    initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (let ingredient of recipe.ingredients) {
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'ingredients': recipeIngredients
        });
    }
};
RecipeEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-edit',
        template: __webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html"),
        styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipe-edit/recipe-edit.component.css")]
    })
], RecipeEditComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeItemComponent = class RecipeItemComponent {
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeItemComponent.prototype, "recipe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeItemComponent.prototype, "index", void 0);
RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-item',
        template: __webpack_require__(/*! raw-loader!./recipe-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
        styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
    })
], RecipeItemComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RecipeListComponent = class RecipeListComponent {
    constructor(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.recipeService.recipesChanged
            .subscribe((recipes) => {
            this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
};
RecipeListComponent.ctorParameters = () => [
    { type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-list',
        template: __webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html"),
        styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")]
    })
], RecipeListComponent);



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeStartComponent = class RecipeStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-start',
        template: __webpack_require__(/*! raw-loader!./recipe-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html"),
        styles: [__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/recipes/recipe-start/recipe-start.component.css")]
    })
], RecipeStartComponent);



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
class Recipe {
    constructor(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
Recipe.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.model */ "./src/app/recipes/recipe.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");






let RecipeService = class RecipeService {
    constructor(slService) {
        this.slService = slService;
        this.recipesChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.recipes = [
            new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Meat', 1), new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('French Fries', 20)]),
            new _recipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]('Another Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', [new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Bread', 2), new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Meat', 2)])
        ];
    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
};
RecipeService.ctorParameters = () => [
    { type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"] }
];
RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], RecipeService);



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import { RecipeService } from './recipe.service';
let RecipesComponent = class RecipesComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes',
        template: __webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html"),
        styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
    })
], RecipesComponent);



/***/ }),

/***/ "./src/app/registerconfirmation/registerconfirmation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/registerconfirmation/registerconfirmation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyY29uZmlybWF0aW9uL3JlZ2lzdGVyY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/registerconfirmation/registerconfirmation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/registerconfirmation/registerconfirmation.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterconfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterconfirmationComponent", function() { return RegisterconfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterconfirmationComponent = class RegisterconfirmationComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterconfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registerconfirmation',
        template: __webpack_require__(/*! raw-loader!./registerconfirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/registerconfirmation/registerconfirmation.component.html"),
        styles: [__webpack_require__(/*! ./registerconfirmation.component.css */ "./src/app/registerconfirmation/registerconfirmation.component.css")]
    })
], RegisterconfirmationComponent);



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: User, JwtResponse, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtResponse", function() { return JwtResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class User {
    constructor(status) {
        this.status = status;
    }
}
User.ctorParameters = () => [
    { type: String }
];
class JwtResponse {
    constructor(jwttoken) {
        this.jwttoken = jwttoken;
    }
}
JwtResponse.ctorParameters = () => [
    { type: String }
];
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    authenticate(username, password) {
        return this.httpClient.post('http://localhost:8080/authenticate', { username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(userData => {
            sessionStorage.setItem('username', username);
            let tokenStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenStr);
            return userData;
        }));
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        //console.log(!(user === null))
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/service/httpclient.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/httpclient.service.ts ***!
  \***********************************************/
/*! exports provided: Employee, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




//import { InterceptorSkipHeader } from './skippable-interceptor.service';
class Employee {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
Employee.ctorParameters = () => [
    { type: String },
    { type: String }
];
let HttpClientService = class HttpClientService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
    }
    //    getEmployees()
    // {
    //   let username='javainuse'
    //   let password='password'
    //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //      return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
    // }
    // public deleteEmployee(employee) {
    //   let username='javainuse'
    //   let password='password'
    //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //   return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId,{headers});
    // }
    createEmployee(employee) {
        console.log(employee);
        //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.post("http://localhost:8080/register", employee);
    }
};
HttpClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpClientService);



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}
Ingredient.ctorParameters = () => [
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ShoppingEditComponent = class ShoppingEditComponent {
    constructor(slService, router, route) {
        this.slService = slService;
        this.router = router;
        this.route = route;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscription = this.slService.startredEditing
            .subscribe((index) => {
            this.editMode = true;
            this.editedItemIndex = index;
            this.editedItem = this.slService.getIngredient(index);
            this.slForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
        });
    }
    //
    onAddItem(form) {
        const value = form.value;
        const newIngredient = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.slService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }
    onDelete() {
        this.slService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ShoppingEditComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], ShoppingEditComponent.prototype, "slForm", void 0);
ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-edit',
        template: __webpack_require__(/*! raw-loader!./shopping-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
        styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
    })
], ShoppingEditComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");



let ShoppingListComponent = class ShoppingListComponent {
    constructor(slService) {
        this.slService = slService;
    }
    ngOnInit() {
        this.ingredients = this.slService.getIngredients();
        this.subscription = this.slService.ingredientChanged
            .subscribe((ingredients) => {
            this.ingredients = ingredients;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onEditItem(index) {
        this.slService.startredEditing.next(index);
    }
};
ShoppingListComponent.ctorParameters = () => [
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }
];
ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-list',
        template: __webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html"),
        styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
    })
], ShoppingListComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class ShoppingListService {
    constructor() {
        this.ingredientChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.startredEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Tomatoes', 10)
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients) {
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    updateIngredient(index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularProject\my-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map